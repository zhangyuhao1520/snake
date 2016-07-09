$(function(){
	// 开场
		$(function(){
		$(document).on('click',function(){
			$('.kaichang').toggleClass('animation');
		})
	})
		
	// 画场景  规划坐标
	for (var i = 0; i < 20; i++) {
		for (var j = 0; j < 20; j++) {
			/*var g = Math.floor(Math.random()*30+155);
			var b = Math.floor(Math.random()*100);*/
			$('<div>').addClass('block').attr('id',i+'-'+j)/*.css({
			'backgroundColor':'rgba(0,'+g+','+b+',0.7)'
			})*/.appendTo('.changjing');
		}
	}
	
	var dict={
	'0-1':true,
	'0-2':true,
	'0-3':true,
	}
	// 数据  画蛇
	var she=[{x:0,y:1},{x:0,y:2},{x:0,y:3}];

	// 初始化
	/*var zhaodian=function(dian){
		return $('#'+dian.x+'_'+dian.y)
	}
	var init=function(){
		$('#0_0,#0_1,#0_2').addClass('she');
		$('#8_8').addClass('shiwu');
		for(var i=0; i<she.length;i++){
			zhaodian(she[i]).addClass('she');
		}
		zhaodian(shiwu).addClass('shiwu');
	}
	init();
*/
	for (var i = 0; i < she.length; i++) {
		$('#'+she[i].x+'-'+she[i].y).addClass('she');
	}



/*	//移动函数
	move=function(){
		var jiutou=she[she.length-1];
		var xintou=she{x:jiutou.x,y:jiutou.y+1};
		if (fangxiang==='you') {
			var xintou={x:jiutou.x,y:jiutou:y+1};
		}else if(fangxiang='zuo'){
			var xintou={}
		}else if(fangxiang='shang'){
			var xintou={}
		}else if(fangxiang='xia'){
			var xintou={}
		}

		if (xintou.y>19 || xintou.y<0 || xintou.x<0 || xintou.x>19 ) {
			alert('over');

		}*/

		//放食物
		var fangshiwu=function(){
			var a=Math.floor(Math.random()*20);
			var b=Math.floor(Math.random()*20);
			$('#'+a+'-'+b).addClass('shiwu');
			return{
				x:a,
				y:b
			}
		}
		var shiwu=fangshiwu();
		
		//动起来
		var fangxiang='xia';
		move=function(){
			var jiutou=she[she.length-1];
			if (fangxiang ==='you') {
				var xintou={
					x:jiutou.x,
					y:jiutou.y+1
				}
			}else if(fangxiang==='zuo'){
				var xintou={
					x:jiutou.x,
					y:jiutou.y-1
				}
			}else if(fangxiang==='xia'){
				var xintou={
					x:jiutou.x+1,
					y:jiutou.y
				}
			}else if(fangxiang==='shang'){
				var xintou={
					x:jiutou.x-1,
					y:jiutou.y
				}
			}
		

		if(xintou.x<0 || xintou.x>19 || xintou.y<0 || xintou.y>19){
			$('.changjing .tishi').css({'display':'block'});
			jieshu();
			return;
		}
		if(dict[xintou.x+'-'+xintou.y]){
			alert("撞到自己了");
			jieshu();
			return;
		}

		//吃到食物
		she.push(xintou);
		dict[xintou.x+'-'+xintou.y]=true;
		$('#'+xintou.x+'-'+xintou.y).addClass('she');
		if (xintou.x===shiwu.x && xintou.y===shiwu.y) {
			$('#'+shiwu.x+'-'+shiwu.y).removeClass('shiwu');
			shiwu=fangshiwu();
		}else{
			var weiba=she.shift();
			delete dict[weiba.x+'-'+weiba.y]
			$('#'+weiba.x+'-'+weiba.y).removeClass('she');
		}
	}

	var t= setInterval(move,200);
	var jieshu=function(){
		clearInterval(t)
	}
	$(document).on('keyup',function(e){
		e.preventDefault();
		var biao={
			'zuo':37,'you':39,'shang':38,'xia':40
		}
		if (Math.abs(e.keyCode-biao[fangxiang])==2) {
			return;
		}
		if(e.keyCode===37){
			fangxiang='zuo';
		}
		if(e.keyCode===39){
			fangxiang='you';
		}
		if(e.keyCode===38){
			fangxiang='shang';
		}
		if(e.keyCode===40){
			fangxiang='xia';
		}
	})
/*		if (xintou.x===shiwu.x&&xintou.y===shiwu.y) {
			zhaodian(shiwu).removeClass('shiwu');
			!!!
		}else{
			var weiba=she.shift();
			zhaodian(weiba).removeClass('she');
		}


		she.push(xintou);
		zhaodian(xintou).addClass('she');

		var weiba=she.shift();
		zhaodian(weiba).removeClass('she');
	}

	var timerId;
	kaishi=function(){
	timeId=setInterval(move,500);
  }
    zanting=function(){

    }

    $(docuemnt).on(keydown)*/

})