<script>
  import { pop } from "svelte-spa-router";
  import { fade } from "svelte/transition";
</script>

<div transition:fade class="container">
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="title-container">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div on:click={() => pop()} class="block" />
    <p class="title">生长环境</p>
  </div>
  <div class="main-content">
    <p class="content">
      玉露偏爱温暖、湿润和阴凉的环境。最适宜的生长温度为15-25摄氏度，相对湿度保持在50-75%之间。选择通风良好的位置，避免暴露在强烈的阳光下，同时保持空气湿润。
    </p>
    <p class="content">
      玉露喜欢富含有机质的酸性土壤。在盆栽中，可以选择与泥炭、腐叶土和珍珠岩等混合的多孔性土壤。确保土壤排水良好，避免积水。
    </p>
  </div>
</div>

<style>
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
</style>
