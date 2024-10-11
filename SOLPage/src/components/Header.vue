<template>
  <div class="block">
    <router-link to="/">
      <div class="box" style="width: 100px;">
        S<span>ol</span> O<span>n</span> L<span>ine</span>
      </div>
    </router-link>
    <router-link to="/todo">
      <div class="box">
        日程
      </div>
    </router-link>
    <router-link to="/academic">
      <div class="box">
        学术
      </div>
    </router-link>
    <a href="https://music.163.com/#/artist?id=32070871" target="网易云音乐人SOL">
      <div class="box">
        音乐
      </div>
    </a>
    <router-link to="/treeverse">
      <div class="box">
        树
      </div>
    </router-link>
    <router-link to="/memo">
      <div class="box">
        随笔
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

span {
  font-size: 9px;
  color: cyan;
}

.block {
  background-color: rgba(255, 255, 255, 0.25);
  display: flex;
  font-size: 16px;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
}

.label{
  font-size: 5px;
  color: cyan;
}

.box {
  transition: 1s;
  padding: 15px 10px;
  width: 50px;
  margin: 0px;
  text-align: center;

  overflow-x: hidden;
}

.box:hover {
  color: black;
  background-color: rgba(255, 255, 255, 0.7);
}

</style>
