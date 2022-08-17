<template>
  <!-- <div>
    <canvas ref="canvas" id="canvas" width="400" height="400"></canvas>
  </div> -->
  <div class="inline">
    <div id="box">
      <p>hover box</p>
      <p>leave box</p>
      <p>mouse down for 1s in box</p>
      <p>mouse up box</p>
    </div>
  <canvas id="canvas" width="800" height="500"></canvas>
</div>
<div class="inline">
  <button id="idle" class="mx-4 bg-red-500 text-white p-2 rounded-md">click me</button>
  <button id="wipers" class="mx-4 bg-green-500 text-white p-2 rounded-md">click me 2</button>
  <div id="loop">Looped Animation: TBD</div>
</div>
</template>

<script setup>
// import { Rive } from '@rive-app/webgl';
import { onMounted } from '@vue/runtime-core';
import { Rive , Layout } from '@rive-app/webgl';
// import rive from "@rive-app/canvas";
// new rive.Rive({
//         src: "https://cdn.rive.app/animations/vehicles.riv",
//         // Or the path to a local Rive asset
//         // src: './example.riv',
//         canvas: document.getElementById("canvas"),
//         autoplay: true
//     });
// const canvas = ref();
  onMounted(()=> {
const idleButton = document.getElementById("idle");
const wipersButton = document.getElementById("wipers");
const box = document.getElementById("box");
// const loopDiv = document.getElementById("loop");
    // new Rive({
    //     canvas: canvas.value,
    //     src: 'http://localhost/mohito_/src/assets/new_file.riv',
    //     // src: 'https://cdn.rive.app/animations/vehicles.riv',
    //     autoplay: true,
    //     animations: 'idle',
    // })
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
            // Find the input you want to set a value for, or trigger
            const bumpTrigger = inputs.find(i => i.name === 'isPressed');
            const isLimited = inputs.find(i => i.name === 'isLimited');
            const States = inputs.find(i => i.name === 'States');
            idleButton.onclick = () => bumpTrigger.value === true ? bumpTrigger.value = false : bumpTrigger.value = true;
            wipersButton.onclick = () => isLimited.value === true ? isLimited.value = false : isLimited.value = true;
            box.onmouseenter= () => {States.value=1};
            box.onmouseleave= () => States.value=0;
            box.onmousedown= () => {States.value=2;bumpTrigger.value = false};
            box.onmouseup= () => States.value=3;
        },
        // Listen for play events to update button text
        // onPlay: (event) => {
        //     const names = event.data;
        //     names.forEach((name) => {
        //     if (name === "idle") {
        //         idleButton.innerHTML = "Stop Truck";
        //     } else if (name === "windshield_wipers") {
        //         wipersButton.innerHTML = "Stop Wipers";
        //     }
        //     });
        // },
        // // Listen for pause events to update button text
        // onPause: (event) => {
        //     const names = event.data;
        //     names.forEach((name) => {
        //     if (name === "idle") {
        //         idleButton.innerHTML = "Start Truck";
        //     } else if (name === "windshield_wipers") {
        //         wipersButton.innerHTML = "Start Wipers";
        //     }
        //     });
        // },
        // onLoop: (event) => {
        //     loopDiv.innerHTML = `Looped Animation: ${event.data.animation}`;
        // }
        });
        idleButton.onclick = () =>
        {truck.playingAnimationNames.includes("idle")
            ? truck.pause("idle")
            : truck.play("idle");}

        wipersButton.onclick = () =>
        truck.playingAnimationNames.includes("windshield_wipers")
            ? truck.pause("windshield_wipers")
            : truck.play("windshield_wipers");
    })

</script>
<style>
#box{
    position: fixed;
    top: 30px;
    left: 50px;
    width: 200px;
    height: 200px;
    border-radius: 15px;
    border: 2px solid #333;
    cursor: pointer;
    padding: 5px;
}
</style>