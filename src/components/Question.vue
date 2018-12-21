<template>
    <div id="container">
        <img id="background" :src="require('@/assets/background.jpg')">
        <div id="question">
            <div id="top">
                <p>说出你的问题</p>
                <img :src="require('@/assets/laba.png')">
            </div>
            <div id="text">
                <textarea id="textarea" placeholder="输入你的问题" v-model="problem"></textarea>
            </div>
            <div id="button" @click="submit">
                <img :src="require('@/assets/gou.png')">
                <p>确认提问</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Question',
    data () {
        return {
            problem: '',
            name:''
        }
    },
    methods: {
        submit () {
            if(window.localStorage.student_name==null)
            {
                this.name=localStorage.teacher_name
            }else{
                this.name=localStorage.student_name
            }
            axios.post('http://yb.upc.edu.cn:8086/problem/', {
                'student_name': this.name,
                'problem': this.problem,
                'head_img': localStorage.head_img
            }).then(r => {
                alert("提交成功！")
                this.$router.push('/homepage')
                // this.$router.push()
            })
        }
    }
}
</script>

<style scoped>
#background {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}
#top {
    position: absolute;
    right: 2rem;
    margin-top: 12%;
    text-align: center;
    background: #ffffff;
    border-radius: 2rem;
    width: 10rem;
    height: 3rem;
}
#top>img {
    position: absolute;
    right: -1rem;
    top: -2rem;
    width: 64px;
    height: 64px;
}
#top>p {
    margin: 0;
    line-height: 3rem;
}
#text {
    display: inline-block;
    margin-top: 15%;
    height: 25%;
    width: 100%;
    background: rgba(255,255,255,0.5);
}
#textarea {
    font-size: 1.5rem;
    width: calc(100% - 2rem);
    height: 8em;
    margin: 2.5rem 1rem;
    border: none;
    padding: 0;
    background: rgba(0,0,0,0);
}
#question {
    position: relative;
}
#button {
    position: absolute;
    bottom: -3rem;
    right: 1rem;
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    background: #ffffff;
    text-align: center;
}
#button>img {
    width: 4rem;
    height: 4rem;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
}
#button>p {
    position: relative;
    top: 2.75rem;
}
</style>