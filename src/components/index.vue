<template>
  <div id="data-view">
    <dv-full-screen-container>
      <dv-border-box11 title="未来网络" :color="['black','gray']" backgroundColor="black">
        <main-map/>
        <dv-border-box8 class = "right-bottom-conner">
          <little-map/>
        </dv-border-box8>
      </dv-border-box11>
    </dv-full-screen-container>
  </div>
</template>

<script>
import MainMap from "./MainMap";
import LittleMap from "./LittleMap";
export default {
  name: 'DataView',
  components: {LittleMap, MainMap},
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  #data-view {
    width: 100%;
    height: 100%;
    background-color: #030409;
    color: #fff;

    #dv-full-screen-container {
      background-image: url('./img/bg.jpg');
      box-shadow: 0 0 3px blue;
      display: flex;
      flex-direction: row;

      .right-bottom-conner{
        position: absolute;
        bottom: 5.9%;
        right: 3.1%;
        width: 312px;
        height: 455px;
      }
    }
  }
</style>
