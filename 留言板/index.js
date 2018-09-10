var app = new Vue({
    el:'#app',
    data:{
        list:[],
        name:'',
        text:''
    },
    methods:{
        isNull:function(){
              return this.name!=''&&this.text!=''
        },
        handle:function () {
            if(this.isNull()){
                this.list.push({
                    name:this.name,
                    text:this.text
                })
            }
            this.text='';
        },
        handleReplay:function (index) {
            this.text = '回复@'+this.list[index].name+':';
            this.$refs.text.focus();
        }
    }
})