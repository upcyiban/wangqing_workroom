<template>
  <div class="homepage">
    <div class="question" v-show="isteacher">
      问题列表<img style="transform:translateY(5px);" src="../assets/questionlist.png" width="25px" height="25px"/>
    </div>
    <div>
       <div class="photo first">
          <img :src="teacher[2].head_img" width="80px" height="80px" >
       </div>
       <div class="nameshuo first">
         {{ teacher[2].teacher_name }}老师
       </div>
       <div class="photo second">
          <img :src="teacher[3].head_img" width="80px" height="80px" >
       </div>
       <div class="nameshuo second">
         {{ teacher[3].teacher_name }}老师
       </div>
        <div class="photo third">
          <img :src="teacher[4].head_img" width="80px" height="80px" >
       </div>
       <div class="nameshuo third">
         {{ teacher[4].teacher_name }}老师
       </div>
        <div class="photo fourth">
          <img :src="teacher[5].head_img" width="80px" height="80px" >
       </div>
       <div class="nameshuo fourth">
         {{ teacher[5].teacher_name }}老师
       </div>
        <div class="photo fiveth">
          <img :src="teacher[6].head_img" width="80px" height="80px" >
       </div>
       <div class="nameshuo fiveth">
         {{ teacher[6].teacher_name }}老师
       </div>
       <div class="photo sixth">
          <img :src="teacher[7].head_img" width="80px" height="80px" >
       </div>
       <div class="nameshuo sixth">
         {{ teacher[7].teacher_name }}老师
       </div>
        <div class="photo seventh">
          <img :src="teacher[8].head_img" width="80px" height="80px" >
       </div>
       <div class="nameshuo seventh">
         {{ teacher[8].teacher_name }}老师
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
      info:[],
      teacher:[],
      identity:'',
      isteacher:false
    };
  },
  created(){
    this.getinfo()
    this.getteacher()
    this.getOneAnswer()
  },
  methods:{
    getinfo:function(){
    let location=window.location.href
    let data=location.split(/[?=&]/)
    this.vq=data[2]
    console.log(this.vq)
    this.$axios({
      url:'http://yb.upc.edu.cn:8086/info/?vq='+this.vq
    }).then(response=>{
      console.log(response.data)
      window.localStorage.setItem('student_name',response.data.yb_username)
      window.localStorage.setItem('head_img',response.data.yb_userhead)
      window.localStorage.setItem('identity',response.data.yb_identity)
       this.identity=window.localStorage.getItem('identity')
        if(this.identity=="老师")
        {
          this.isteacher==true
        }
    })
    },
    dianzan:function(){
      this.islike=!this.islike
    },
    getteacher:function(){
      this.$axios({
        url:"http://yb.upc.edu.cn:8086/teacher_head_img/"
      }).then(response=>{
        this.teacher = response.data
      })
    },
    getOneAnswer:function(){
      this.$axios({
        url:'http://yb.upc.edu.cn:8086/answer/'
      }).then(response=>{
        console.log(response.data)
        if(response.data!=undefined)
        {
          this.$router.push('/answer')
        }
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.question{
  position: absolute;
  margin-left:70%;
  margin-top:5%;
  background-color: white;
  border-radius: 25px;
  padding-bottom:1%;
  padding-left:2%;
  padding-right:2%;

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
.first{
  margin-left: 12%;
  transform: translateY(110px);
}
.second{
  margin-left:65%;
  transform: translateY(80px);
}
.third{
  margin-left: 40%;
  transform: translateY(100px);
}
.fourth{
  margin-left:5%;
  transform: translateY(250px);
}
.fiveth{
  margin-left:70%;
 transform: translateY(240px);
}
.sixth{
  margin-left:25%;
  transform: translateY(400px);
}
.seventh{
  margin-left: 60%;
  transform: translateY(350px);
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
