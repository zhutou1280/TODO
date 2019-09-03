import React, { Component } from "react";
import { Table, Button, Modal, Drawer, Input, Form } from "antd";
import { RestDataSource } from "./RestDataSource";
import uuid from "uuid";
const dataSource = new RestDataSource();

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 }
  }
};

const buttonLayout = {
  wrapperCol: { span: 14, offset: 4 }
};

class TodoTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerVisiable: false,
      record: null,
      todos: []
    };
  }

  componentDidMount() {
    this.getTodo();
  }

  componentDidUpdate(props) {
    if (this.props.completed != props.completed) {
      this.getTodo();
    }
  }

  getTodo = _ => {
    let { completed } = this.props;
    dataSource.SendRequst("get", "/todo/list").then(res => {
      let todos = res.data || [];
      this.setState({
        todos: todos
          .filter(v => v.completed == completed)
          .map(v => {
            v.content = v.text;
            return v;
          })
      });
    });
  };

  newTodo = _ => {
    this.setState({
      record: null
    });
    this.drawOpen();
  };

  openEdit(record) {
    this.drawOpen();
    this.setState({
      record: record
    });
  }

  handleDelete(record) {
    Modal.confirm({
      title: "提示",
      centered: true,
      content: "确定要删除该代办项吗？",
      onOk: () => {
        console.log("删除");
        dataSource
          .SendRequst("delete", "/todo/del", {
            id: record.id
          })
          .then(v => {
            this.getTodo();
          });
      }
    });
  }

  handleSubmit = _ => {
    this.drawClose();
    let data = this.props.form.getFieldsValue();

    let { record } = this.state;
    if (record) {
      dataSource
        .SendRequst("post", "/todo/edit", {
          completed: false,
          text: data.content,
          id: record.id,
          remark: data.remark
        })
        .then(v => {
          this.getTodo();
        });
    } else {
      dataSource
        .SendRequst("post", "/todo/add", {
          completed: false,
          text: data.content,
          id: uuid.v1(),
          remark: data.remark
        })
        .then(v => {
          this.getTodo();
        });
    }

    console.log("发请求！", {
      completed: false,
      text: data.content,
      id: "",
      remark: data.remark
    });
  };

  setDone = record => {
    Modal.confirm({
      title: "提示",
      centered: true,
      content: "确定要标记为完成状态吗？",
      onOk: () => {
        dataSource
          .SendRequst("post", "todo/complete", {
            id: record.id
          })
          .then(v => {
            this.getTodo();
          });
      }
    });
  };

  drawOpen = _ => {
    this.setState({
      drawerVisiable: true
    });
  };
  drawClose = _ => {
    this.setState({
      drawerVisiable: false
    });
  };

  render() {
    let { todos } = this.state;
    const dataSource = todos;

    const columns = [
      {
        title: "内容",
        dataIndex: "content",
        key: "content"
      },
      {
        title: "备注",
        dataIndex: "remark",
        key: "remark"
      },
      {
        title: "完成状态",
        dataIndex: "completed",
        key: "completed",
        render: v => (v ? "已完成" : "未完成")
      },
      {
        title: "创建时间",
        dataIndex: "timeStamp",
        key: "timeStamp",
        render: value =>
          new Date(value)
            .toString()
            .split(" ")
            .slice(1, 5)
            .join(" ")
      },
      {
        title: "操作",
        align: "center",
        render: (text, record) => {
          let { completed } = this.props;
          if (completed) {
            return (
              <div>
                <Button
                  onClick={() => {
                    this.handleDelete(record);
                  }}
                >
                  删除
                </Button>
              </div>
            );
          } else {
            return (
              <div>
                <Button
                  onClick={() => {
                    this.setDone(record);
                  }}
                >
                  {" "}
                  设为已完成
                </Button>
                <Button
                  onClick={() => {
                    this.openEdit(record);
                  }}
                >
                  编辑
                </Button>
                <Button
                  onClick={() => {
                    this.handleDelete(record);
                  }}
                >
                  删除
                </Button>
              </div>
            );
          }
        }
      }
    ];
    const { getFieldDecorator } = this.props.form;
    const { record, drawerVisiable } = this.state;

    return (
      <div>
        <div className="toolbar">
          <Button type="primary" onClick={this.newTodo}>
            新建Todo
          </Button>
        </div>
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={false}
          rowKey={record => record.id}
        />
        <Drawer
          width="400px"
          title={record ? "编辑ToDo" : "新建Todo"}
          placement="right"
          closable={true}
          onClose={this.drawClose}
          visible={drawerVisiable}
          destroyOnClose={true}
        >
          <Form {...formItemLayout}>
            <Form.Item label="内容">
              {getFieldDecorator("content", {
                initialValue: record ? record.content : "",
                rules: [
                  {
                    required: true,
                    message: "内容不能为空"
                  }
                ]
              })(<Input placeholder="请输入内容" />)}
            </Form.Item>

            <Form.Item label="备注">
              {getFieldDecorator("remark", {
                initialValue: record ? record.remark : ""
              })(<Input.TextArea />)}
            </Form.Item>

            <Form.Item {...buttonLayout}>
              <div className="button-bar-right">
                <Button
                  type="primary"
                  style={{ marginRight: "10px" }}
                  onClick={this.handleSubmit}
                >
                  确定
                </Button>
                <Button type="gray" onClick={this.drawClose}>
                  取消
                </Button>
              </div>
            </Form.Item>
          </Form>
        </Drawer>
      </div>
    );
  }
}

export default Form.create()(TodoTable);
