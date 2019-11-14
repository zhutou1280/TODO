#!/bin/sh

pid= netstat -nlp|grep 80| awk '{print $7}' | awk -F "/" '{print $1}'
a="123"

if [ -n "$a" ]
	then 
	echo "hello"
fi

echo $pid
