<template>
    <div class="chatgpt-container">
        <div class="chatgpt-title">
            {{ title }}
        </div>
        <div class="chatgpt-content">
            <div v-for="(item,index) in answerList" :key="item.answer" class="queation-item">
                <div class="question">
                    <span>{{ item.question }}</span>
                </div>
                <div class="answer" :id="index+1 ? `answer-${index}` : ''" v-chat="item.answer">
                     
                </div>
            </div>
        </div>
        <div class="chatgpt-input">
            <el-input v-model="searchContent" placeholder="你想和我聊点什么?" class="self-input"></el-input>
            <i class="el-icon-position icon-style" @click="sendQuestion"></i>
        </div>
    </div>
</template>

<script>
import { info } from '@/data/info'

export default {
    name: 'ChatGpt',
    data(){
        return {
            searchContent: '',
            answerList: [],
            title: info.chatTitle
        }
    },
    methods:{
        sendQuestion(){
            if(this.searchContent){
                this.answerList.push({
                    question: this.searchContent,
                    answer: `Not supported ${this.searchContent}`
                })
                this.$nextTick(() =>{
                    document.getElementById(`answer-${this.answerList.length-1}`).scrollIntoView({
                        
                    })
                })
                this.searchContent = '' ;
            }
        }
    }
}
</script>

<style scoped>
.chatgpt-container{
    display: flex;
    flex-direction: column;
    height: 100%;
}

.chatgpt-title{
    height: 50px;
    line-height: 50px;
    width: 100%;
    position: sticky;
    background-color: #282c34;
    color: #fff;
}
.chatgpt-content{
    flex: 1;
    text-align: left;
    padding: 6px 16px;
    overflow: auto;
}

.queation-item{
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    font-size: 14px;
}

.queation-item .question {
    margin-bottom: 10px;
    border: 1px solid rgba(148, 142, 141, 0.486);
    padding: 6px 16px;
    border-radius: 10px;
    color: #fff;
    background-color: #1989fa;
    word-wrap:break-word;
    flex: auto;
    width: fit-content;
    margin-right: 0px;
    margin-left: auto;
}

.queation-item .answer {
    font-weight: 600;
    border: 1px solid rgba(148, 142, 141, 0.486);
    padding: 6px 16px;
    border-radius: 10px;
    word-wrap:break-word;
    flex: auto;
    width: fit-content;
}
.chatgpt-input{
    display: flex;
    align-items: center;
    border-top: 1px solid rgba(148, 142, 141, 0.486);
    height: 50px;
    padding: 6px 16px;
}

.self-input /deep/ .el-input__inner{
    border-radius: 20px !important;
}

.icon-style{
    margin-left: 10px;
    font-size: 24px;
}
</style>