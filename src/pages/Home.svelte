<script>
  import homeBg1 from "../assets/homeBg1.png";
  import homeTitle1 from "../assets/homeTitle1.png";
  import homeTitle2 from "../assets/homeTitle2.png";
  import homeBg2 from "../assets/homeBg2.png";
  import homeBg3 from "../assets/homeBg3.png";
  import homeBg4 from "../assets/homeBg4.png";
  import Button from "../components/Button.svelte";
  import { fly } from "svelte/transition";
  import { push } from "svelte-spa-router";
</script>

<div class="container">
  <img src={homeBg1} class="bg1" alt="" />
  <img
    class="home-title1"
    src={homeTitle2}
    transition:fly={{ y: -30, duration: 500 }}
    alt="峡谷"
  />
  <img
    class="home-title2"
    src={homeTitle1}
    transition:fly={{ y: 30, duration: 500 }}
    alt="玉露记"
  />
  <img class="homeBg2" src={homeBg2} alt="" />
  <img class="homeBg3" src={homeBg3} alt="" />
  <img class="homeBg4" src={homeBg4} alt="" />
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    on:click={() => push("/preface")}
    role="button"
    tabindex="0"
    class="button"
    transition:fly={{ y: 50, duration: 500 }}
  >
    <Button content="点击游玩" />
  </div>

  <p class="foot-word">*恩施玉露——恩施非物质文化遗产</p>
</div>

<style>
  .home-title1 {
    position: absolute;
    top: 20%;
    left: 20%;
    z-index: 10;
  }

  .button {
    position: absolute;
    bottom: 150px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 20;
  }

  .home-title2 {
    position: absolute;
    right: 20%;
    top: 30%;
    z-index: 10;
  }

  .bg1 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    max-width: 500px;
  }

  .foot-word {
    position: absolute;
    bottom: 20px;
    left: 10px;
  }

  .container {
    width: 100vw;
    max-width: 500px;
    height: 100vh;
    background-image: url("/homeBg.png");
    position: relative;
    user-select: none;
  }

  .homeBg3 {
    position: absolute;
    bottom: 20%;
    left: -30px;
  }

  .homeBg2 {
    position: absolute;
    bottom: -70px;
    left: -10%;
    z-index: 5;
    width: 600px;
  }

  .homeBg4 {
    position: absolute;
    bottom: 185px;
    left: -20px;
    width: 600px;
  }
  @media screen and (max-height: 750px) {
    .homeBg2 {
      position: absolute;
      bottom: -120px;
      left: -10%;
      z-index: 5;
      width: 600px;
    }

    .homeBg4 {
      position: absolute;
      bottom: 135px;
      left: -20px;
      width: 600px;
    }

    .button {
      bottom: 100px;
    }

    .home-title1 {
      top: 15%;
    }

    .home-title2 {
      top: 20%;
    }
  }
</style>
