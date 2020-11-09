import Vue from './vue.js'

let vm = new Vue({
    el:"#box",
    data:{
        a:1,
        b:2,
        c:3,
        user:{
            username:"aaa"
        }
    }
})

window.vm=vm;