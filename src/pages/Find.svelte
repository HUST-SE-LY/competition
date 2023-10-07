<script lang="ts">
  import teaLeafImage from "/src/assets/teaLeaf.png";
  import teaBoxImage from "/src/assets/teaBox.png";
  import Dialog from "../components/Dialog.svelte";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import makeTea from '/src/assets/makeTea.jpg'
  import { push } from "svelte-spa-router";
  const dialog1 = [
    {
      role: "我",
      content: "爷爷这是想告诉我什么呢？不管了，先把茶叶放进茶盘里吧。",
    },
  ];

  const dialog2 = [
    {
      role: "我",
      content: "我明白了！",
    },
  ];

  const dialog3 = [
    {
      role: "我",
      content: "好像不对，再试试？",
    },
  ];
  const dialog4 = [
    {
      role: "我",
      content: "对了！茶盘上的四个箭头指向了茶叶组成的四个字，倒水入杯！",
    },
    {
      role: "我",
      content: "那下一步，应该就是泡茶了吧。",
    },
  ];
  const dialog5 = [
    {
      role: '',
      content: '随着杯中的水位逐渐上升，杯壁上显现了四个数字——1520'
    },
    {
      role: '我',
      content: '这就是答案吗？先去告诉老杨孙女一声吧。'
    }
  ]
  let teaLeaf: HTMLImageElement;
  let showTip1 = false;
  let showDialog2 = false;
  let showDialog3 = false;
  let showDialog4 = false;
  let showInput = false;
  let inputValue = "";
  let showMakeTea = false;
  let showDialog5 = false;
  const submitInput = () => {
    if (inputValue === "倒水入杯") {
      localStorage.setItem("findInput", "1");
      showDialog4 = true;
    } else {
      inputValue = "";
      showDialog3 = true;
    }
  };
  function moveTeaMouse(e: MouseEvent) {
    if (!localStorage.getItem("findDialog1") || localStorage.getItem("moveTea"))
      return;
    const startPos = e.clientY;
    document.addEventListener("mouseup", (e) => {
      const endPos = e.clientY;
      if (endPos - startPos > 200) {
        teaLeaf.style.transform = "translateY(320px)";
        localStorage.setItem("moveTea", "1");
        showTip1 = false;
        setTimeout(() => {
          showDialog2 = true;
        }, 1000);
      }
    });
  }
  function moveTeaTouch(e: TouchEvent) {
    if (!localStorage.getItem("findDialog1") || localStorage.getItem("moveTea"))
      return;
    const startPos = e.targetTouches[0].clientY;
    document.addEventListener("touchmove", (e) => {
      const endPos = e.targetTouches[0].clientY;
      if (endPos - startPos > 200) {
        teaLeaf.style.transform = "translateY(320px)";
        localStorage.setItem("moveTea", "1");
        showTip1 = false;
        setTimeout(() => {
          showDialog2 = true;
        }, 1000);
      }
    });
  }
  document.addEventListener("mousedown", moveTeaMouse);
  document.addEventListener("touchstart", moveTeaTouch);
  onMount(() => {
    if (localStorage.getItem("moveTea")) {
      teaLeaf.style.transform = "translateY(320px)";
    } else {
      showTip1 = true;
      return;
    }

    if (!localStorage.getItem("findDialog2")) {
      showDialog2 = true;
      return;
    }

    if (!localStorage.getItem("findInput")) {
      showInput = true;
      return;
    }

    if (!localStorage.getItem("findDialog4")) {
      showDialog4 = true;
      return;
    }

    if (!localStorage.getItem("makeTea")) {
      showMakeTea = true;
    }
  });
</script>

<div class="container">
  {#if showMakeTea}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <img src={makeTea} on:click={() => {showDialog5 = true}} class="makeTea" alt="">
    {#if showDialog5}
      <Dialog dialogs={dialog5} on:over={() => {localStorage.setItem('endDialog1','1');push('/map');}} />
    {/if}
  {:else}
    <img
      bind:this={teaLeaf}
      src={teaLeafImage}
      draggable="false"
      alt="teaLeaf"
      class="image tea-leaf"
    />
    <img
      src={teaBoxImage}
      draggable="false"
      alt="teaBox"
      class="image tea-box"
    />
    {#if showTip1}
      <p transition:fade class="tip1">下滑将茶叶放入茶盘</p>
    {/if}
    {#if !localStorage.getItem("findDialog1")}
      <Dialog
        dialogs={dialog1}
        on:over={() => {
          localStorage.setItem("findDialog1", "1");
          showTip1 = true;
        }}
      />
    {/if}
    {#if showDialog2}
      <Dialog
        dialogs={dialog2}
        on:over={() => {
          localStorage.setItem("findDialog2", "1");
          showInput = true;
        }}
      />
    {/if}
    {#if showInput}
      <div class="input-container">
        <p class="input-title">请输入你获得的信息</p>
        <input bind:value={inputValue} type="text" class="input" />
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="button" on:click={submitInput}>提交</div>
      </div>
    {/if}
    {#if showDialog3}
      <Dialog dialogs={dialog3} />
    {/if}
    {#if showDialog4}
      <Dialog
        dialogs={dialog4}
        on:over={() => {
          localStorage.setItem("findDialog4", "1");
          showMakeTea = true;
        }}
      />
    {/if}
  {/if}
</div>

<style>
  @keyframes shine {
    0% {
      opacity: 0.7;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.7;
    }
  }
  @font-face {
    font-family: "Smiley";
    src: url("/SmileySans-Oblique.ttf.woff2");
  }
  .container {
    width: 100%;
    align-items: center;
    position: relative;
    box-sizing: border-box;
    padding: 16px 32px;
    background-image: url("/prefaceBg.png");
    min-height: 100vh;
    font-family: "Smiley";
    letter-spacing: 1px;
    line-height: 1.5em;
  }

  .image {
    height: 250px;
    display: block;
    margin: 50px auto;
    transition: transform 1s ease-in;
  }

  .tea-leaf {
    scale: 0.9;
  }

  .tip1 {
    font-family: "Smiley";
    text-align: center;
    font-size: 24px;
  }

  .input-container {
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  .input-title {
    font-size: 24px;
  }

  .input {
    border: 3px solid rgba(166, 189, 21, 1);
    background: rgba(219, 245, 125, 0.78);
    padding: 8px 16px;
    border-radius: 16px;
    font-size: 24px;
    text-align: center;
    outline: none;
    font-family: 'Smiley';
  }

  .button {
    border: 2px solid rgba(166, 189, 21, 1);
    background: rgba(219, 245, 125, 0.78);
    padding: 4px 32px;
    border-radius: 100px;
    font-size: 20px;
    cursor: pointer;
  }

  .makeTea {
    width: 90%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    animation: shine 2s infinite ease-in-out;
  }

</style>
