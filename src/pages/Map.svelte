<script lang="ts">
  import Dialog from "../components/Dialog.svelte";
  import type { SingleDialog } from "../types";
  import diary from '../assets/diary.png'
  const dialogs: SingleDialog[] = [
    {
      role: "？？？",
      content:
        "看你的样子，唔...感觉跟我差不多大，你不会就是彭爷爷的孙子吧？！",
      imageUrl: "/role.png",
    },
    {
      role: "我",
      content: "你是？？？",
    },
    {
      role: "老杨孙女",
      content:
        "我是老杨孙女！就是..那个老杨，应该算是你爷爷的老朋友了。不过彭爷爷的脾气可比他好多了...",
      imageUrl: "/role.png",
    },
    {
      role: "老杨孙女",
      content: "你的情况我都了解了。在这里我罩着你，有什么问题尽管问！",
      imageUrl: "/role.png",
    },
  ];
</script>

<div class="container">
  <Dialog {dialogs} />
  <img src="/mapBg.png" class="map-background" alt="地图" />
  <div class="button button1">菜园</div>
  <div class="button button2">制茶厂</div>
  <div class="button button3">培训基地</div>
  <div class="footer">
    <img class="diary" src={diary} alt="爷爷的日记本" />
    <p>实地考察完毕后前往体验探寻爷爷的最后的心愿》》》</p>
  </div>
</div>

<style>
  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    25% {
      transform: translateY(5px);
    }
    75% {
      transform: translateY(-5px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  .container {
    width: 100%;
    position: relative;
    min-height: 100vh;
  }

  .map-background {
    min-width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
  }

  .button {
    position: absolute;
    border-radius: 99px;
    width: 45px;
    box-sizing: border-box;
    text-align: center;
    padding: 1rem 0.5rem;
    border: 3px solid rgba(131, 135, 11, 1);
    background: radial-gradient(
      70% 59.76%,
      rgba(194, 232, 111, 0.73) 49.63%,
      rgba(135, 204, 230, 0.56) 100%,
      rgba(143, 208, 213, 0.56) 100%
    );
    animation: float 10s infinite linear;
  }

  .button1 {
    right: 30%;
    top: 10%;
  }

  .button2 {
    top: 40%;
    left: 20%;
  }

  .button3 {
    right: 30%;
    bottom: 15%;
  }

  .footer {
    width: 100%;
    height: 120px;
    position: absolute;
    bottom: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.71);
    box-sizing: border-box;
    padding: 0.5rem 2rem;
    align-items: center;
    display: flex;
    gap: 2rem;
  }

  .diary {
    height: 100%;
  }


</style>
