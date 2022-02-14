<template>
  <div ref="view">
  </div>
</template>

<script>
import JSONEditor from 'jsoneditor';

export default {
  props: {
    name: String,
    modelValue: {
      type: [String, Number, Object, Array],
      default: () => {
        return {};
      }
    },
    modeType:{
      type:String,
      default:()=>{
        return 'code'
      }
    },
    modeList:{
      type:Array,
      default:()=>{
        return ['code', 'view', 'tree']
      }
    }
  },
  data() {
    return {
      jsonEditor: null,
      internalChange: false
    }
  },
  mounted() {
    this.init();
  },
  watch: {
    modelValue: {
      handler(json) {
        if (!this.internalChange) {
          this.setValue(json);
        }
      }
    }
  },
  methods: {
    init() {
      let self = this;
      this.jsonEditor = new JSONEditor(
          self.$refs.view, {
            mode: this.modeType,
            modes: this.modeList,
            indentation: 4,
            name: this.name,
            mainMenuBar: true,
            onModeChange() {
              // 去除作者信息
              //if (document.getElementsByClassName('jsoneditor-poweredBy').item(0)) {
              //  document.getElementsByClassName('jsoneditor-poweredBy').item(0).remove();
              //}
            },
            onChange() {
              self.internalChange = true;
              self.$emit('update:modelValue', self.jsonEditor.getText());
              // 防止双向绑定重复刷新数据
              self.$nextTick(function () {
                self.internalChange = false;
              });
            }
          }, self.modelValue);
      // 去除作者信息
      //document.getElementsByClassName('jsoneditor-poweredBy').item(0).remove();
    },
    setValue(jsondata) {
      if (this.jsonEditor) {
        if(typeof jsondata === "string")
        {
          this.jsonEditor.set(jsondata ? JSON.parse(jsondata) : '');
        }else{
          this.jsonEditor.set(jsondata|{});
        }
      }
    }
  }
};
</script>

<style>
@import 'jsoneditor/dist/jsoneditor.min.css';
</style>