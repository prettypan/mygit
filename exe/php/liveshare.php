<?php

require_once ('../config/config_global.php');

$liveid = $_GET['liveid'];

$sql = "select a.liveimgaddr, a.audiences, b.nick from livelist a, uservcoin b where a.liveuserid = b.userid and a.liveid = $liveid";
$liveinfor = $db->fetch_first($sql);

?>

<html>
<body>
<script type="text/javascript">
	function setRem() {
	var oHtml = document.querySelector('html');
	var width = oHtml.getBoundingClientRect().width;
	if(width > 680) width = 680;
	oHtml.style.fontSize = width / 16 + 'px';
}
window.onload = function() {
		setRem();
	}
</script>
<style type="text/css">
	*{
		margin: 0;
	}
    html,body{
        /*background: #70e3fc;*/
    }
    body{
    	height: 1000rem;
    }
	#img_box{
		width: 100%;
        text-align: center;
	}
	#img_box img{
		width: 100%;
		display: block;
        /*height:33vh;*/

    }
	#img_box p{
		margin: 2vh;
		text-align: left;
		font-size: 1.35em;
		color:#df0100;
	}
	.arrow{
		height: 4.5rem;
		width: 100%;
		background: #555;
		opacity: .7;
		position: fixed;
		bottom: 0;
		display: -webkit-flex; /* Safari */
  		display: flex;
  		flex-direction: row;
  		justify-content: space-around;
  		align-items: center;
  		color: #fff;
  		font-family: "微软雅黑";
  		font-size: 0.8rem;
	}
	.arrow .img{
		width: 20%;
		height: 3.5rem;
	}
	.arrow .img img{
		height: 100%;
	}
	#info{
		width:35%;
	}
	#btn{
		width:35%;
		border: 1px solid #fff;
		border-radius: 1.1rem;
		padding: 0.4rem;
	}
</style>


<div id="img_box">
    <!--<img src="<?php echo $liveinfor['liveimgaddr'] ?>">-->
	<p><?php echo $liveinfor['nick'] ?>正在唯美结缘平台进行互动直播</p>
	<p>当前在线人数：<?php echo $liveinfor['audiences'] ?>人</p>
<!--    	<a href=""><input type="button" name="btn" id="btn" value="点击下载APP" /></a>-->
</div>
<div class="arrow">
		<div class="img">
			<img src="picture/201609280857590.png"/>
		</div>
		<span id="info">
				正在唯美结缘平台进行互动直播
		</span>
		
		<span id="btn">
				正在唯美结缘平台进行互动直播
		</span>
</div>




</body>
</html>


