function isNumber(value){
    return (/(^-?[0-9]+\.{1}\d+$)|(^-?0(1)$)|(^-?[1-9][0-9]*$)/).test(value+'');
}

Vue.component('input-number',{
    template:'<div>' +
    '<input  @change="handleChange" :value="currentvalue">' +
    '<button @click="handleUp"  :disabled="currentvalue >= max">+</button>' +
    '<button @click="handleDown" :disabled="currentvalue <= min">-</button>' +
    '</div>',
    props:{
        max:{
            type:Number,
            default:Infinity
        },
        min:{
            type:Number,
            default:Infinity
        },
        value:{
            type:Number,
            default:0
        }
    },
    data:function () {
        return {
            currentvalue:this.value
        }
    },
    methods:{
        handleUp:function () {
            if(this.currentvalue >= this.max) return;
            this.currentvalue++;
        },
        handleDown:function () {
            if(this.currentvalue <= this.min) return;
            this.currentvalue--;
        },
        handleChange:function(event) {
            var val = event.target.value.trim();
            var max = this.max;
            var min = this.min;

            if(isNumber(val)){
             val = Number(val);
             this.currentvalue = val;

             if(val>max){
                 this.currentvalue=max
             }else  if(val<min){
                 this.currentvalue=min
             }
            }
        },
        upDate:function (val) {
            if(val>this.max) val = this.max;
            if(val<this.min) val = this.min;
            this.currentvalue = val;
        }
    },
    mounted:function () {
        this.upDate(this.value)
    }
})