
import axios from "axios";

export default  {
  async getLogs(params)
  {
    var res = await axios.get("/log",{params:params});
    if(res.status == 200)
    {
      return res.data;
    }
    return {}
  },
  async getConfigs()
  {
    var res = await axios.get("/config");
    if(res.status == 200)
    {
      return res.data;
    }
    return {}
  },
  async getConfig(params)
  {
    var res = await axios.get("/config",{params:params});
    if(res.status == 200)
    {
      return res.data;
    }
    return {}
  },
  async saveConfig(key,config){
    var data = {[key]:config}
    var res = await axios.post("/config",data);
    if(res.status == 200)
    {
      return res.data
    }
    return {}
  },
  async getScene(){
    var res = await axios.get("/scene");
    if(res.status == 200)
    {
      return res.data;
    }
    return {}
  }
}