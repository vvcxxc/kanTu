<template>
  <div id="app">
    <div id="aHead">
      <div id="aHeadbottom">
        <Head fnum="0"/>
      </div>
    </div>
    <ul id="aBrand">
      <li class="aBrandList" v-for="(item,idx) in navImg" :key="idx" @click="toList(idx)">
        <div class="aBrandFont">{{item.title}}</div>
        <div>
          <img :src="item.isrc">
        </div>
      </li>
    </ul>
    <div id="aFoot">
      <div id="advert">
        <Lbt/>
      </div>
    </div>
  </div>
</template>

<script>
import Head from "./components/Bhead.vue";
import Lbt from "./components/Blbt.vue";

export default {
  components: {
    Head,
    Lbt
  },data() {
    return {
      navImg:this.$store.state.imgs
    }
  },methods: {
    toList(idx){
      this.$store.commit("editListIdx", idx);

       this.$router.push({ name: "list" });
    }
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}
#app {
  background: #58bc58;
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
}
#aHead {
  flex: 20%;
  width: 100%;
  position: relative;
}
#aHeadbottom {
  height: 40px;
  width: 100%;
  position: absolute;
  bottom: 5px;
}
#aBrand {
  flex: 60%;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
#aBrand .aBrandList {
  flex: 33%;
  height: 33%;
  padding: 5px;
  position: relative;
}
.aBrandFont {
  position: absolute;
  width: 100px;
  height: 20px;
  top: 50%;
  left: 50%;
  margin-left: -50px;
  text-align: center;
  color: #ffffff;
  font-size: 20px;
  font-weight: bolder;
}
#aBrand .aBrandList img {
  height: 100%;
  width: 100%;
  border-radius: 10px;
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
