var pd = {
					alert_title:'提示',
					alert_content:'8888',
					bgcolor:"#1ac386",
					btn_count:2,
					font:'0.8rem',
					btn:true,
					btn_content:function(el){
						
						var str = '<span class="confirm000" style="background:'+ this.bgcolor +';">取消</span><span class="confirm111" style="background:'+ this.bgcolor +';">确定</span>';
						if(el){
							console.log(el);
							if(el.btn_count == 1){
								var str = '<span class="confirm111" style="background:'+ this.bgcolor +';width:100%;border:0;">确定</span>';
							}else if(el.btn_count == 2){
								
							}
						}
						return str;
					},
					odv:function(el){
						
						var str = '<div id="modelBoxxx">\
							<div class="box111">\
								<div id="tipsss" class="tipsss">\
									<p style="margin:0;">'+ this.alert_title +'</p>\
									<div class="password">'+ this.alert_content +'</div>'+ this.btn_content(el) +'\
								</div>\
							</div>\
						</div>';
						return str;
					},
					odv_style: function(el){
						
						if(el){
							console.log(el.font)
							if(el.font){
								this.font=el.font;
							};
								
							}
						
						var str = '<style id="pd_style">#modelBoxxx{position: fixed;top: 0;left: 0;width: 100%;height: 100%;}\
								.box111{width: 100%;height: 100%;position: relative;}\
							.tipsss{overflow:hidden;position: absolute;top:-10%;left:50%;transform: translate(-50%,0);opacity: 0;height: 7.8rem;width: 11rem;background: '+ this.bgcolor +';border-radius: 0.5rem;color: #fff;font-size: 0.5rem;transition: all 0.3s linear;-webkit-transition: all 0.3s linear;-moz-transition: all 0.3s linear;-o-transition: all 0.3s linear;}\
							.tipsss p{text-align: center;font-size:0.7rem;display:block;height:1.7rem;line-height:1.7rem;box-sizing:border-box;}\
							.tipsss span{float:left;display:block;width:50%;height:1.8rem;text-align:center;line-height:1.5rem;font-size:0.7rem;border-right:1px solid #fff;}\
							.tipsss1{opacity: 1;position: absolute;top:30%;left:50%;}\
							.openApp{position: absolute;top:74%;left:50%;transform: translate(-50%,0);font-size: 0.7rem;}\
							 .password{height: 4.5rem;line-height: 4.5rem;text-align: center;background: #fff;color: #000;font-size: '+ this.font +';}</style>';
						return str;
					},
					alert:function(el){
							var returnvalue;
							if(el){
								if(el.title){
									this.alert_title=el.title;
								};
								if(el.content){
									this.alert_content=el.content;
								};
								if(el.bgcolor){
									this.bgcolor=el.bgcolor;
								};
								
//								this.btn_content = btn_content(el);
								
							}
							console.log(this.alert_content)
							$('body').append(this.odv_style(el));
							$('body').append(this.odv(el));
							console.log(this.odv(el))
						    setTimeout(function(){
								$('#tipsss').addClass('tipsss1');
								// setTimeout(function(){
								// 	$('#tipsss').removeClass('tipsss1');
								// 	 $('#tipsss').remove();
								// },2000);
							},100);
							
							//点击遮罩层关闭弹窗
//							$('.box111').bind('click',function() {
//								$('#tipsss').removeClass('tipsss1');
//									setTimeout(function(){
//										$('#modelBoxxx').remove();
//										$('#pd_style').remove();
//									},300);
//								
//							});
							$('.confirm111').bind('click',function(){
								$(this).css('background','#eccf8a82');
								setTimeout(function(){
									$(this).css('background','#efaa0a82');
									$('#tipsss').removeClass('tipsss1');
									setTimeout(function(){
										$('#modelBoxxx').remove();
										$('#pd_style').remove();
									},300);
								},10);
								returnvalue = true;
							});
							
							$('.confirm000').bind('click',function(){
								$(this).css('background','#eccf8a82');
								setTimeout(function(){
									$(this).css('background','#efaa0a82');
									$('#tipsss').removeClass('tipsss1');
									setTimeout(function(){
										$('#modelBoxxx').remove();
										$('#pd_style').remove();
									},300);
								},150);
								returnvalue = false;
							})
							return returnvalue;
//						$('#tipsss').bind('click',function() {
//							event = event || window.event;
//							//阻止事件冒泡
//							event.stopPropagation ? event.stopPropagation() : event.returnValue = "false";
//						});
					}
	}
