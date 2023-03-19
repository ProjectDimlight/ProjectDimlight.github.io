<template>
  <div>
    <div style="text-align: center; padding-top: 20px;">
      <div style="height: 100px; color: rgb(16, 16, 16); font-size: 10px;">
        说起来你可能不信，第一个神秘代码就在这里：<br/>
        Y. Feng<br/>
        请注意'.'之后有一个空格。更多的神秘代码等待更新……<br/>
      </div>

      <div class="words" style="padding: 100px;">
        背景是黑色的。<br/>
        这样的设计并不是为了护眼，<br/>
        而是为了提醒你：<br/>
        这里本来什么都不应该有。<br/>
      </div>

      <sticker category="消息" icon="/static/冯依曼.jpg" class="sticker">
        冯依曼
        <template v-slot:description>
          你好，我是冯依曼，是你的数学课助教。坏消息是，你成绩很差。好消息是，你挂科了，所以这门不算绩点。
        </template>
      </sticker>
    </div>
  </div>
</template>

<script>
import Sticker from '@/components/Sticker'

export default {
  name: 'Index',
  components: {
    'sticker': Sticker
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.box{
  display: inline-block;
}

</style>
