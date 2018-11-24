<template>
  <div class="homepage">
    
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
      vq:''
    };
  },
  created(){
    this.getinfo()

  },
  methods:{
    getinfo:function(){
    window.location.href="https://oauth.yiban.cn/code/html?client_id=2d8519b349471215&redirect_uri=http://f.yiban.cn/iapp335984" 

    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
