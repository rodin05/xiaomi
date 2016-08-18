/**
 * Created by rodin on 2016/7/27.
 */
(function(){
    var oDapei=document.getElementById('dapei');
    var oUl=oDapei.getElementsByTagName('ul')[0];
    var aLi=oUl.getElementsByTagName('li');
    var oDapeilist=document.getElementById('dapeilist')
    var aDiv=utils.getChildren(oDapeilist);
    for(var i=0;i<aLi.length;i++){
        aLi[i].index=i;
        aLi[i].onmouseover=function(){
            for(var j=0;j<aLi.length;j++){
                aLi[j].className='';
            }
            this.className='on';
            for(var k=0;k<aDiv.length;k++){
                k===this.index?utils.addClass(aDiv[k],'on'):utils.removeClass(aDiv[k],'on');
            }
        }
    }

})()