<?php
	$con = mysql_connect("localhost","root","123456");
if(!$con)
	{
		die('Could not connect:' . mysql_error());
	}
	mysql_select_db("location",$con);
	$sql = "SELECT region_name_c,region_name_e FROM t_region WHERE `level`=2"
	
?>
<html>
<head>
	<meta charset="utf-8"/>
	<title></title>
	<style type="text/css">
		.sele{
			width: 132px;
		}
	</style>
	
</head>
<body>

<form>
<select class="sele" id="provinc" name="provinc">
	<option value=""></option>
	<!--<option value="volvo">Volvo</option>
	<option value="saab">Saab</option>
	<option value="fiat" selected="selected">Fiat</option>
	<option value="audi">Audi</option>-->
</select>
<select class="sele" id="city" name="city">
	<option value=""></option>
	<!--<option value="volvo">Volvo</option>
	<option value="saab">Saab</option>
	<option value="fiat" selected="selected">Fiat</option>
	<option value="audi">Audi</option>-->
</select>
<select class="sele" id="country" name="country">
	<option value=""></option>
	<!--<option value="volvo">Volvo</option>
	<option value="saab">Saab</option>
	<option value="fiat" selected="selected">Fiat</option>
	<option value="audi">Audi</option>-->
</select>
<select class="sele" id="street" name="street">
	<option value=""></option>
	<!--<option value="volvo">Volvo</option>
	<option value="saab">Saab</option>
	<option value="fiat" selected="selected">Fiat</option>
	<option value="audi">Audi</option>-->
</select>
</form>
<script src="../jquery-1.11.3.js"></script>
<script type="text/javascript">
	var province=[],city=[],country=[];
	$.ajax({
		type:"get",
		url:"t_region.json",
		async:true,
		success:function(data){
			console.log(data);
			
			//添加省级
			for (var i = 0;i<data.data.length;i++) {
				if(data.data[i].level == 1){
					province.push(data.data[i].region_name_c);
					var opt='';
					opt = '<option value="'+ data.data[i].CODE +'">'+ data.data[i].region_name_c +'</option>';
					$('#provinc').append(opt);
//					console.log($('#provice'))
					
				}
			}
//			console.log(province);
//			console.log(city);


		//省级值改变添加市级/县级
		$('#provinc').change(function(){
			
			$('#city').children().remove();
			$('#country').children().remove();
			$('#street').children().remove();
			
			console.log($(this).children('option:selected').val());
			
			var provinceValue = $(this).children('option:selected').val();
			
			
			//添加市级
			for (var i = 0;i<data.data.length;i++) {
				
				var ciity = data.data[i].CODE.substring(0,2);
				
				if(data.data[i].level == 2 && ciity == provinceValue){
					
//					province.push(data.data[i].region_name_c);

					var opti='';
					
					opti = '<option value="'+ data.data[i].CODE +'">'+ data.data[i].region_name_c +'</option>';
					
					$('#city').append(opti);
					
//					console.log($('#provice'))
					
				}
				var cityValue = $('#city').children('option:selected').val();
				
			}
			
			//添加县级
			for (var i = 0;i<data.data.length;i++) {
					
				var ciit = data.data[i].CODE.substring(0,4);
				
				if(data.data[i].level == 3 && ciit == cityValue){
					
//					province.push(data.data[i].region_name_c);

					var opti='';
					opti = '<option value="'+ data.data[i].CODE +'">'+ data.data[i].region_name_c +'</option>';
					
					$('#country').append(opti);
					
//					console.log($('#provice'))
					
				}
				var streetValue = $('#country').children('option:selected').val();
			}
			
			//添加街道
			for (var i = 0;i<data.data.length;i++) {
					
				var cii = data.data[i].CODE.substring(0,6);
				
				if(data.data[i].level == 4 && cii == streetValue){
					
//					province.push(data.data[i].region_name_c);

					var opti='';
					opti = '<option value="'+ data.data[i].CODE +'">'+ data.data[i].region_name_c +'</option>';
					
					$('#street').append(opti);
					
//					console.log($('#provice'))
					
				}
				
			}
			
			
			//市级值改变添加县级/街道
			$('#city').change(function(){
			
				$('#country').children().remove();
				$('#street').children().remove();
				
				console.log($(this).children('option:selected').val());
				
				var cityValue = $(this).children('option:selected').val();
				
				for (var i = 0;i<data.data.length;i++) {
					
					var ciity = data.data[i].CODE.substring(0,4);
					
					if(data.data[i].level == 3 && ciity == cityValue){
						
	//					province.push(data.data[i].region_name_c);
	
						var opti='';
						
						opti = '<option value="'+ data.data[i].CODE +'">'+ data.data[i].region_name_c +'</option>';
						
						$('#country').append(opti);
						
	//					console.log($('#provice'))
						
					}
					var streetValue = $('#country').children('option:selected').val();
				}
				
				//添加街道
			for (var i = 0;i<data.data.length;i++) {
					
				var cii = data.data[i].CODE.substring(0,6);
				
				if(data.data[i].level == 4 && cii == streetValue){
					
//					province.push(data.data[i].region_name_c);

					var opti='';
					opti = '<option value="'+ data.data[i].CODE +'">'+ data.data[i].region_name_c +'</option>';
					
					$('#street').append(opti);
					
//					console.log($('#provice'))
					
				}
				
			}
			
			
			
		});
		
		$('#country').change(function(){
			
				$('#street').children().remove();
				
				console.log($(this).children('option:selected').val());
				
				var cityValue = $(this).children('option:selected').val();
				
				for (var i = 0;i<data.data.length;i++) {
					
					var ciity = data.data[i].CODE.substring(0,6);
					
					if(data.data[i].level == 4 && ciity == cityValue){
						
	//					province.push(data.data[i].region_name_c);
	
						var opti='';
						
						opti = '<option value="'+ data.data[i].CODE +'">'+ data.data[i].region_name_c +'</option>';
						
						$('#street').append(opti);
						
	//					console.log($('#provice'))
						
					}
					
				}
			
			
			
		}) 
			
		}) 

			
		}
		

		
		
	})
	
</script>
</body>
</html>