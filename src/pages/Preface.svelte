<script lang="ts">
  import { push } from 'svelte-spa-router';
  import diary from '../assets/diary.png'
  import { fade, fly } from 'svelte/transition';
</script>

<div class="container" out:fade>
  <p in:fly="{{y: -50, duration: 500}}">前情提要</p>
  <p in:fly="{{y: 50, duration: 500, delay: 300}}">某一天，你在老房子里突然发现一本日记本，是去世已久的爷爷留下的。</p>
  <p in:fly="{{y: 50, duration: 500, delay: 400}}">爷爷是前任的恩施州文化馆的老馆长，日记本里大多数都记载着他去寻访、保护恩施文化的过程。</p>
  <p in:fly="{{y: 50, duration: 500, delay: 500}}">翻着看着，你发现这日记本有些异样，与恩施玉露有关的几页被折起来了。而在最后一篇日记中，爷爷提到自己放在床下上锁的宝贝箱子......</p>
  <p in:fly="{{y: 50, duration: 500, delay: 600}}">你决定前往日记钟记载的地方，亲自去解开爷爷留下的神秘谜题。</p>
  <img in:fly="{{y: 50, duration: 500, delay: 1000}}" class="diary" src={diary} alt="diary" />
  <p in:fly="{{y: 50, duration: 500, delay: 1000}}">获得爷爷的日记本！</p>
  <p in:fly="{{y: 50, duration: 500, delay: 1000}}" class="no-gap">（点击可随时查看）</p>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div in:fly="{{y: 50, duration: 500, delay: 1500}}" on:click={() => push('/map')} role="button" tabindex="0"  class="foot-word">点击继续探索--></div>
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

  @keyframes shine {
    0% {
      opacity: 1;
      scale: 1.1;
    }
    50% {
      opacity: 0.2;
      scale: 1;
    }
    100% {
      opacity: 1;
      scale: 1.1;
    }
  }

  .container {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 16px;
    box-sizing: border-box;
    padding: 16px 32px;
    background-image: url('/prefaceBg.png');
    min-height: 100vh;
  }

  .foot-word {
    align-self: end;
    animation: shine 2s linear infinite;
  }

  .no-gap {
    margin-top: -16px;
  }

  .diary {
    animation: float infinite linear 5s;
  }
</style>