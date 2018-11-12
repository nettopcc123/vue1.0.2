<template>
<div id="feedback">
<h2 class="uitit_a">帐号注册</h2>
<div class="conttext">
    <div class="ly_box">
        <p class="footbk_p"><strong class="footfk">用户名：</strong></p>
        <p><input type="text" class="inputtext" name="msr1" id="msr1" value="" alt="" v-model="msr1"></p>
        <p class="footbk_p"><strong class="footfk">登入密码：</strong></p>
        <p><input type="password" class="inputtext" name="msr2" id="msr2" value="" alt="" v-model="msr2"></p>
        <p class="footbk_p"><strong class="footfk">邮箱地址：</strong></p>
        <p><input type="email" class="inputtext" name="msr3" id="msr3" value="" alt="" v-model="msr3"></p>
        <p class="footbk_p"><strong class="footfk">联系电话：</strong></p>
        <p><input type="number" class="inputtext" name="msr4" id="msr4" value="" alt="" v-model="msr4"></p>
        <p class="footbk_p"><strong class="footfk">您的邮箱或者微博：</strong></p>
        <p><input type="text" class="inputtext" name="msr5" id="msr5" value="" alt="" v-model="msr5"></p>
           <input type="hidden" name="needcheck[]" value="msr3 您的邮箱或者微博：">
    </div>
    </div>
  <button class="fbut" @click="isloadshow()">提交</button>
 </div>
 </template>
<script>
import Vue from 'vue';
import 'vue2-toast/lib/toast.css';
import Toast from 'vue2-toast';
Vue.use(Toast);
export default {
  data(){
    return{
      Surplus:140,
      introduct:'',
      msr1:'',
      msr2:'',
      msr3:'',
      msr4:'',
      msr5:''
    }
  },
  methods:{
    descArea(){
      let textVal = this.introduct.length;
      this.Surplus = 140 - textVal;
    },
    createIdeDB(dbName,version){//根据数据库名称和数据库版本号来打开或者新建一个数据库
        var version = version || 1;
        var request = window.indexedDB.open(dbName,version);
        request.onerror = function(e) { //新建或打开数据失败的回调函数
            console.log(e);
        };
    
        request.onsuccess = function(e) { //新建或打开数据库成功的回调
            mydb.db = e.target.result; // 把result赋值给对象属性
        };
    
        //初始化object store  也可以//删除object store
        request.onupgradeneeded = function(e){
            var db = e.target.result;
            if(!db.objectStoreNames.contains('Employees')) { //是否包含员工这个对象
                //db.createObjectStore('Employees',{keyPath:'id'}); // keyPath 指定对象的哪个属性作为主键
                //db.createObjectStore('Employees',{autoIncrement:true}); //keyGenerate   主键自增长 ，任意值，
                var store = db.createObjectStore('Employees',{keyPath:'id'}); // 同时返回一个store
                store.createIndex('nameIndex','name',{unique:true}); //创建name的索引
                store.createIndex('ageIndex','age',{unique:true});//创建age的索引
            }

            console.log("db version change to" + version);
        };
    },
    isloadshow() {
      this.$store.commit('isloadshow');
      setTimeout(() => {
        this.isloadhid();
        localStorage.setItem('u',this.msr1);
        localStorage.setItem('p',this.msr2);
        if (!window.indexedDB) {
            console.log("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.")
        }else{
            //this.createIdeDB('nihao',3);

          //  var request,database;
          //   request = indexedDB.open("regest"); //打开数据库
          //   request.onerror = function (e) {
          //     console.log('数据库打开报错' + e.target.errorCode);
          //   }
          //   request.onsuccess = function(e){
          //       database = e.target.result;
          //       console.log('创建或打开数据库成功' +JSON.stringify(e)) ;

          //                 //建表
          //       var data=[{ 
          //               id:1007, 
          //               name:"Byron", 
          //               age:24 
          //           },{ 
          //               id:1008, 
          //               name:"Frank", 
          //               age:30 
          //           },{ 
          //               id:1009, 
          //               name:"Aaron", 
          //               age:26 
          //           }];
          //       var store = database.createObjectStore("students",{keyPath:"id"});
          //       // var store = database.createObjectStore("students",{autoIncrement:true});

          //       for(var i = 0 ; i < data.length;i++){
          //           request = store.add(data[i]);
          //           request.onerror = function(){
          //             console.error('数据库中已有该数据')
          //           };
          //           request.onsuccess = function(){
          //             console.log('数据已存入数据库')
          //           };
          //       }


          //   }


          // let indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
          // let request,database;
          // request = indexedDB.open('test');
          // request.onerror = function(e){
          //     console.log(e.target.errorCode);
          // };
          // request.onsuccess = function(e){
          //     database = e.target.result;
          //     console.log('创建或打开数据库成功') ;
          // }



            // request.onsuccess = function (e) {
            //    database = e.target.result;
            //    console.log('创建或打开数据库成功');
            //    //存储数据
            //    var data=[{ 
            //       id:1007, 
            //       name:"Byron", 
            //       age:24 
            //   },{ 
            //       id:1008, 
            //       name:"Frank", 
            //       age:30 
            //   },{ 
            //       id:1009, 
            //       name:"Aaron", 
            //       age:26 
            //   }];
            //   //建表
            //   var store = database.createObjectStore('menber',{autoIncrement:true});
            //   for(var i = 0 ; i < data.length; i++) {
            //     require = store.add(data[i]);
            //     request.onerror = function () {
            //       console.error('数据库中已有该数据');
            //     };
            //     require.onsuccess = function() {
            //       console.log('数据已存入数据库') 
            //     };
            //   }
            // };


        }
        this.$router.push({path:'/login'});
      },2000);
    },
    isloadhid() {
      this.$store.commit('isloadhid');
      this.$toast.center('提交成功');
    }
  }
}
</script>

<style lang="scss">
@import "scss/base.scss";
#feedback{
  text-align: center;
}
.ftext{
  display: inline-block;
  width: 95%;
  height: 1.32rem;
  line-height: 1.5;
  padding: 0.04rem 0.07rem;
  font-size: 0.12rem;
  border: 0.01rem solid #dcdee2;
  border-radius: 0.04rem;
  color: #515a6e;
  background-color: #fff;
  background-image: none;
  position: relative;
  cursor: text;
  transition: border .2s ease-in-out,background .2s ease-in-out,box-shadow .2s ease-in-out;
  margin: 0rem auto;
}
.fbut{
  width: 94%;
  margin-top:0.15rem;
}
.num-desc{
  display: block;
  text-align: left;
  width: 94%;
  margin:0 auto 0.1rem;
  color:#8f8f8f
}
.uitit_a{
    display: block;
    line-height: 0.36rem!important;
    padding-left:0.15rem;
    font-size: 0.18rem;
    text-align: center;
    background:#f1efef !important;
    border-bottom: 1px solid #fff;
    color:#404040;
    font-weight: normal;
}
.bt{
    display: block;
    clear: both;
    overflow: hidden;
}
.conttext{
    padding:0.1rem 0.15rem 10px;
}
.conttext p{
    display: block;
    clear: both;
    overflow: hidden;
    text-align: left;
}
.bt strong {
    float: left;
    color: #333;
    font-weight: normal;
    font-size: 16px;
    text-align: center;
    color:#4d4e50;
    border-bottom:1px solid #dadada;
    display: block;
    margin-bottom:5px;
    width: 100%;
    text-align: left;
    display: block;
    padding-bottom:0.05rem;
}
.ly_box strong {
    font-weight: normal;
    font-size: 0.14rem;
}
.inputtext {
    border: 1px solid #d0d0d0;
    background: #fff;
    height: 28px;
    line-height: 28px;
    color: #606060;
    font-size: 12px;
    font-family: '微软雅黑';
    width: 98%!important;
}
.footfk{
    float: left;
    color: #333;
    font-weight: normal;
    font-size: 0.12rem;
    text-align: center;
    color: #4d4e50;
    display: block;
    margin-bottom: 5px;
    text-align: left;
}
.footbk_p{
  display: block;
  clear:both;
  overflow:hidden;
  margin-top:0.1rem;
}
</style>
