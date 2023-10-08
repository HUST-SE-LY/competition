<script lang="ts">
import Router from 'svelte-spa-router'
import { routes } from './router';
import audioOpen from '/src/assets/audioOpen.png'
let isOpenBgm = false;
let audio:HTMLAudioElement;
const switchBgm = () => {
  isOpenBgm = !isOpenBgm;
  console.log(isOpenBgm)
  if(isOpenBgm) {
    audio.play();
  } else {
    audio.pause();
  }
}
</script>

<div class="main-container">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div on:click={switchBgm} class="audio-container">
    {#if !isOpenBgm}
      <div class="block"></div>
    {/if}
    <img src={audioOpen} class="audio-image" alt="播放器" />
    <audio src="https://m701.music.126.net/20231008221305/17b1d1c5ebb424c94755fe3bd3f2d862/jdyyaac/0e0b/015c/545b/9a625b936466a7442180c117beac1df3.m4a" preload="metadata" loop bind:this={audio}></audio>
  </div>
  <Router {routes} />
</div>

<style>
.main-container {
  max-width: 500px;
  margin: 0 auto;
  padding: 0;
  width: 100vw;
  overflow: hidden;
  position: relative;
}

.audio-container {
  width: 24px;
  height: 24px;
  border-radius: 100px;
  background-color: white;
  position: absolute;
  right: 30px;
  top: 30px;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.block {
  position: absolute;
  top: 12px;
  left: 2px;
  transform: rotate(45deg);
  width: 80%;
  height: 2px;
  z-index: 9999;
  background-color: rgba(166, 166, 166, 1);
}

.audio-image {
  width: 16px;
  height: 16px;

}



</style>