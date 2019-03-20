<template>
  <div id="Xinform">
    <div id="aHead">
      <div id="goBack0" @click="imgShow">《~~ 返回</div>
      <div id="goCollect" @click="goCollectImg">收藏</div>
    </div>
    <div id="aBrand">
      <img :src="Img0">
    </div>
    <div id="aFoot">
      <div id="advert">
        <Lbt/>
      </div>
    </div>
  </div>
</template>

<script>
import Lbt from "../components/Blbt.vue";
export default {
  props: ["imgSrc"],
  components: {
    Lbt
  },
  mounted() {},
  data() {
    return {
      Img0: this.imgSrc
    };
  },

  methods: {
    imgShow() {
      this.$store.commit("editInformShow");
    },
    goCollectImg(e) {
      e.target.style.color="yellow";
      this.$store.commit("editCollectImg", this.imgSrc);
    }
  },
  beforeDestroy() {
    this.$store.commit("editHistoryImg", this.imgSrc);
    // console.log("历史:",this.$store.state.historyImg);
    // console.log("收藏:",this.$store.state.collectImg);
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
#Xinform {
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
#goBack0 {
  height: 50px;
  width: 50%;
  position: absolute;
  top: 50%;
  margin-top: -25px;
  left: 0;
  color: #ffffff;
  padding: 5px 15px;
  font-size: 20px;
  line-height: 50px;
  text-align: left;
}
#goCollect {
  height: 50px;
  width: 50%;
  position: absolute;
  top: 50%;
  margin-top: -25px;
  right: 0;
  color: #ffffff;
  padding: 5px 15px;
  font-size: 20px;
  line-height: 50px;
  text-align: right;
}
#aBrand {
  flex: 70%;
  width: 100%;
  padding: 5px;
  overflow: scroll;
}
#aBrand img {
  width: 100%;
}
#aFoot {
  flex: 20%;
  width: 100%;
}
#advert {
  height: 150px;
  width: 100%;
  margin-top: 15px;
}
</style>
