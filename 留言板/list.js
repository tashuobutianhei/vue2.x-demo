Vue.component('list',{
    props:['list'],
    template:`
           <div>
                <div v-for="(item,index) in list" class="list">
                    <span>{{item.name}}:</span>
                    <p style="display: inline-block">{{item.text}}</p>
                    <span style="cursor: pointer" class="callback" :index="index" @click="replay(index)">回复</span>
                    <span style="cursor: pointer" class="delete">删除</span>
                </div>
                <div v-show="list.length==0">
                    <p>暂无评论</p>
                </div>
           </div>
    `,
    methods:{
        replay:function (index) {
            this.$emit('replay',index);
        }
    }
})

