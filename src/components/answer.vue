<template>
  <div class="answer">
     <img id="background" :src="require('@/assets/background.jpg')">
      <div class="answer_top">
        <div class="photo">
          <img id="image" :src="imgurl" width="80px" height="80px" >
         </div>
           <div class="answer_title">
           {{ name }}老师回复：
        </div>
      </div>
      <div class="answer_content">
        <div class="content"><br><br>&nbsp;&nbsp;&nbsp;&nbsp;{{ msg }}</div>
      </div>
      <div>
        <img v-show="!islike" @click="dianzan()" id="dislike" src="../assets/dislike.png" width="50px" height="50px">
        <img v-show="islike" @click="dianzan()" id="like" src="../assets/like.png" width="50px" height="50px">
      </div>
      <p id="dianzannum" @click="dianzan()">{{ cnt }}</p>
       <router-link to="question"><div class="ask">
        <img id="askimg" src="../assets/question.png" width="80px" height="80px">
        <p style="transform:translateY(-8px);"> 我要提问</p>
      </div></router-link>
    <router-link to="questionList" ><div class="question" v-show="isteacher">
      问题列表<img style="transform:translateY(5px);" src="../assets/questionlist.png" width="25px" height="25px">
    </div></router-link>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Answer",
  data() {
    return {
      msg: "",
      name: "",
      islike:false,
      num:'',
      cnt:'1',
      id:'',
      imgurl:'',
      identity:'',
      isteacher:false,
      student:''
    };
  },
  created(){
    this.getOneAnswer()
  },
  methods:{
    dianzan:function(){
      console.log(this.islike)
      if(this.islike==false)
      {
        this.islike=true
         console.log(this.id)
      var count=this.cnt
       count=count+1
        this.$axios.get('http://yb.upc.edu.cn:8086/count/?answer_id='+this.id+'&yb_id='+this.student+'&count='+count
).then(response=>{
        console.log(response)
        this.$axios.get('http://yb.upc.edu.cn:8086/answer/').then(response=>{
          console.log(response.data)
          this.cnt=response.data.count
        })
      })
      }
    
    },
    getOneAnswer:function(){
      this.$axios({
        // methods:'get',
        url:'http://yb.upc.edu.cn:8086/answer/',
        headers:{
          'Content-Type':'application/json'
        },
        dataType:'json',
        
      }).then(response=>{
        this.msg = response.data.answer
        this.name = response.data.teacher_name
        this.cnt = response.data.count
        this.imgurl = response.data.head_img
        this.identity=window.localStorage.getItem('identity')
        this.student=window.localStorage.getItem('yb_id')
        this.islike=window.localStorage.getItem('islike')
        if(this.identity=="老师")
        {
          this.isteacher=true
        }
        this.id = response.data.id

         axios.post('http://yb.upc.edu.cn:8086/count/',{
        'answer_id': this.id,
        'yb_id': this.student
      }).then(response=>{
        console.log(response.data)
        if(response.data=="unlike")
        {
          this.islike=false
        }else{
          this.islike=true
        }
      })
      }).catch(error => {
        console.log(error)
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
a{
  text-decoration: none;
  color: black;
}
.question{
  color: black;
  position: absolute;
  margin-left:65%;
  background-color: white;
  border-radius: 25px;
  padding-bottom:1%;
  padding-left:2%;
  padding-right:2%;

}
#dianzannum{
  position: absolute;
  margin-top:107%;
  margin-left: 84%;
  color: black;
  z-index: 999;
}
#like{
  margin-top:102%;
  margin-left: 78%;
  position: absolute;
  z-index: 888;
}
#dislike{
  margin-top:102%;
  margin-left: 78%;
  position: absolute;
  z-index: 888;
  opacity: 0.5;
}
#askimg{
   transform: translateY(15px)
}
.ask{
  position: absolute;
  width: 140px;
  height: 140px;
  margin-top:450px;
  background-color: white;
  border-radius: 70px;
  z-index: 999;
  margin-left: 29%;
  text-align: center;
  transform: translateY(-50px);
  color: black;

}
.answer_content{
  background-color:whitesmoke;
  opacity: 0.5;
  color:black;
  position: absolute;
  z-index: 1;
  margin-top:50px;
  padding-left: 5%;
  padding-right: 5%;
  height: 400px;
  padding-top: 5%;
  width: 90%;

}
.content{
 background-color:whitesmoke;
  color:black;
  position: absolute;
  z-index: 1;
  height: 300px;
  width: 90%;
  overflow-y: scroll;
  margin-top: 5%;
}
.answer_top{
  margin-left: 20px;
  padding-top:60px;
}
.answer_title {
  background-color: white;
  z-index: 0;
  position: absolute;
  margin-left: 70px;
  transform: translateY(-30px);
  border-radius: 25px;
  padding-left:5%;
  margin-top:65px;
  position: absolute;
  z-index: 100;
  padding-top:2%;
  padding-bottom:2%;
  padding-right: 2%;

  font-size: 15px
}
#background {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-size: 100% 100%;
}
.photo {
  width: 80px;
  height: 80px;
  border-radius: 40px;
  border-color: white;
  border-style: solid;
  background-color: white;
  position: absolute;
  z-index: 999;
  }
.answer {
  background-image: url(../assets/background.jpg);
  background-size: 100% 100%;
  top:0;
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
