<template>
  <div>
    <div class="jsonmenu">
      <el-autocomplete
        v-model="configKey"
        :fetch-suggestions="querySearch"
        placeholder="配置"
        @select="handleSelect"
      />

      <el-button @click="saveConfig">保存</el-button>
    </div>
    <div>
      <VueJsonEditor v-model="content"/>
    </div>
  </div>
</template>

<script>
import VueJsonEditor from './VueJsonEditor.vue'

export default {
  components:{
    VueJsonEditor
  },
  data(){
    return {
      content:'',
      configKey:'',
    }
  },
  mounted(){
    
  },
  methods: {
    async saveConfig(){
      var data = await this.$api.saveConfig(this.configKey,JSON.parse(this.content))
      console.log(data)
    },
    async querySearch(queryString,cb)
    {
      var data = await this.$api.getConfigs()
      var filter = data.filter(x=>{ return x.toLowerCase().indexOf(queryString.toLowerCase()) >=0 })
      var map = filter.map(x=>{ return {value:x} })
      cb(map);
    },
    async handleSelect(selected){
      var data = await this.$api.getConfig({ config:selected.value })
      this.content = JSON.stringify(data)
    }
  }
}
</script>

<style scoped>
  .jsonmenu{
    margin: 0 0 10px 0;
  }
</style>