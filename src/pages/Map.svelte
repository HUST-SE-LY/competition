<script lang="ts">
  import Dialog from "../components/Dialog.svelte";
  import type { SingleDairyPage, SingleDialog } from "../types";
  import diary from "../assets/diary.png";
  import { fade, fly } from "svelte/transition";
  import DairyContent from "../components/DairyContent.svelte";
  import { push } from "svelte-spa-router";
  import { onMount } from "svelte";
  let isShowDairy = false;
  let isShowDairyContent = false;
  const dairyContents: SingleDairyPage[] = [
    {
      title: "1983年5月2日 星期日 多云",
      paragraph: [
        "最近好几天文化馆都没什么大事，不过值得一提的是，上面派了几个年轻人下来说是要给恩施的非遗文化建一个网站，来问问我有什么资料可以提供",
        "这实在太令人高兴了，我立马叫小王喊了几个同志一起在档案室整理资料，这些珍贵的东西终于有机会能让更多的人看见。整理的时候发现有关恩施玉露的资料很不完整，我立马联系了第十代玉露茶非遗传承人杨胜伟，老杨接到电话时还在茶厂里忙活，他也显得格外高兴，一口答应了我的请求，约我过两天去工厂参观。",
      ],
    },
    {
      title: "1983年5月8日 星期六 小雨",
      paragraph: [
        "在茶厂参观了一天，现场观看了工人们制作玉露的工艺，还采访了老杨有关玉露的问题，今天的经历可以填补资料上空缺的很多部分，拥有巨大的价值。",
        "恩施玉露的制作与普通绿茶类似，都需要经历摊青、蒸青、揉捻、干燥等步骤，但玉露做工较之更为精巧。高级玉露，采用一芽一叶、大小均匀、节短叶密、芽长叶小、色泽浓绿的鲜叶为原料。加工",
      ],
    },
    {
      title: "2010年2月13日      星期六      晴",
      paragraph: [
        "前阵子又去茶厂拜访的时候，老杨跟我聊起恩施玉露参加比赛的事情，今天收到他发来的信息，说恩施玉露在比赛中赢得诸多评委的青睐，最后获得了比日本玉露更高的评分，赢得了比赛的胜利。老杨之前介绍过，日本玉露的技艺就是发源自恩施玉露，恩施玉露的技术被传播至日本后由日本工匠根据当地地理特征进行学习和改造，最后产生了日本玉露这一技艺；恩施玉露有回甘强烈、喉韵好的特征，而精品的日本玉露虽无回甘但入口清甜，有海藻味。这次比赛的结果，是对恩施玉露传承人们兢兢业业勤勤恳恳地学习与研究玉露工艺的最好鼓舞，也让世界嗅到了这一缕长存千年的茶香。",
      ],
    },
    {
      title: "19年5月20日      星期五       多云",
      paragraph: [
        "从茶厂回来的时候，老杨说他要再手绘一本制茶图册送给我，今天快递员把这本图册送来了我家。",
        "我反复翻看着图册，老杨用色彩丰富的笔触生动地刻画了恩施玉露的制作过程，一个当时在茶厂参观时就产生了的想法此时此刻更加清晰而确定：将手绘的恩施玉露制作图册批量印刷，作为科普读物放在文化馆，并将电子版上传到恩施非遗文化的网站上。",
        "我给老杨去了个电话，跟他说了我的想法，电话那头的老杨，声音显得有些激动，“哎呀现在科技发达啦，能用这种，啊，新时代的技术把恩施玉露的制作给记录下来，传承下去，特别好啊特别好...”，接着，老杨谈到了文革时期恩施玉露我给老杨去了个电话，跟他说了我的想法，电话那头的老杨，声音显得有些激动，“哎呀现在科技发达啦，能用这种，啊，新时代的技术把恩施玉露的制作给记录下来，传承下去，特别好啊特别好...”，接着，老杨谈到了文革时期恩施玉露",
      ],
    },
  ];
  const showDairy = () => {
    isShowDairy = true;
  };
  const showDairyContent = () => {
    isShowDairy = false;
    isShowDairyContent = true;
  };
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
  const closeDairy = () => {
    isShowDairy = true;
    isShowDairyContent = false;
  }
  onMount(() => {
    if(localStorage.getItem('hasReadMapPrefaceDialog')) {
      isShowDairy = true
    }
  })
</script>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div transition:fade class="container">
  <Dialog on:over={showDairy} {dialogs} />
  <img src="/mapBg.png" class="map-background" alt="地图" />
  {#if isShowDairy}
    <div transition:fade on:click={() => push('/teaGarden')} class="button button1">菜园</div>
    <div transition:fade on:click={() => push('/teaFactory')} class="button button2">制茶厂</div>
    <div transition:fade class="button button3">培训基地</div>
    <div transition:fly={{ y: 50, duration: 500 }} class="footer">
      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
      <img
        on:click={showDairyContent}
        class="diary"
        src={diary}
        alt="爷爷的日记本"
      />
      <p>实地考察完毕后前往体验探寻爷爷的最后的心愿》》》</p>
    </div>
  {/if}
  {#if isShowDairyContent}
    <DairyContent on:close={closeDairy} {dairyContents} />
  {/if}
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

  @font-face {
    font-family: "Smiley";
    src: url("/SmileySans-Oblique.ttf.woff2");
  }

  @font-face {
    font-family: 'HongLei';
    src: url('/HongLei.ttf')
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
    width: 1em;
    text-align: center;
    padding: 0.2rem 0.3rem;
    border: 3px solid rgba(131, 135, 11, 1);
    background: radial-gradient(
      70% 59.76%,
      rgba(194, 232, 111, 0.73) 49.63%,
      rgba(135, 204, 230, 0.56) 100%,
      rgba(143, 208, 213, 0.56) 100%
    );
    animation: float 10s infinite linear;
    z-index: 10;
    font-size: 20px;
    font-family: 'HongLei';
    color: rgba(85, 87, 26, 1);
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
    font-family: 'Smiley';
    letter-spacing: 1px;
  }

  .diary {
    height: 100%;
  }
</style>
