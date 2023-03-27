
<template>
    <div class="footer">
        <div v-for="(item ,index) in list" 
        :key="item.text" 
        :class="{'tab' : true , 'tab-active': currentIndex == index}" 
        @click="changeColor(item,index)">
            <i :class="item.iconName"></i>
            <span>{{ item.text }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FooterTab',
    data(){
        return {
            list:[
                {
                    text: '聊天',
                    iconName: 'el-icon-chat-line-square'
                },
                {
                    text: '应用',
                    iconName: 'el-icon-s-opportunity'
                },
                {
                    text: '内容',
                    iconName: 'el-icon-edit-outline'
                },
                {
                    text: '我的',
                    iconName: 'el-icon-s-check'
                },
            ],
            currentIndex: 0 ,
        }
    },
    methods: {
        changeColor(item,index){
            this.currentIndex = index ;
            this.$emit('getTab',item)
        }
    }
}
</script>

<style scoped>
.footer{
    display: flex;
    justify-content: space-around;
    height: 50px;
    padding-top: 8px;
    border-top: 1px solid rgba(148, 142, 141, 0.486)
}

.tab{
    display: flex;
    flex-direction: column;
}

.tab-active{
    color: #409EFF;
}
</style>