<template>
  <div>
    <div style="height: 400px; width: 100vw; overflow-y: hidden;">
      <img style="width: 100%; vertical-align: middle; position: relative; top: calc(200px - 50vw * 847 / 1397);" src="/static/title.png" />
    </div>
    <div style="text-align: center; padding-top: 20px;">
      <div style="font-size: 30px; letter-spacing: 0.5em; padding-bottom: 5px; margin: 30px 250px; border-bottom: 1px solid grey;">
        我们的产品
      </div>

      <sticker category="AI" icon="" class="sticker">
        SOL模拟器
        <template v-slot:description>
          模拟SOL群内发言的文本生成模型，基于LSTM、Attention和GAN
        </template>
      </sticker>

      <sticker category="算法" icon="" class="sticker">
        ProjectAC::Zip
        <template v-slot:description>
          教学级压缩软件，基于Deflate和Huffman树，效果一般但代码简单
        </template>
      </sticker>

      <sticker category="游戏" icon="" class="sticker">
        WTA::复位传说
        <template v-slot:description>
          《世界树默示录》世界观下的第三款游戏作品，拥有极佳的剧本和BGM
        </template>
      </sticker>

      <sticker category="SOC" icon="" class="sticker">
        未名元UntitledUnit
        <template v-slot:description>
          为参加NSCSCC2020准备的MIPS32指令集、10阶段流水线CPU
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

.sticker{
  margin:15px;
  display: inline-block;
}

</style>
