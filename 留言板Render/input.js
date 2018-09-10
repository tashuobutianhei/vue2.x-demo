Vue.component('v-input',{
    props:['value'],
    render:function (createElement) {
        var _this = this;
        return createElement('div',[
               createElement('label',{
                   attrs:{
                       for:'name'
                   }
                },'你的昵称'),
                createElement('input',{
                    attrs:{
                        id:'name'
                    },
                    domProps:{
                        value:_this.value
                    },
                    on:{
                        input:function (event) {
                            _this.value =  event.target.value;
                            _this.$emit('input',event.target.value)
                        }
                    }
                })

        ])
    }
})


Vue.component('v-textarea',{
    props:['value'],
    render:function (createElement) {
        var _this = this;
        return createElement('div',[
            createElement('label',{
                attrs:{
                    for:'text'
                }
            },'留言内容'),
            createElement('textarea',{
                attrs:{
                    id:'text',
                    class:'textarea'
                },
                domProps:{
                    value:_this.value
                },
                ref:'text',
                on:{
                    input:function (event) {
                        _this.value =  event.target.value;
                        _this.$emit('input',event.target.value)
                    }
                }
            })

        ])
    },methods:{
        focus:function () {
            this.$refs.text.focus();
        }
    }
})