import Dep from './Dep.js'
import util from './util.js';

class Watcher{

    constructor(vm,exp,cb){  //exp RegExp.$1
        Dep.target=this;
       // vm.$data[exp]   //get加入到依赖搜集器里去
       util.getValue(vm,exp)
        this.cb=cb;
        Dep.target=null;
    }
    update(v){
        this.cb(v)
    }
}

export default Watcher