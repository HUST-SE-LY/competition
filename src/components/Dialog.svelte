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
    isLoading = true;
    if (currentIndex + 1 >= dialogs.length) {
      dispatch('over')
      isOver = true;
      localStorage.setItem('hasReadMapPrefaceDialog', '1');
      return;
    }
    currentIndex += 1;
    freshDialog = false;
    setTimeout(() => {
      isLoading = false;
      freshDialog = true;
    }, 200);
  };
  onMount(() => {
    if(localStorage.getItem('hasReadMapPrefaceDialog')) return;
    isOver = false;
  })
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div>
  {#if !isOver}
  <div out:fade={{ duration: 300 }} on:click={nextDialog} class="container">
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
    <img
      in:fly={{ x: 50, duration: 1000 }}
      class="role-image"
      src={dialogs[currentIndex].imageUrl}
      alt="role"
    />
  </div>
  {/if}
</div>

<style>
  .container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(225, 232, 226, 0.67);
    z-index: 10;
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
  }
</style>
