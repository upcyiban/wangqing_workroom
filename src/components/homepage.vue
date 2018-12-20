<template>
  <div class="homepage">
     <img id="background" :src="require('@/assets/background.jpg')">
    <router-link to="questionList" ><div class="question" v-show="isteacher">
      问题列表<img style="transform:translateY(5px);" src="../assets/questionlist.png" width="25px" height="25px"/>
    </div></router-link>
    <div>
       <div class="photo first">
          <img id="image" :src="teacher[0].head_img" width="80px" height="80px" >
       </div>
       <div class="nameshuo first">
         {{ teacher[0].teacher_name }}老师
       </div>
       <div class="photo second">
          <img id="image" :src="teacher[1].head_img" width="80px" height="80px" >
       </div>
       <div class="nameshuo second">
         {{ teacher[1].teacher_name }}老师
       </div>
        <div class="photo third">
          <img id="image" :src="teacher[2].head_img" width="80px" height="80px" >
       </div>
       <div class="nameshuo third">
         {{ teacher[2].teacher_name }}老师
       </div>
        <div class="photo fourth">
          <img id="image" :src="teacher[3].head_img" width="80px" height="80px" >
       </div>
       <div class="nameshuo fourth">
         {{ teacher[3].teacher_name }}老师
       </div>
        <div class="photo fiveth">
          <img id="image" :src="teacher[4].head_img" width="80px" height="80px" >
       </div>
       <div class="nameshuo fiveth">
         {{ teacher[4].teacher_name }}老师
       </div>
       <div class="photo sixth">
          <img id="image" :src="teacher[5].head_img" width="80px" height="80px" >
       </div>
       <div class="nameshuo sixth">
         {{ teacher[5].teacher_name }}老师
       </div>
        <div class="photo seventh">
          <img id="image" :src="teacher[6].head_img" width="80px" height="80px" >
       </div>
       <div class="nameshuo seventh">
         {{ teacher[6].teacher_name }}老师
       </div>
        <div class="photo eightth">
          <img id="image" :src="teacher[7].head_img" width="80px" height="80px" >
       </div>
       <div class="nameshuo eightth">
         {{ teacher[7].teacher_name }}老师
       </div>
        <div class="photo nineth">
          <img id="image" :src="teacher[8].head_img" width="80px" height="80px" >
       </div>
       <div class="nameshuo nineth">
         {{ teacher[8].teacher_name }}老师
       </div>
       <div class="photo tenth">
          <img id="image" :src="teacher[9].head_img" width="80px" height="80px" >
       </div>
       <div class="nameshuo tenth">
         {{ teacher[9].teacher_name }}老师
       </div>
              <div class="photo eleventh">
          <img id="image" :src="teacher[10].head_img" width="80px" height="80px" >
       </div>
       <div class="nameshuo eleventh">
         {{ teacher[10].teacher_name }}老师
       </div>
    </div>
      <router-link to="question"><div class="ask">
        <img id="askimg" src="../assets/question.png" width="80px" height="80px">
       <p style="transform:translateY(-8px);"> 我要提问</p>
      </div></router-link>
    
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

  },
  methods:{
    getinfo:function(){
      if(window.sessionStorage.getItem('vq')=='undefined'||sessionStorage.getItem('vq')==null)
      {
         let location=window.location.href
          let data=location.split(/[?=&]/)
          this.vq= data[2]
          if(this.vq.length<350)
          {
            this.$router.push('/')
          }else{
             window.sessionStorage.setItem('vq',this.vq)
          }

          console.log(this.vq.length)
      }else{
        this.vq=sessionStorage.getItem('vq')
         if(this.vq.length<350)
          {
            this.$router.push('/')
          }
        console.log(this.vq.length)
      }
   
    this.$axios({
      url:'http://yb.upc.edu.cn:8086/info/?vq='+this.vq
    }).then(response=>{
      console.log(response.data)
      window.localStorage.setItem('head_img',response.data.yb_userhead)
      window.localStorage.setItem('identity',response.data.yb_identity)
      window.localStorage.setItem('yb_id',response.data.yb_userid)
   
       this.identity=window.localStorage.getItem('identity')
        if(this.identity=="老师")
        {
          this.isteacher=true
          window.localStorage.setItem('teacher_name',response.data.yb_realname)
        }else{
          window.localStorage.setItem('student_name',response.data.yb_username)
        }

    })
    if(window.localStorage.getItem('islike')==undefined)
       window.localStorage.setItem('islike',false)
    this.getOneAnswer()
    },
    dianzan:function(){
      this.islike=!this.islike
    },
    getteacher:function(){
      this.$axios({
        url:"http://yb.upc.edu.cn:8086/teacher_head_img/"
      }).then(response=>{
        this.teacher = response.data
        console.log(this.teacher)
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
#image{
  border-radius: 50px;
}
#background {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
    overflow: hidden;
    z-index: -1;
}
a{
  text-decoration: none;
  color: black;
}
.question{
  position: absolute;
  margin-left:68%;
  margin-top:3%;
  background-color: white;
  border-radius: 25px;
  padding-bottom:1%;
  padding-left:2%;
  padding-right:2%;
  color: black;

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
  transform: translateY(30px);
}
.second{
  margin-left:70%;
  transform: translateY(50px);
}
.third{
  margin-left: 40%;
  transform: translateY(80px);
}
.fourth{
  margin-left:5%;
  transform: translateY(150px);
}
.fiveth{
  margin-left:70%;
 transform: translateY(180px);
}
.sixth{
  margin-left:7%;
  transform: translateY(280px);
}
.seventh{
  margin-left: 72%;
  transform: translateY(300px);
}
.nineth{
  margin-left: 40%;
  transform: translateY(400px);
}
.eightth{
  margin-left: 70%;
  transform: translateY(430px);
}
.tenth{
  margin-left: 10%;
  transform: translateY(410px);
}
.eleventh{
  margin-left: 40%;
  transform: translateY(500px);
}
.ask{
  position: absolute;
  width: 140px;
  height: 140px;
  margin-top:280px;
  background-color: white;
  border-radius: 70px;
  z-index: 999;
  margin-left: 31%;
  text-align: center;
  transform: translateY(-50px);
  color: black;

}
#askimg{
   transform: translateY(15px)
}

.homepage {
  background-image: url("../assets/background.jpg");
  background-size: 100% 100%;
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
