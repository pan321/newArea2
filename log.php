<?php		
	  header("content-type","text/html;charset=utf-8");
   //接收前段传来数据；
       $userId = $_GET["userName"];
       $userPass = $_GET["userPass"];
   //建立链接并选择数据库；
    $con = mysql_connect("localhost","root","root");

	
	if(!$con){
		echo "0";	
	}
	mysql_select_db("goumeishop",$con);
    $sqlStr="select userId,userPass from user where userId='".$userId."' and userPass='".$userPass."'";
    $result=mysql_query($sqlStr,$con);

	$queryNum = mysql_num_rows($result);
     
     if($queryNum>0){
     	echo "1";
     }else{
     	echo "0";
    }
	
	mysql_close($con);   
?>