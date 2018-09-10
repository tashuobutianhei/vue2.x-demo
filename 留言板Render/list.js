
Vue.component('list',{
    props:['list'],
    render:function (createElement) {
        var _this = this;
        var list = [];

        if(_this.list.length==0){
            console.log(666)
            return createElement('p','暂无评论');
        }else{
           _this.list.forEach(function (item,index) {
               var node =  createElement('div',{
                   attrs:{
                       class:'list'
                   }
               },[
                   createElement('span',item.name+':'),
                   createElement('p',item.text),
                   createElement('span',{
                           attrs:{
                               class:'callback'
                           },
                           domProps:{
                               index:index
                           },
                           on:{
                               click:function (event) {
                                   _this.$emit('replay',event.target.index);
                               }
                           }
                     },'回复')
                   ]
               )

               list.push(node)
           })
            return createElement('div',list)
        }
    }
})

