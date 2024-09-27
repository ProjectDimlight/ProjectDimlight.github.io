<template>
  <div>
    <div style="text-align: center; padding-top: 20px;">
      <div style="height: 100px; color: rgb(16, 16, 16); font-size: 10px;">
        作为一个简单的例子，第一个神秘代码就在这里：<br/>
        Y. Feng<br/>
        请注意'.'之后有一个空格。更多的神秘代码等待更新……<br/>
      </div>

      <div class="words" style="padding: 100px;">
        背景是黑色的。<br/>
        这样的设计并不是为了护眼，<br/>
        而是为了提醒你：<br/>
        这里本来什么都不应该有。<br/>
      </div>

      <sticker category="消息" icon="/static/冯依曼.jpg" class="sticker" style="margin-bottom: 30px;">
        冯依曼
        <template slot="description">
          你好，我是冯依曼，是你的数学课助教。坏消息是，你成绩很差。好消息是，你挂科了，所以这门不算绩点。
        </template>
      </sticker>
      <br/>

      <sticker category="消息" icon="/static/潇寂.png" class="sticker" style="margin-bottom: 30px;">
        潇寂（Arial）
        <template slot="description">
          你好，我是《复位》系列的女主角Arial。我要告诉你的是，这个网站里有一些彩蛋神秘代码。有兴趣的话可以找找看？
        </template>
      </sticker>
      <br/>

      <a href="http://175.178.65.65:5000/">
      <sticker category="游戏" icon="/static/冯依曼打牌.jpg" class="sticker" style="margin-bottom: 30px;">
        升级大战
        <template slot="description">
          作业写完了吧？过来打牌！
        </template>
      </sticker>
      </a>
      <br/>

      <a href="https://wang-zhicheng.github.io//">
      <sticker category="消息" icon="/static/呜檬.jpg" class="sticker" style="margin-bottom: 30px;">
        檬老师
        <template slot="description">
          呜呜呜
        </template>
      </sticker>
      </a>
      <br/>

      <a href="https://jzl-66666a.github.io/">
      <sticker category="消息" icon="/static/66666a.ico" class="sticker" style="margin-bottom: 30px;">
        66666a
        <template slot="description">
          我是隔壁的6a，是个大佬。
        </template>
      </sticker>
      </a>
      <br/>
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
