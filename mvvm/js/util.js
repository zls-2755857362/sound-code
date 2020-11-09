export default {
    setValue(vm,exp,value){
        if(exp.includes(".")){
            let arr= exp.split(".");
        let data=vm.$data;
        for(let i=0;i<arr.length-1;i++){
            data=data[arr[i]]
        }
           data[arr[arr.length-1]]=value
          
        }
        else{
             vm[exp]=value
        } 
    },
    getValue(vm,exp){
        if(exp.includes(".")){
            let arr= exp.split(".");
            let data = vm.$data
            arr.forEach((item)=>{
                data=data[item]
            })
            
            return data;
        }
        else{
            return vm[exp]
        }
    }
}