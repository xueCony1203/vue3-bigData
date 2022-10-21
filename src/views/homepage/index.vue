<template>
  <div class="home-container">
      <!-- 左边接单 -->
        <div class="lr">
        <div class="echartList">
          <!-- 事业部 -->
          <div class="chartTop">
            <img class="title1" style="" src="@/assets/image/divisionTitle.png" alt="" />
            <div class="chart-item">
             <!-- <division-left-chart1 style="width:50%;"/>   -->
             <type-count style="width:50%;"/>
              <type-count style="width:50%;"/>
            </div>
          </div>
          <!-- 销售部 -->
          <div class="chartCenter">
            <img class="title1" style="" src="@/assets/image/saleTitle.png" alt="" />
            <div class="chart-item">
             <!-- <division-left-chart1 style="width:50%;"/> -->
            </div>
          </div>
          <!-- 板层分布 -->
          <div class="chartBottom">
            <img class="title1" style="" src="@/assets/image/layTitle.png" alt="" />
            <div class="chart-item">
             <!-- <division-left-chart1 style="width:50%;"/>   -->
        
            </div>
          </div>
        </div>
      </div>
      <!-- 中间 -->
        <div class="Zcenter">
        <div class="center">
          <!-- 接单 -->
          <center-top  class="centerTop" />
         <!-- 销售-->
         <center-bottom class="centerBottom" />
      </div>
        </div>
      <!-- 右边销售 -->
      <div class="lr">
        <div class="echartList">
            <!-- 事业部 -->
          <div class="chartTop">
            <img class="title1" style="" src="@/assets/image/divisionTitle.png" alt="" />
            <div class="divisionRight">
            <!-- <box-container>
            </box-container> -->
          </div>
          </div>
            <!-- 销售部 -->
          <div class="chartCenter">
            <img class="title1" style="" src="@/assets/image/saleTitle.png" alt="" />
            <div class="chart-item">
             <!-- <division-left-chart1 style="width:50%;"/>   -->
            
            </div>
          </div>
            <!-- 板层分布 -->
          <div class="chartBottom">
            <img class="title1" style="" src="@/assets/image/layTitle.png" alt="" />
            <div class="chart-item">
             <!-- <division-left-chart1 style="width:50%;"/>   -->
      
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import boxContainer from "@/components/boxContainer/index";
import fourAngel from "@/components/fourAngel/index";
import countTo from "@/components/countTo/index";
import {
  divisionLeftChart1,
  centerTop,
  centerBottom,
  typeCount,
  scatterMap,
  wordChart,
  funnelChart,
  lineChart,
  liquidChart,
} from "./components";
import useResize from "@/componentApi/useResize.js";
import { ref } from "vue";

export default {
  name: "homepage",
  components: {
    boxContainer,
    divisionLeftChart1,
    centerTop,
    centerBottom,
    typeCount,
    scatterMap,
    wordChart,
    funnelChart,
    lineChart,
    liquidChart,
    fourAngel,
    countTo,
  },
  setup(props, context) {
    // debugger
    let s = [1,2,3,4];
    const s1= s.slice(2);
    for (var i = 0; i < 5; i++){
      setTimeout(() => {
        console.log(i);
      }, 0);
    }
    let str = 2;
    console.log("consolelog1", str.toString().padStart(2,'0'));
    return {
     
    };
  },
};
</script>

<style lang="scss" scoped>
.home-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  // position: relative;
  .lr{
    width: 32.5%;
  height: 100%;
  }
  .Zcenter{
    width: 35%;
  height: 100%;
  }
  .echartList {
    margin-left:1.5%;
    margin-right:1.5%;
    width: 97%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
.title1{
  width:100%;
  height: 2.5rem;
}
    .chartTop {
      height: 18.2rem;
      width: 100%;
    }  
    .chartCenter {
      height: 12.9rem;
      width: 100%;
}  
    .chartBottom {
      height: 25rem;
      width: 100%;
    }  
      .chart-item {
      display: flex;
      height: 90%;
    }
    .divisionRight{
    height:100%;
    width: 98%;

  }
  }
  .center{
    margin-left: 3%;
    margin-right: 3%;
    width: 94%;
    height: 95%;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;

  .centerTop{
    height: 30%;
    width: 100%;
  }
  .centerBottom{
    height: 30%;
    width: 100%;
  }
  }

}
</style>
