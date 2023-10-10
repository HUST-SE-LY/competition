<script lang="ts">
  import { fade, fly } from "svelte/transition";
  import type { SingleDialog } from "../types";
  import { createEventDispatcher, onMount } from "svelte";
  export let dialogs: SingleDialog[];
  const dispatch = createEventDispatcher();
  let currentIndex = 0;
  let freshDialog = true;
  let isLoading = false;
  let isOver = true;
  const nextDialog = (e: Event) => {
    e.stopPropagation();
    if (isLoading) return;
    if (dialogs[currentIndex].select) return;
    isLoading = true;
    if (currentIndex + 1 >= dialogs.length) {
      dispatch("over");
      isOver = true;
      return;
    }
    currentIndex += 1;
    freshDialog = false;
    setTimeout(() => {
      isLoading = false;
      freshDialog = true;
    }, 200);
  };
  const switchPage = (to: number) => {
    if (isLoading) return;
    isLoading = true;
    currentIndex = to;
    freshDialog = false;
    setTimeout(() => {
      isLoading = false;
      freshDialog = true;
    }, 200);
  };
  onMount(() => {
    isOver = false;
  });
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div>
  {#if !isOver}
    <div out:fade={{ duration: 300 }} on:click={nextDialog} class="container">
      {#if dialogs[currentIndex].select}
        <div class="select-box">
          {#each dialogs[currentIndex].select as item, i}
            <div
              class="select"
              on:click={(e) => {
                e.stopPropagation();
                switchPage(item.to);
              }}
            >
              {item.content}
            </div>
          {/each}
        </div>
      {/if}
      <div in:fly={{ y: 100, duration: 500 }} class="dialog-main">
        <p>{dialogs[currentIndex].role}</p>
        <div class="dialog-content">
          {#if freshDialog}
            <p transition:fly={{ y: 8, duration: 200 }}>
              {dialogs[currentIndex].content}
            </p>
          {/if}
        </div>
      </div>
      {#if dialogs[currentIndex].imageUrl}
        <img
          in:fly={{ x: 50, duration: 1000 }}
          class="role-image"
          src={dialogs[currentIndex].imageUrl}
          alt="role"
        />
      {/if}
    </div>
  {/if}
</div>

<style>
  @font-face {
    font-family: "Smiley";
    src: url("/SmileySans-Oblique.ttf.woff2");
  }

  .container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(225, 232, 226, 0.67);
    z-index: 10;
    font-family: "Smiley";
  }

  .select-box {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
  }

  .dialog-main {
    position: absolute;
    bottom: 20px;
    width: 90%;
    left: 5%;
    z-index: 10;
  }

  .dialog-content {
    border-radius: 15px;
    background: rgba(219, 245, 125, 0.78);
    width: 100%;
    box-sizing: border-box;
    min-height: 7rem;
    padding: 10px 16px;
    border: 3px solid rgba(166, 189, 21, 1);
  }

  .role-image {
    width: 300px;
    position: absolute;
    bottom: -70px;
    right: -20px;
    pointer-events: none;
  }

  .select {
    background: rgba(219, 245, 125, 0.78);
    border: 3px solid rgba(166, 189, 21, 1);
    padding: 8px 32px;
    text-align: center;
    border-radius: 12px;
    margin-bottom: 20px;
  }
</style>
