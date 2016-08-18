/**
 * Created by rodin on 2016/7/29.
 */
function Dapei(id1,id2){
    this.oDapei=document.getElementById(id1);
    this.oUl=this.oDapei.getElementsByTagName('ul')[0];
    this.aLi=this.oUl.getElementsByTagName('li');
    this.oDapeilist=document.getElementById(id2)
    this.aDiv=utils.getChildren(this.oDapeilist);
    this.init();
}
Dapei.prototype={
    constructor:Dapei,
    init:function(){
        this.handleChange();
    },
    handleChange:function(){
        var _this=this;
        for(var i=0;i<_this.aLi.length;i++){
            _this.aLi[i].index=i;
            _this.aLi[i].onmouseover=function(){
                for(var j=0;j<_this.aLi.length;j++){
                    _this.aLi[j].className='';
                }
                this.className='on';
                for(var k=0;k<_this.aDiv.length;k++){
                    k===this.index?utils.addClass(_this.aDiv[k],'on'):utils.removeClass(_this.aDiv[k],'on');
                }
            }
        }
    }
}
new Dapei('dapei1','dapeilist1')
new Dapei('dapei2','dapeilist2')