<template>
  <div id="Bhead">
    <div id="route1" class="goshine" @click="goto0">看图</div>
    <div id="route2" class="goshine" @click="goto1">收藏</div>
    <div id="route3" class="goshine" @click="goto2">历史</div>
  </div>
</template>
<script>
export default {
  props: ["fnum"],
  mounted() {
    document.getElementsByClassName("goshine")[this.fnum].style.color="#5ea058";
  },
  methods: {
    goto0() {
      this.$router.push({ name: "app" });
    },
    goto1() {
      this.$router.push({ name: "collection" });
    },
    goto2() {
      this.$router.push({ name: "history" });
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}
#Bhead {
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  background: #5ace50;
  border-bottom: 2px dashed #686868;
}
#route1 {
  flex: 1;
  height: 35px;
  line-height: 40px;
  text-align: center;
  font-size: 18px;
}
#route2 {
  flex: 1;
  height: 35px;
  line-height: 40px;
  text-align: center;
  font-size: 18px;
}
#route3 {
  flex: 1;
  height: 35px;
  line-height: 40px;
  text-align: center;
  font-size: 18px;
}
</style>
