Vue.component('v-input',{
    props:['value'],
    template:`
            <div>
                <label for="name">你的昵称：</label>
                <input id="name" style="width: 400px;" :value="value" @input="handleit">
            </div>
    `,
    methods:{
        handleit:function (event) {
            //这个是修改了传进来的value
            this.value = event.target.value;
            //input事件是想父组件的v-model进行数据的修改
            this.$emit('input',event.target.value)
        }
    }
})

Vue.component('v-textarea',{
    props:['value'],
    template:`
            <div>
                <label for="text">留言内容：</label>
                <textarea ref="text" @input="handleit" :value="value" id="text" placeholder="说点什么" class="textarea"></textarea>
            </div>
    `,
    methods:{
        handleit:function (event) {
            this.value = event.target.value;

            this.$emit('input',event.target.value)
        },
        focus:function () {
            this.$refs.text.focus();
        }
    }
})