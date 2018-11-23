<template>
  <div class="answer">
      <div class="answer_top">
        <div class="photo">
          <img :src="imgurl" width="80px" height="80px" >
         </div>
           <div class="answer_title">
           {{ name }}老师回复：
        </div>
      </div>
      <div class="answer_content">
        <br><br>&nbsp;&nbsp;&nbsp;&nbsp;{{ msg }}
      </div>
      <div>
        <img v-show="!islike" @click="dianzan()" id="dislike" src="../assets/dislike.png" width="50px" height="50px">
        <img v-show="islike" @click="dianzan()" id="like" src="../assets/like.png" width="50px" height="50px">
      </div>
      <p id="dianzannum">{{ cnt }}</p>
      <div class="ask">
        <img id="askimg" src="../assets/question.png" width="80px" height="80px">
       <p style="transform:translateY(-8px);"> 我要提问</p>
      </div>
     <div class="question" v-show="isteacher">
      问题列表<img style="transform:translateY(5px);" src="../assets/questionlist.png" width="25px" height="25px">
    </div>
  </div>
</template>

<script>
export default {
  name: "Answer",
  data() {
    return {
      msg: "  张玲玲介绍学校基础建设、一流学科师资队伍、人才培养、科研实速回张玲玲张玲玲介绍学校基础建设、一流学科师资队伍、人才培养、科研实速回张玲玲介绍学校基础建设、一流学科师资队伍、人才培养、科研实速回张玲玲介绍学校基础建设、一流学科师资队伍、人才培养、科研实速回。",
      name: "王青",
      islike:false,
      num:'',
      cnt:'',
      id:'',
      imgurl:'',
      identity:'',
      isteacher:false
    };
  },
  created(){
    this.getOneAnswer()
  },
  methods:{
    dianzan:function(){
      this.islike=!this.islike
      console.log(this.id)
      console.log(parseInt(this.cnt))
      var count=this.cnt
      if(this.islike)
      {
       count=count+1
      }else{
        count=count-1
      }

      this.$axios.get('http://yb.upc.edu.cn:8086/count/?id='+this.id+'&count='+count).then(response=>{
        console.log(response)
        this.$axios.get('http://yb.upc.edu.cn:8086/answer/').then(response=>{
          console.log(response.data)
          this.cnt=response.data.count
        })
      })
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
        console.log(response.data)
        this.msg = response.data.answer
        this.name = response.data.teacher_name
        this.cnt = response.data.count
        this.imgurl = response.data.head_img
        this.identity=window.localStorage.getItem('identity')
        if(this.identity=="老师")
        {
          this.isteacher=true
        }
        this.id = response.data.id
      }).catch(error => {
        console.log(error)
      })
      this.$axios.get('http://yb.upc.edu.cn:8086/teacher_head_img/').then(response=>{
        console.log(response.data)
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.question{
  position: absolute;
  margin-left:35%;
  margin-top:140%;
  background-color: white;
  border-radius: 25px;
  padding-bottom:1%;
  padding-left:2%;
  padding-right:2%;

}
#dianzannum{
  margin-top:102%;
  position: absolute;
  margin-left: 78%;
  color: black;
}
#like{
  margin-top:400px;
  margin-left: 300px;
  position: absolute;
  z-index: 888;
}
#dislike{
  margin-top:400px;
  margin-left: 300px;
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
  transform: translateY(-50px)

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
img {
  border-radius: 50px;
}
.answer {
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
