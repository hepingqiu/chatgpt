<template>
    <div class="main" id="main">
        <keep-alive>
            <chat-gpt v-if=" tab == '聊天'"/>
        </keep-alive>
    </div>
</template>

<script>
import ChatGpt from './TabContent/ChatGpt.vue';

export default {
  components: { ChatGpt },
    name: 'MainContent',
    props: ['tab'],
    mounted(){
        console.log(window.innerHeight-80)
        document.getElementById('main').style.height = (window.innerHeight-80) + 'px';
    }
}
</script>

<style scoped>
.main{
    flex: 1;
}
</style>