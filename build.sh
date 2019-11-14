#!/bin/bash

uiPath='/home/git/todo/TODO/antui/build'
wrap_UiPath='/home/git/todo/TODO/antui/'
serverPath='/home/git/todo/TODO/todoServer/public'

cd $wrap_UiPath
npm run build


function travFolder(){
   echo $1
   flist=`ls $1`
   cd $1
   for f in $flist
   do
      if test -d $f

      then 
	cp -arf $f $serverPath

      else
     	mv $f $serverPath
      fi 
   done
    cd ../
}

uiPath='/home/git/todo/TODO/antui/build'

travFolder $uiPath

echo 'start server---------------'

pid=`netstat -nlp|grep 3500| awk '{print $7}' | awk -F "/" '{print $1}'`


echo "pid:$pid"
if [ -n "$pid" ] 
then 
    kill -9  $pid    
fi

cd $serverPath
cd ..
nohup node app.js > runtime.log 2>&1 &


