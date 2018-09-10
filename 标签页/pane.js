Vue.component('pane',{
    name:'pane',
    template:'<div class="pane" v-show="show"><slot></slot></div>',
    props:{
        name:{
            type:String
        },
        label:{
            type:String,
            default:''
        }
    },
    data:function () {
        return {
            show:true
        }
    },
    methods:{
        update:function () {
            this.$parent.update();
        }
    },
    watch:{
        label:function () {
            this.update()
        }
    },
    mounted: function () {
          this.update()
    }

})