<template>
    <div class="chatgpt-container">
        <div class="chatgpt-content">
            <div v-for="item in answerList" :key="item.answer" class="queation-item">
                <div class="question">
                    {{ item.question }}
                </div>
                <div class="answer">
                     {{ item.answer }}
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
export default {
    name: 'ChatGpt',
    data(){
        return {
            searchContent: '',
            answerList: [],
        }
    },
    methods:{
        sendQuestion(){
            if(this.searchContent){
                this.answerList.push({
                    question: this.searchContent,
                    answer: `Not supported ${this.searchContent}`
                })
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
.chatgpt-content{
    flex: 1;
    text-align: left;
    padding: 6px 16px;
}

.queation-item{
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
}

.queation-item .question {
    margin-bottom: 10px;
    border: 1px solid rgba(148, 142, 141, 0.486);
    padding: 6px 16px;
    border-radius: 10px;
    word-wrap:break-word;
    text-align: right;
    flex: auto;
}

.queation-item .answer {
    font-weight: 600;
    border: 1px solid rgba(148, 142, 141, 0.486);
    padding: 6px 16px;
    border-radius: 10px;
    word-wrap:break-word;
    flex: auto;
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