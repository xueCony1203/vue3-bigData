<template>
  <div class="nav-wrapper">
    <div class="bar-title" >销售管理驾驶舱</div>
    <div class="time">{{ date }} {{ time }}</div>

    <!-- <div class="mapChoose" v-if="parentInfo.length > 1 && isHome">
      <span v-for="(item, index) in parentInfo" :key="item.code">
        <span class="title" @click="chooseArea(item, index)">{{
          item.cityName == "全国" ? "中国" : item.cityName
        }}</span>
        <span class="icon" v-show="index + 1 != parentInfo.length">></span>
      </span>
    </div> -->

  </div>
</template>

<script>
import { setup, ref, onMounted, computed } from "vue";
import { getDate, getTime } from "@/utils/date.js";
// import useResize from "@/componentApi/useResize.js";
// import { useRoute, useRouter } from "vue-router";

export default {
  name: "navBar",

  setup(props, context) {
    //年月日
    const date = getDate();
    //时分秒
    const time = ref(getTime());
    // const { parentInfo, removeCommitMapInfo } = useResize();

    // const chooseArea = (item, index) => {
    //   if (parentInfo.value.length === index + 1) {
    //     return;
    //   }
    //   removeCommitMapInfo(index + 1);
    // };

    onMounted: {
      setInterval(() => {
        time.value = getTime();
      }, 1000);
    }

    return {
      date,
      time,
      // parentInfo,
      // chooseArea,
      // isHome,
    };
  },
};
</script>

<style lang="scss" scoped>
.nav-wrapper {
  height: 65px;
  line-height: 50px;
  width: 100%;
  background: url("../../assets/image/title.png") no-repeat;
  background-size: 100% 100%;
  text-align: center;
  position: relative;
  color: #b3efff;

  .bar-title {
    font-size: 2.1rem;
    font-family: YouSheBiaoTiHei;
    letter-spacing: 0.3rem;
	color: #ffffff;
    // cursor: pointer;
  }

  .time {
    position: absolute;
    left: 2%;
    top: 40%;
    transform: translateY(-35%);
    font-family: YouSheBiaoTiHei;
    font-size: 1.22rem;
    color: #d1e5ff;
  }
  .mapChoose {
    position: absolute;
    left: 10px;
    bottom: -5px;
    color: #eee;

    .title {
      padding: 4px;
      border-top: 1px solid rgba(147, 235, 248, 0.8);
      border-bottom: 1px solid rgba(147, 235, 248, 0.8);
      cursor: pointer;
      font-size: 14px;
    }

    .icon {
      font-family: "simsun";
      font-size: 25px;
      margin: 0 11px;
    }
  }
}
</style>
