
<template>
  <div class="hello">
       <!-- <button @click="isloadshow">+</button>
        <button @click="isloadhid">-</button> -->
    <div class="gamhb">
      <iframe ref="iframe" id="bdIframe" :src="bdTokenUrl" frameborder="0" scrolling="no" width="100%" height="200px" ></iframe>
    </div>
    <h2 class="uitit02">体育赛事 <span></span></h2>
    <vue-newlists></vue-newlists>
    <vue-newlists01></vue-newlists01>
    <vue-newlists05></vue-newlists05>
    <vue-banner></vue-banner>
    <h2 class="uitit02">娱乐新闻 <span></span></h2>
    <vue-newlists2></vue-newlists2>
  </div>
</template>
<script>
import axios from 'axios';
import banner from './../components/banner';
import newlists from './../components/new_h03';
import newlists01 from './../components/new_h04';
import newlists05 from './../components/new_h05';
import marquee from './../components/marquee';
import newlists2 from './../components/newlists2';
//import score from './../components/score';


export default {
  name: 'Index',
  data () {
    return {
      newList:[],
      count:0,
      bdTokenUrl: 'http://154.48.238.35:8083/hongbao/hongbao05.html',
      bdTokenUrl01: 'https://m.sohu.com/z/e_sport/home?spm=smwp.fb-cba-home.hsb.12.1541658956807vFhwNKh',
    }
  },
  computed: {
    num(){
      return this.$store.state.count;
    }
  },
  components: {
    'vue-banner':banner,
    'vue-newlists':newlists,
    'vue-newlists01':newlists01,
    'vue-marquee':marquee,
    'vue-newlists2':newlists2,
    'vue-newlists05':newlists05
  },
  mounted: function () {

  },
  methods: {
    isloadshow() {
      this.$store.commit('isload');
    },
    isloadhid() {
      this.$store.commit('isloadhid');
    }
  }
}
</script>
<style lang="scss" scoped>
@import "scss/base.scss";
.vrw {
    height: 100%!important;
    width: 100%;
}
.gamhb{
   background:#fff;
   overflow: hidden;
   z-index:10;
   position: relative;
}

.newlists03{
   overflow: hidden;
   z-index:10;
   position: relative;
}
.newlists{
  // overflow: hidden;
   z-index:10;
   position: relative;
}
.uitit01{
    display: block;
    line-height: 0.36rem!important;
    padding-left:0.15rem;
    font-size: 0.14rem;
    text-align: left;
    z-index:11;
    position: relative;
}
.uitit01 span{
    float:right;
}
.uitit02{
    display: block;
    line-height: 0.36rem!important;
    padding-left:0.15rem;
    font-size: 0.14rem;
    text-align: left;
    border-bottom:1px solid #d1d1d1;
    background:#fff;
    color: #333333;
    z-index:11;
    position: relative;
}
.uitit02 span{
    float:right;
    padding-right:0.15rem;
}
.iftop06{
    margin-top:-90px;
}
</style>
