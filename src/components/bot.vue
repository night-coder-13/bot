<template>
  <div class="inline ">
    <div class="bg-dark">

    </div>
    <div id="box">
       <div class="w-full relative order-1 lg:order-none">
            <form id="form" class="form p-2 lg:absolut mb-8 m-auto rounded-xl shadow-lg" action="">
                <p class="text-center text-2xl font-bold pt-10 pb-2">Login</p>
                <div class="grid my-4 mx-2">
                    <label for="">Name</label>
                    <input type="text" placeholder="Name" required id="Iemail" class=" w-11/12 rounded-lg px-3 py-2 mx-3 my-2 bg-gray-50 border border-gray-400">
                </div>
                <div class="grid my-4 mx-2">
                    <label for="">Password</label>
                    <input type="password" placeholder="Password" required id="Ipassword" class="w-11/12 rounded-lg px-3 py-2 mx-3 my-2 bg-gray-50 border border-gray-400">
                </div>
                <div>
                  <a href="" class="forgot-pass ml-2 text-red-700">I forgot my password</a>
                </div>
                <button id="btn" class="my-4 ml-10 flex items-center px-5 py-1 text-lg rounded-lg bg-blue-400 text-white">login </button>
            </form>
        </div>
    </div>
  <canvas id="canvas" :width="width < 450 ? width+320 : width" :height="height" class="-ml-32 sm:ml-0"></canvas>
</div>
</template>

<script setup>
// import { Rive } from '@rive-app/webgl';
import { onMounted, ref } from '@vue/runtime-core';
import { Rive , Layout } from '@rive-app/webgl';

  const width = ref(window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidt)
  const height = ref(window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight)
  onMounted(()=> {
// const box = document.getElementById("box");
// const forgotPass = document.getElementsByClassName("forgot-pass");
const Iemail = document.getElementById("Iemail");
const Ipassword = document.getElementById("Ipassword");
    const truck = new Rive({
        src: "http://localhost/mohito_/src/assets/2721-5591-newsletter-bot.riv",
        // artboard: "jeep",
        canvas: document.getElementById("canvas"),
        layout: new Layout({ fit: "fill" }),
        autoplay: true,
        stateMachines: 'State Machine 1',
        onLoad: () => {
            // Get the inputs via the name of the state machine
            const inputs = truck.stateMachineInputs('State Machine 1');
            const States = inputs.find(i => i.name === 'States');
            Iemail.onfocus = ()=>States.value=1;
            Iemail.addEventListener('focusout', ()=>{States.value=0} )
            Ipassword.onfocus = ()=>States.value=1;
            Ipassword.addEventListener('focusout', ()=>{States.value=0} )
            document.getElementById('btn').addEventListener('click',(event)=>{
              event.preventDefault()
              if(Ipassword.value !== '159753'){
                States.value = 3
              }else{
                States.value = 2
                document.getElementById('form').style.marginTop ='220px'
                document.getElementById('form').innerHTML = '<p class="text-green-600 text-2xl text-center">Success</p>'
              }
            })
        },
        });
    })

</script>
<style>
#box{
    position: fixed;
    top: 80px;
    left: 150px;
    width: 330px;
    height: 250px;
    border-radius: 15px;
    padding: 5px;
    z-index: 9999;
}
.bg-dark{
    position: fixed;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg,rgba(0, 0, 0, 0.109) , rgba(0, 0, 0, 0.200));
}
.form{
  backdrop-filter: blur(2px);
  color: #fff;
  border: 1px solid rgb(195, 195, 195);
}
.form input{
  color: rgb(97, 97, 97);
}
@media only screen and (max-width: 450px){
  #box{
    position: absolute;
    top: 30px;
    left: 15px;
    width: 90%;
    z-index: 9999;
}
}
</style>