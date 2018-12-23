<template>
  <div class="answer">
     <img id="background" :src="require('@/assets/background.jpg')">
      <div class="answer_top">
        <div class="photo">
          <img id="image" :src="imgurl" width="80px" height="80px" >
         </div>
           <div class="answer_title">
           {{ answers[index].teacher_name }}老师回复：
        </div>
      </div>
      <div class="answer_content">
        <div class="content"><br><br>&nbsp;&nbsp;&nbsp;&nbsp;{{ answers[index].answer }}<br></div>
      </div>
    <div class="last"><p  @click="goLast()">上一条</p></div>
    <div class="next"><p  @click="goNext()">下一条</p></div>
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
    <router-link to ="secret"><div class="question" v-show="!isteacher">
      私密回复<img style="transform:translateY(5px);" src="../assets/questionlist.png" width="25px" height="25px">
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
      cnt:'',
      id:'',
      imgurl:'',
      identity:'',
      isteacher:false,
      student:'',
      answers:[],
      index:0
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
       this.cnt=count
        this.$axios.get('http://yb.upc.edu.cn:8086/count/?answer_id='+this.id+'&yb_id='+this.student+'&count='+count
).then(response=>{
        console.log(response)
      })
      }
    
    },
    goLast:function(){
       console.log(this.index)
      if(this.index==this.answers.length-1)
      {
        alert("嘤嘤嘤，没有更多了")
      }else{
        this.index = this.index+1;
      }
      this.getIfCount()
       this.imgurl = this.answers[this.index].head_img
        this.cnt = this.answers[this.index].count
    },
    goNext:function(){
      if(this.index==0)
      {
        alert("期待更多老师的回答吧")
      }else{
        this.index=this.index-1;
      }
      this.getIfCount()
       this.imgurl = this.answers[this.index].head_img
        this.cnt = this.answers[this.index].count
    },
    getOneAnswer:function(){
      this.$axios({
        // methods:'get',
        url:'http://yb.upc.edu.cn:8086/answer_teacher/',
        headers:{
          'Content-Type':'application/json'
        },
        dataType:'json',
        
      }).then(response=>{
        console.log(response.data)
        this.answers = response.data
        this.imgurl = this.answers[this.index].head_img
        this.cnt = this.answers[this.index].count
        this.identity=window.localStorage.getItem('identity')
        this.student=window.localStorage.getItem('yb_id')
        this.islike=window.localStorage.getItem('islike')
        if(this.identity=="老师")
        {
          this.isteacher=true
        }
      })
      this.getIfCount()
    },
    getIfCount()
    {
      this.id=this.answers[this.index].id
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
.last{
  position: absolute;
  margin-top: 115%;
  margin-left: 5%;
  color:black;
  font-weight: 800;
  z-index: 999;
  opacity: 0.7;
}
.next{
  position: absolute;
  margin-top: 115%;
  margin-left: 80%;
  color: black;
  opacity: 0.7;
  font-weight: 800;
  height: 20px;
  z-index: 999;
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
  margin-top:108%;
  margin-left: 84%;
  color: black;
  z-index: 999;
  height: 20px;
}
#like{
  margin-top:103%;
  margin-left: 78%;
  position: absolute;
  z-index: 888;
}
#dislike{
  margin-top:103%;
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
