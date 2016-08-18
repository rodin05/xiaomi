/**
 * Created by rodin on 2016/7/27.
 */
(function(){
    var oBoxInner=document.getElementById('neirong1');
    var aDiv=oBoxInner.getElementsByTagName('div');
    var oUl=document.getElementById('circle1');
    var aLi=oUl.getElementsByTagName('span');
    var aA1=utils.next(oUl);
    var aA2=utils.next(aA1);
    var step=0;
    function autoMove(){
        if(step>=aDiv.length-1){
            return;
        }
        step++;
        zhufengAnimate(oBoxInner,{left:-step*296},300);
        bannerTip();

    };
    function bannerTip(){
        for(var i=0;i<aLi.length;i++){
            i===step?aLi[i].className='on':aLi[i].className='';
        }
    };
    handleChange();
    function handleChange(){
        for(var i=0;i<aLi.length;i++){
            aLi[i].index=i;
            aLi[i].onclick=function(){
                step=this.index;
                zhufengAnimate(oBoxInner,{left:-step*296},300);
                bannerTip();
            }
        }
    };
    aA2.onclick=autoMove;
    aA1.onclick=function(){
        if(step<=0){
            return;
        }
        step--;
        zhufengAnimate(oBoxInner,{left:-step*296},300);
        bannerTip();
    }

})()