

<template>
  <el-container>
    <el-header>
      <el-menu
        :default-active="activeIndex"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">日志</el-menu-item>
        <el-menu-item index="2">配置</el-menu-item>
        <el-menu-item index="3">场景</el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <LogView v-if="activeKey=='1'"/>
      <ConfigView v-else-if="activeKey=='2'"/>
      <SceneView v-else-if="activeKey=='3'"/>
    </el-main>
  </el-container>
</template>
<script>
import LogView from './components/LogView.vue'
import ConfigView from './components/ConfigView.vue'
import SceneView from './components/SceneView.vue'

export default {
  data(){
    return {
      activeIndex:'1',
      activeKey:'1',
    }
  },

  components:{
    LogView,
    ConfigView,
    SceneView
  },

  methods:{
    handleSelect(key,keyPath){
      this.activeKey = key;
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.el-header {
  position: relative;
}

.el-main 
{
  padding: 20px;
  position: relative;
}
</style>
