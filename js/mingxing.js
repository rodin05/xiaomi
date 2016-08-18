/**
 * Created by rodin on 2016/7/26.
 */
(function(){
    var oBOx=document.getElementById('starlist');
    var oBoxInner=oBOx.getElementsByTagName('div')[0];
    var aDiv=oBoxInner.getElementsByTagName('ul');
    var oInp=document.getElementById('star')
    var aA=oInp.getElementsByTagName('input');
    //1.Í¼Æ¬×Ô¶¯ÂÖ²¥
    clearInterval(autoTimer);
    var autoTimer=setInterval(autoMove,3000);
    var flag=-1226

    function autoMove(){
        zhufengAnimate(oBoxInner,{left:flag},500)
        if(flag==0){
            flag=-1226
            utils.addClass(aA[1],'bg')
            utils.removeClass(aA[0],'bg')
        }else{
            flag=0;
            utils.addClass(aA[0],'bg')
            utils.removeClass(aA[1],'bg')

        }

    }
    aA[1].onclick=function(){
        var cur=utils.css(oBoxInner,'left');
        utils.addClass(aA[1],'bg')
        utils.removeClass(aA[0],'bg')
        if(cur==0){
            return;
        }
        zhufengAnimate(oBoxInner,{left:cur+1226},500)

    }
    aA[0].onclick=function(){
        var cur=utils.css(oBoxInner,'left');
        utils.addClass(aA[0],'bg')
        utils.removeClass(aA[1],'bg')
        if(cur==-1226){
            return;
        }
        zhufengAnimate(oBoxInner,{left:cur-1226},500)

    }
    oInp.onmouseover=function(){
        clearInterval(autoTimer);
    }
    oInp.onmouseout=function(){
        autoTimer=setInterval(autoMove,3000);
    }
})()