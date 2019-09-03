import Axios from "axios";

export class RestDataSource {
  constructor(err_handler) {
    this.error_handler = err_handler || (() => {});
  }

  SendRequst = (method, url, params, data) =>
    Axios.request({ method, url, params, data });
}
