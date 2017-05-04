<?php
     header("content-type","text/html;charset=utf-8");
     $userId=$_GET['userName'];
     //建立并选择数据库；
     $con=mysql_connect("localhost","root","root");
     if(!$con){
     	//echo "0";
     }
     mysql_select_db("goumeishop",$con);
     $sqlStr="select userId from user where userId='".$userId."'";
     $result=mysql_query($sqlStr,$con);
     $queryNum = mysql_num_rows($result);
     
     if($queryNum>0){
     	echo "1";
     }else{
     	echo "0";
     }
     mysql_close($con);
     
?>