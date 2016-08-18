/**
 * Created by rodin on 2016/7/26.
 */
(function(){
    var oBox=document.getElementById('banner');
    var oBoxInner=oBox.getElementsByTagName('div')[0];
    var aDiv=oBoxInner.getElementsByTagName('div');
    var aImg=oBoxInner.getElementsByTagName('img');
    var oUl=document.getElementById('circle');
    var aLi=oUl.getElementsByTagName('li');
    var oBtnLeft=document.getElementById('change').getElementsByTagName('a')[0];
    var oBtnRight=document.getElementById('change').getElementsByTagName('a')[1];
    //通过JS先让第一张图片显示
    zhufengAnimate(aDiv[0],{opacity:1},1000)
    var step=0;
    var autoTimer=null;
    var interval=2000;
    //1.图片渐隐渐现
    autoTimer=setInterval(autoMove,interval);
    function autoMove(){
        if(step>=aDiv.length-1){
            step=-1;
        }
        step++;
        setBanner();
    }
    function setBanner(){
        for(var i=0;i<aDiv.length;i++){
            var curEle=aDiv[i];
            if(i===step){
                utils.css(curEle,'zIndex',1);
                zhufengAnimate(curEle,{opacity:1},1000,function(){
                    var siblings=utils.siblings(this)
                    for(var i=0;i<siblings.length;i++){
                        utils.css(siblings[i],'opacity',0)
                    }
                })
                continue;
            }
            utils.css(curEle,'zIndex',0)

        }
        bannerTip();
    }
    //2.焦点自动轮播
    function bannerTip(){
        for(var i=0;i<aLi.length;i++){
            if(i===step){
                aLi[i].className='bg';
            }else{
                aLi[i].className='';
            }
        }
    }
    //3.移入移出
    oBox.onmouseover=function(){
        clearInterval(autoTimer);
        //oBtnLeft.style.display=oBtnRight.style.display='block';
    }
    oBox.onmouseout=function(){
        autoTimer=setInterval(autoMove,interval);
        //oBtnLeft.style.display=oBtnRight.style.display='none';
    }
    //4.点击焦点手动切换
    handleChange();
    function handleChange(){
        for(var i=0;i<aLi.length;i++){
            aLi[i].index=i;
            aLi[i].onclick=function(){
                step=this.index;
                setBanner();
            }
        }
    }
    //5.点击左右按钮手动切换
    oBtnRight.onclick=autoMove;
    oBtnLeft.onclick=function(){
        if(step<=0){
            step=aLi.length
        }
        step--;
        setBanner();
    }

})()