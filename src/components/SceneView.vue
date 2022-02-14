<template>
  <div>
    <div class="jsonmenu">
    </div>
    <div>
      <VueJsonEditor :modeType="'view'" :modeList="['view']" v-model="content"/>
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
    }
  },
  mounted(){
    this.getScene();
  },
  methods: {
    async getScene()
    {
      var data = await this.$api.getScene();
      this.content = JSON.stringify(data);
    }
  }
}
</script>

<style scoped>
  .jsonmenu{
    margin: 0 0 10px 0;
  }
</style>