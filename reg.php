<?php
   header("content-type","text/html;charset=utf-8");
   //接收前段传来数据；
       $userId = $_POST["userName"];
       $userPass = $_POST["userPass"];
   //建立链接并选择数据库；
       $con = mysql_connect("localhost","root","root");
       if(!$con)
       {
       	echo "0";
       }
   mysql_select_db("goumeishop",$con);//选择数据库
   //执行SQL语句  
   $sqlStr = "insert into user(userId,userPass)values('".$userId."','".$userPass."')";
   mysql_query($sqlStr,$con);
   
   mysql_close($con);
   echo "1";
  
?>