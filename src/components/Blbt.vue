<template>
  <div id="Blbt">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img src="../assets/specialField1.png">
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/specialField2.png">
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/specialField3.png">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
import 'vant/lib/index.css';
Vue.use(Swipe).use(SwipeItem);

export default {
  components: {
  }
};
</script>
<style scoped>
*{padding: 0;margin: 0;}
#Blbt{
    padding-top: 10px;
    width: 100%;
    height: 160px;
}
img{width: 100%;
height: 120px;
}
#L-banner{
    height: 40px;
    background: #ccc;
}
#L-banner img{
    height: 40px;
}
</style>


