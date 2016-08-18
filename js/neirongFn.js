/**
 * Created by rodin on 2016/7/29.
 */
function NeiRong(id1,id2){
    this.oBoxInner=document.getElementById(id1);
    this.aDiv=this.oBoxInner.getElementsByTagName('div');
    this.oUl=document.getElementById(id2);
    this.aLi=this.oUl.getElementsByTagName('span');
    this.aA1=utils.next(this.oUl);
    this.aA2=utils.next(this.aA1);
    this.step=0;
    this.init();
}
NeiRong.prototype={
    constructor:NeiRong,
    init:function(){
        this.handleChange();
        this.leftRight();
    },
    autoMove:function(){
        if(this.step>=this.aDiv.length-1){
            return;
        }
        this.step++;
        zhufengAnimate(this.oBoxInner,{left:-this.step*296},300);
        this.bannerTip();
    },
    bannerTip:function(){
        for(var i=0;i<this.aLi.length;i++){
            i===this.step?this.aLi[i].className='on':this.aLi[i].className='';
        }
    },
    handleChange:function(){
        var _this=this;
        for(var i=0;i<_this.aLi.length;i++){
            _this.aLi[i].index=i;
            _this.aLi[i].onclick=function(){
                _this.step=this.index;
                zhufengAnimate(_this.oBoxInner,{left:-_this.step*296},300);
                _this.bannerTip();
            }
        }
    },
    leftRight:function(){
        var _this=this;
        _this.aA2.onclick=function(){
            _this.autoMove();
        };
        _this.aA1.onclick=function(){
            if(_this.step<=0){
                return;
            }
            _this.step--;
            zhufengAnimate(_this.oBoxInner,{left:-_this.step*296},300);
            _this.bannerTip();
        }
    }


}
new NeiRong('neirong2','circle2');
new NeiRong('neirong3','circle3');
new NeiRong('neirong4','circle4');
