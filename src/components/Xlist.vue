<template>
  <div id="Xlist">
    <div id="aHead">
      <div id="goBack" @click="goBackHome">《~~ goBack</div>
    </div>
    <ul id="aBrand">
      <li class="theImg" v-for="(img,idx) in imgs" :key="idx">
        <div class="imgBox" @click="imgShow">
          <img :src="img">
        </div>
      </li>
    </ul>
    <Xinform v-if="this.$store.state.informShow" :imgSrc="imgSrc"/>
  </div>
</template>

<script>
import Xinform from "./Xinform.vue";

export default {
  components: {
    Xinform
  },
  data() {
    return {
      imgs: this.$store.state.imgList[this.$store.state.listIdx],
      imgSrc: ""
    };
  },
  methods: {
    imgShow(e) {
      this.imgSrc = e.target.src;
      this.$store.commit("editInformShow");
    },
    goBackHome() {
      window.history.back();
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}
::-webkit-scrollbar {
  width: 0;
  height: 0;
}
#Xlist {
  background: #58bc58;
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
}
#aHead {
  flex: 10%;
  width: 100%;
  position: relative;
}
#goBack {
  height: 50px;
  width: 100%;
  background: #ffffff2d;
  position: absolute;
  top: 50%;
  margin-top: -25px;
  color: #ffffff;
  padding: 5px 15px;
  font-size: 20px;
  line-height: 50px;
}
#aBrand {
  flex: 90%;
  width: 100%;
}
</style>
