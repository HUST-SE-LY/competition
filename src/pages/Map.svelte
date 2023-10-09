<script lang="ts">
  import Dialog from "../components/Dialog.svelte";
  import type { SingleDairyPage, SingleDialog } from "../types";
  import diary from "../assets/diary.png";
  import { fade, fly } from "svelte/transition";
  import DairyContent from "../components/DairyContent.svelte";
  import { push, replace } from "svelte-spa-router";
  import { onMount } from "svelte";
  import Button from "../components/Button.svelte";
  let isShowDairy = false;
  let isShowDairyContent = false;
  let showEndDialog1 = false;
  let highlightDairy = false;
  let showEndDialog2 = false;
  let showLetter = false;
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
  const freshGame = () => {
    localStorage.clear();
    replace('/');
  }
  const showDairy = () => {
    isShowDairy = true;
  };
  const showDairyContent = () => {
    if (highlightDairy) {
      showEndDialog2 = true;
    } else {
      isShowDairyContent = true;
    }
    isShowDairy = false;
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
  const endDialog: SingleDialog[] = [
    {
      role: "老杨孙女",
      content:
        "好神奇！这个水杯原来是特制的，倒水入杯...彭爷爷好聪明啊！那么这个谜底—五二零又是什么意思呢？",
      imageUrl: "/role.png",
      select: [
        {
          content: "谐音“我爱你”的意思",
          to: 1,
        },
        {
          content: "和密码有关",
          to: 3,
        },
      ],
    },
    {
      role: "我",
      content: "五二零...三个数字，“我爱你”？",
    },
    {
      role: "老杨孙女",
      content: "彭爷爷还真会开玩笑呢...要不再想想？",
      imageUrl: "/role.png",
      select: [
        {
          content: "和密码有关",
          to: 4,
        },
      ],
    },
    {
      role: "我",
      content: "会不会是密码？但也没有什么需要密码的地方啊...",
    },
    {
      role: "老杨孙女",
      content:
        "在着干想也没有头绪，要不试试到处找找有没有跟这三个数字有关的东西吧！（点击下页中可点击的地方寻找线索）",
      imageUrl: "/role.png",
    },
  ];
  const endDialog2: SingleDialog[] = [
    {
      role: "我",
      content: "是日记本！快过来看!!!",
    },
    {
      role: "我",
      content:
        "2019年5月20日 ，星期五，多云...肯定跟这篇日记有关，但是这篇日记有什么特别的呢？",
    },
    {
      role: "老杨孙女",
      content:
        "唔...“接着，老杨谈到了...是他写下的那一本《茶叶生产与初制》...保存下来才得以传承”",
      imageUrl: "/role.png",
    },
    {
      role: "老杨孙女",
      content:
        "！！！等等！这个里面提到的《茶叶生产与初制》，我好像在哪里见过！",
      imageUrl: "/role.png",
    },
    {
      role: "",
      content:
        "她带着你来到了老杨的办公室，在书柜的左上角陈列着这本古老的书。于是你们取下书，发现里面果然藏着东西—一封信。",
    },
  ];
  const closeDairy = () => {
    isShowDairy = true;
    isShowDairyContent = false;
  };
  onMount(() => {
    if (localStorage.getItem("hasReadMapPrefaceDialog")) {
      isShowDairy = true;
    }
    if(localStorage.getItem('endDialog2over')) {
      isShowDairy = false;
      showLetter = true;
      return;
    }
    if(localStorage.getItem('endDialog1over')) {
      isShowDairy = true;
      highlightDairy = true;
      return;
    }
    if (localStorage.getItem("endDialog1")) {
      showEndDialog1 = true;
      isShowDairy = false;
      return;
    }
  });
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div transition:fade class="container">
  {#if !localStorage.getItem("hasReadMapPrefaceDialog")}
    <Dialog
      on:over={() => {
        localStorage.setItem("hasReadMapPrefaceDialog", "1");
        showDairy();
      }}
      {dialogs}
    />
  {/if}

  <img src="/mapBg.png" class="map-background" alt="地图" />
  {#if isShowDairy}
    <div
      transition:fade
      on:click={() => push("/teaGarden")}
      class="button button1"
    >
      菜园
    </div>
    <div
      transition:fade
      on:click={() => push("/teaFactory")}
      class="button button2"
    >
      制茶厂
    </div>
    <div transition:fade  on:click={() => push("/trainCenter")} class="button button3">培训基地</div>
    <div transition:fly={{ y: 50, duration: 500 }} class="footer">
      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
      <img
        on:click={showDairyContent}
        class="diary"
        src={diary}
        alt="爷爷的日记本"
        style={highlightDairy ? "align-self: center;" : ""}
      />
      {#if !highlightDairy}
        <div on:click={() => push("/find")}>
          实地考察完毕后前往体验探寻爷爷的最后的心愿》》》
        </div>
      {/if}
    </div>
  {/if}
  {#if isShowDairyContent}
    <DairyContent on:close={closeDairy} {dairyContents} />
  {/if}
  {#if showEndDialog1}
    <Dialog
      dialogs={endDialog}
      on:over={() => {
        localStorage.setItem('endDialog1over', '1')
        isShowDairy = true;
        highlightDairy = true;
      }}
    />
  {/if}
  {#if showEndDialog2}
    <Dialog
      dialogs={endDialog2}
      on:over={() => {
        localStorage.setItem('endDialog2over', '1');
        showLetter = true;
      }}
    />
  {/if}
  {#if showLetter}
  <div transition:fade class="letter-container">
    <div transition:fly={{y:50, duration:1000}} class="letter">
      <p class="letter-title">我的孩子：</p>
      <p class="letter-content">找到这封信一定很不容易吧哈哈。相信你一定已经拜访过我的老朋友，参观了茶坊。</p>
      <p class="letter-content">如你所见，一片片绿叶上下沉浮，搅动着千年的文化。在手与叶的摩擦交锋，高温的烘烤定性后才诞生出这如松针般的茶叶。</p>
      <p class="letter-content">当年，我被它深深吸引却苦恼于人们只在意它的味道，对背后的工艺与文化不甚了解。完全商业化的产业是绝绝不可行的，文化将与商业化中泯灭，玉露将失去它那独特的文化魅力，变成冰冷的商品。</p>
      <p class="letter-content">我的孩子，我希望你能在亲身体验之后才找到这封信，理解我的良苦用心。文化传承与保护任重而道远，我这把老骨头已经没法继续走下去了。</p>
      <p class="letter-content">过去的文化属于你们，未来也将是你们的。</p>
      <div class="fresh-button" on:click={freshGame}>重新游玩</div>
    </div>
    
  </div>
    
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
    font-family: "HongLei";
    src: url("/HongLei.ttf");
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
    pointer-events: none;
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
    font-family: "HongLei";
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
    font-family: "Smiley";
    letter-spacing: 1px;
    justify-content: center;
  }

  .diary {
    height: 100%;
  }

  .letter {
    background-image: url("/prefaceBg.png");
    width: 80%;
    height: 60%;
    position: absolute;
    z-index: 100;
    left: 10%;
    top: 20%;
    padding: 2rem;
    box-sizing: border-box;
    overflow-y: auto;
  }

  .letter::-webkit-scrollbar {
    display: none;
  }

  .letter-container {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(225, 232, 226, 0.67);
  }

  .letter-title {
    font-size: 20px;
    margin-bottom: 16px;
  }

  .letter-content {
    margin-bottom: 16px;
  }

  .fresh-button {
    background: rgba(219, 245, 125, 0.78);
    border: 3px solid rgba(166, 189, 21, 1);
    padding: 8px 32px;
    text-align: center;
    border-radius: 12px;
    margin-bottom: 20px;
  }
</style>
