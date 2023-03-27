<template>
    <div class="main">
        <chat-gpt v-if=" tab == '聊天'"/>
    </div>
</template>

<script>
import ChatGpt from './TabContent/ChatGpt.vue';

export default {
  components: { ChatGpt },
    name: 'MainContent',
    props: ['tab']
}
</script>

<style scoped>
.main{
    flex: 1;
}
</style>