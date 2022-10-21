<template>
    <div class="body1">
<div class="jd">
    <div class="title"> 接单</div>
    <div class="jj">均价<span>984</span>元/㎡</div>
</div> 

    <div class="mjValue">126,783</div> 

    <div class="jeValue">921,2</div> 

    </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core'
export default {
    name: "centerTop",
    setup () {

        onMounted(() => {
        })

        return {
        }
    }
}
</script>

<style lang="scss" scoped>
.body1{
    background: url("../../../assets/image/centerTop.png") no-repeat;
    background-size: 100% 100%;
    color: #fff;
    font-family: SourceHanSansSC-Regular;
    display: flex;
    flex-flow: row nowrap;
    justify-content:space-around;
    align-items: center;
    font-size: 1rem;
    text-align: center;
    .title{
     font-family:YouSheBiaoTiHei;
	font-size: 1.8rem;
    font-weight: bold;
    background: linear-gradient(to bottom,#ff9023,#ffc06c,#ffeeb2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
    }
    .jd{
        margin-left: -5%;
        margin-top: -2%;
    }
.jj{
    // padding-top: 5%;
    white-space: nowrap; 
    color: #fff;
    font-size: 0.8rem;
    letter-spacing: 0.1rem;
    span{
    margin-left: 2%;
    margin-right: 2%;
        font-family: DINPro-Bold;
	color: #ffcb98;
    }
}
.mjValue, .jeValue{
    margin-top: 5%;
    font-family: DINPro-Bold;
    font-size: 2rem;
}
.mjValue{
    margin-left: -8%;
}
    .jeValue{
        color: #93e1ff;
}
}
</style>