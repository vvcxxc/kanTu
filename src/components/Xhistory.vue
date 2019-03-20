<template>
  <div id="Xhistory">
    <div id="aHead">
      <div id="aHeadbottom">
        <Head fnum="2"/>
      </div>
    </div>
    <ul id="aBrand">
      <li class="theImg" v-for="(img,idx) in imgs" :key="idx">
          <div class="imgBox" @click="imgShow">
        <img :src="img">
        </div>
      </li>
    </ul>
    <div id="aFoot">
      <div id="advert">
        <Lbt/>
      </div>
    </div>
    <Xinform v-if="this.$store.state.informShow" :imgSrc="imgSrc"/>
  </div>
</template>

<script>
import Head from "../components/Bhead.vue";
import Lbt from "../components/Blbt.vue";
import Xinform from "../components/Xinform.vue";
export default {
  components: {
    Head,
    Lbt,
    Xinform
  },
  data() {
    return {
      imgs: this.$store.state.historyImg
    };
  },
  methods: {
    imgShow(e) {
      this.imgSrc = e.target.src;
      this.$store.commit("editInformShow");
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
#Xhistory {
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
  overflow: scroll;
}
::-webkit-scrollbar {
  width: 0;
  height: 0;
}
#aBrand .theImg {
  float: left;
  width: 50%;
  height: 250px;
  padding: 20px; 
  position: relative;
  /* border: 1px dashed #ccc; */
}
#aBrand .theImg .imgBox{
 height: 80%;
 width: 94%;
 position: absolute;
 left: 3%;
 top:10%;
 border-radius: 10px;
 overflow: hidden;
}
#aBrand .theImg .imgBox img{
 height: 100%;
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
