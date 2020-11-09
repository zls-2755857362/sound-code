class Dep{
  constructor(){
      this.subs=[]
  }
  add(sub){
      this.subs.push(sub)
  }
  notity(v){
      console.log(v,this.subs)
      this.subs.forEach((sub)=>{
       
          sub.update(v)
      })
  }

}

export default Dep;