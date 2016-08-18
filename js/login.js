//获取屏幕可视区域的宽度
function $w(){
	return document.documentElement.clientWidth || document.body.clientWidth || document.innerWidth;
}

function $h(){
	return document.documentElement.clientHeight || document.body.clientHeight || document.innerHeight;
}
// 获取 样式
// function getCSS (curEle ,attr ){
//      var val = null , reg = null;
//      if(window.getComputedStyle){
//           // val = window.getComputedStyle(curEle,null )[attr];
//           val = window.getComputedStyle(curEle,null)[attr];
//      }else{
//           if( attr == "opacity"){
//                //如果传进来的是opacity,说明我想获取的是透明度,但是在IE678下透明度需要使用filter
//                val = cueEle.currentStyle ["filter" ];
//                //alpha (opacity =10) 把获取到的结果进行剖析,获取里面的数字
//                reg = /^alpha\(opacity=( \d+(?:\.\d+)? )\)$/i;
//                //?:\.\d+  只匹配 不捕获
//                val = reg.test(test)? reg.exec(val)[1]/100:1;
//           }else{
//                val = curEle.currentStyle [attr];
//           }
//      }
//      reg = /^(-?\d+(\.\d+)?) (px | pt | rem | em ) ?$/i ;
//      return val;
// }



// jquery
$(function(){
	// 正常登录 界面
	var $box = $("#box");
	// 二维友登录 界面
	var $box2 = $("#box2");
	// 获取 user
	var $user = $("#user");
	// 获取 pwd
	var $pwd = $("#pwd");

	//获取  二维码
	var $ewm = $("#ewm");
	// 获取 关闭 按钮
	var $close = $("#close");

	// 屏幕 宽
	console.log($w());
	// 屏幕 高
	// console.log($h());
	// console.log(typeof($box)[0]);


	// 动态 设置 box  box2位置  因为要永远 在 屏幕中间,所以 top screenH - 
	// var boxW = getCSS($box,"width");
	var boxW = parseFloat($box.css("width"));
	console.log(boxW);
	var box2W = parseFloat($box2.css("width"));
	console.log(box2W);

	// $box.css({
	// 	"margin-top":$h()/2 - boxW +"px"
	// });

// ============================
// =============================
//test
	// 设置  footer
	//footer  的位置  永远  在 最下边
	var $footer = $("#footer");

/*	
	// box 的高度
	var boxH = parseFloat($box.css("height"));
	console.log("boxH:"+boxH);
	// box 的margin-top
	var boxMarginTop = parseFloat($box.css("margin-top"));
	console.log("boxMarginTop:"+boxMarginTop);
	// footer 的高
	var footerH = parseFloat($footer.css("height"));
	console.log(footerH);
	//footer  的margin-top
	$footer.css({
		"margin-top":$h() - boxMarginTop - boxH - footerH/2 + "px"
	});
*/
	// js 方法
	// console.log($("footer")[0].offsetTop);
	//jq  方法
	console.log($("#footer")[0].offsetTop);
	console.log($h());

//===================================
//===================================
	//点击  二维码 或  关闭 按钮 切换  界面 
	$ewm.click(function(){
		console.log("二维码被 点击");
		$box.css("display","none");
		$box2.css("display","block");
	});

	$close.click(function(){
		console.log("关闭 被点击");
		$box2.css("display","none");
		$box.css("display","block");
	});

	//当 keydown 的时候  隐藏 ts
	$(":text,:password").keydown(function(){
		$("#ts").hide();
	});

	// 登录
	$("#login").click(function(){
		// 用户 密码为空
		if($user.val().length ==0 || $pwd.val().length ==0){
			console.log("ts");
			// $("<img ").insertBefore$("#pwd")
			$("#ts").css("display","block");
			//$("#ts_span").html("用户名或密码不能为空");
			$("#ts_span").html("请输入帐号");
			$("#ts_span").css("font-size","8px");
			// 更改 usr 外边框
			$("#user").css("outline-color","orange");
			// outline-color: orange;
			// 更改 user 的外边框 颜色
			$("#user").css({
				"border-width":"5px",
				"border-color":"orange"
			});
		}
	});

	// 通过ID获取按钮
	$("#QQ").click(function(){
		console.log("qq");
		window.open("https://graph.qq.com/oauth/show?which=Login&display=pc&response_type=code&client_id=100284651&redirect_uri=https://account.xiaomi.com/pass/sns/login/load&state=7b22736964223a226d695f6573686f70222c226c6f63616c65223a227a685f434e222c2263616c6c6261636b223a22687474702533412532462532466f726465722e6d692e636f6d2532466c6f67696e25324663616c6c6261636b253346666f6c6c6f777570253344687474702532353341253235324625323532467777772e6d692e636f6d2532353246696e6465782e68746d6c2532367369676e2533444e445268596a5177596d4e6c5a5467325a474a685a6a49304d544a6a59325a694d544e695a5745784f444d77596a6b774e7a67325a51253243253243222c226170706964223a22313030323834363531227d","blank");
	});

	$("#WB").click(function(){
		console.log("wb");
		window.open("https://api.weibo.com/oauth2/authorize?response_type=code&client_id=2996826273&redirect_uri=https://account.xiaomi.com/pass/sns/login/load&state=7b22736964223a226d695f6573686f70222c226c6f63616c65223a227a685f434e222c2263616c6c6261636b223a22687474702533412532462532466f726465722e6d692e636f6d2532466c6f67696e25324663616c6c6261636b253346666f6c6c6f777570253344687474702532353341253235324625323532467777772e6d692e636f6d2532353246696e6465782e68746d6c2532367369676e2533444e445268596a5177596d4e6c5a5467325a474a685a6a49304d544a6a59325a694d544e695a5745784f444d77596a6b774e7a67325a51253243253243222c226170706964223a2232393936383236323733227d","blank");
	});

	$("#ZFB").click(function(){
		console.log("zfb");
		window.open("https://auth.alipay.com/login/express.htm?goto=https%3A%2F%2Fmemberexprod.alipay.com%3A443%2Fauthorize%2FuserAuthQuickLoginAction.htm%3Fe_i_i_d%3Dae885101e468e148583a864aa4429d6f","blank");
	});

})
