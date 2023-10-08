<script lang="ts">
  import { pop } from "svelte-spa-router";
  import { fade } from "svelte/transition";
  import Dialog from "../components/Dialog.svelte";
  import type { SingleDialog } from "../types";
  import home from '/src/assets/home.svg'
  const trainCenterDialog:SingleDialog[] = [{
    role: '老杨孙女',
    content: "学习制茶可不是一件容易的事呢！揉捻这一步里面的门道可多了。手的温度、揉茶的手法、对茶叶状态的判断...这些都是需要经验沉淀的！这也导致了手艺传承难的问题...",
    imageUrl: '/role.png'
  }]
</script>

<div transition:fade class="container">
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="title-container">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div on:click={() => pop()} class="block" >
      <img src={home} class="image" alt="home" />
    </div>
    <p class="title">培训基地</p>
  </div>
  <div class="main-content">
    <p class="content">
      基地里有许多穿着相同马甲的学徒，一组学徒有一个老师傅带着。
    </p>
    <p class="content">
      有人在室内上理论课，有人在制茶室演练如何揉茶。整个培训基地看起来忙碌却又井井有条。
  </div>
  <Dialog dialogs={trainCenterDialog} />
</div>

<style>
  @font-face {
    font-family: "Smiley";
    src: url("/SmileySans-Oblique.ttf.woff2");
  }
  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    box-sizing: border-box;
    padding: 32px 48px;
    background-image: url("/prefaceBg.png");
    height: 100vh;
    position: relative;
    font-family: "Smiley";
    letter-spacing: 1px;
    line-height: 1.5em;
  }

  .title-container {
    display: flex;
    gap: 1rem;
    align-items: center;
    flex-shrink: 0;
  }

  .block {
    width: 24px;
    height: 24px;
    background: rgba(204, 204, 204, 1);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .main-content {
    height: 100%;
    overflow-y: scroll;
  }

  .content {
    text-indent: 2em;
    color: rgba(101, 115, 9, 1);
    margin-top: 1.5em;
  }

  .image {
    width: 20px;
  }
</style>