<template>
  <div class="homepage">
    <div>
       <div class="photo">
          <img src="../assets/timg.jpeg" width="80px" height="80px" >
       </div>
       <div class="nameshuo">
         {{ name }}
       </div>
    </div>
      <div class="ask">
        <img id="askimg" src="../assets/question.png" width="80px" height="80px">
       <p style="transform:translateY(-8px);"> 我要提问</p>
      </div>
      
  </div>
</template>

<script>
export default {
  name: "Answer",
  data() {
    return {
      islike:false,
      name:"王青老师",
      info:[]
    };
  },
  // created(){
  //   this.getOneAnswer()
  // },
  methods:{
    getinfo:function(){
      this.axios({
        url:"http://yb.upc.edu.cn:8086/info/"
      }).then(response=>{
        console.log(response.data)
      })
    },
    dianzan:function(){
      this.islike=!this.islike
    },
    // getOneAnswer:function(){
    //   this.$axios({
    //     type:'get',
    //     url:'http://13.78.44.2:8000/answer/'
    //   }).then(response=>{
    //     console.log(response.data)
    //   })
    // }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nameshuo{
  background-color:white;
  opacity: 0.7;
  width: 80px;
  border-radius: 25px;
  position: absolute;
  z-index: 999;
  color: black;
  margin-top:70px;
  text-align: center;
  font-size: 12px;
  font-weight: 700;
  padding:1%;

}
.ask{
  position: absolute;
  width: 140px;
  height: 140px;
  margin-top:280px;
  background-color: white;
  border-radius: 70px;
  z-index: 999;
  margin-left: 29%;
  text-align: center;
  transform: translateY(-50px)

}
img {
  border-radius: 50px;
}
#askimg{
   transform: translateY(15px)
}
.photo {
  width: 80px;
  height: 80px;
  border-radius: 40px;
  border-color: white;
  border-style: solid;
  background-color: white;
  position: absolute;
  z-index: 888;
  }
.homepage {
  background-image: url(../assets/background.jpg);
  background-size: cover;
  top:0;
  height: 720px;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
