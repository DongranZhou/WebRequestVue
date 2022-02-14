<template>
  <div>
    <div class="scroll" ref="logview" @mouseenter=" autoScroll=false " @mouseleave=" autoScroll=true ">
        <div class="item" v-for="(log,index) in logs" :key="index" @click=" selected=index "  :class="{ 'activeItem': index==selected, 'logItem': log.type=='Log','warningItem': log.type=='Warning','errorItem': log.type=='Error' }">
          {{ log.condition }}
        </div>
    </div>
    <pre class="info" v-if=" selected>-1 ">{{logs[selected].stackTrace}}</pre>
  </div>
</template>
<script>

export default {
    data() {
      return {
        logs: [],
        autoScroll:true,
        selected:-1,
      }
    },
    async created() {
      this.autoScroll = true,
      this.logs = await this.$api.getLogs();
      this.delayRefresh();
    },
    methods: {
      async delayRefresh(){
        await this.delay(0.1);
        if(this.autoScroll){
          this.$refs.logview.scrollTop = this.$refs.logview.scrollHeight;
        }
      },
      async delay(time) {
        return new Promise(resolve => { setTimeout(resolve , time*1000 ) })
      }
    }
  }
</script>
<style scoped>
.scroll
{
  overflow-x: hidden;
  overflow-y: scroll;
  width: 100%;
  height: 200px;
  background-color: gray;
  margin-bottom: 20px;
}
.item
{
  background-color: darkgray;
  margin: 2px 2px;
  padding: 10px 5px;
}
.logItem
{
  color: white;
}
.warningItem
{
  color: goldenrod;
}
.errorItem
{
  color: brown;
}
.activeItem
{
  background-color: lightgrey;
}
.info
{
  background-color: gray;
  min-height: 200px;
}
</style>