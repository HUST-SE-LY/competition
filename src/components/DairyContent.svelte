<script lang="ts">
  import { fade, fly } from "svelte/transition";
  import type { SingleDairyPage } from "../types";
  import { createEventDispatcher } from "svelte";
  export let dairyContents: SingleDairyPage[];
  const dispatch = createEventDispatcher();
  let currentIndex = 0;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  on:click={() => {
    dispatch("close");
  }}
  transition:fade
  class="container"
>
  <div
    on:click={(e) => {
      e.stopPropagation();
    }}
    transition:fly={{ y: 20, duration: 1000 }}
    class="dairy-page"
  >
    <p>{dairyContents[currentIndex].title}</p>
    {#each dairyContents[currentIndex].paragraph as p}
      <p>{p}</p>
    {/each}
  </div>
  <div
    on:click={(e) => {
      e.stopPropagation();
    }}
    class="menu"
  >
    {#each dairyContents as singleDairy, index (index)}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div
        on:click={() => {
          currentIndex = index;
        }}
        class={`button ${index === currentIndex ? "selected" : ""}`}
      />
    {/each}
  </div>
</div>

<style>
  @font-face {
    font-family: 'ziyou';
    src: url('/demo.ttf');
  }
  
  .container {
    background: rgba(71, 71, 71, 0.4);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    font-family: 'ziyou';
    font-size: 20px;
  }

  .button {
    width: 12px;
    height: 12px;
    border-radius: 99px;
    background-color: white;
  }

  .selected {
    border: skyblue 1px solid;
  }

  .menu {
    display: flex;
    gap: 1rem;
    align-items: center;
    height: 20px;
    justify-content: center;
  }

  .dairy-page {
    width: 80%;
    height: 60%;
    overflow-y: auto;
    background-image: url("/dairyPage.png");
    background-size: cover;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
    box-sizing: border-box;
  }

  .dairy-page::-webkit-scrollbar {
    display: none;
  }
</style>
