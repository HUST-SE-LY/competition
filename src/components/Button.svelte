<script lang="ts">
  export let content: string;
</script>

<div class="button">{content}</div>

<style>
  @font-face {
    font-family: "Smiley";
    src: url("/SmileySans-Oblique.ttf.woff2");
  }
  .button {
    width: 188px;
    height: 45px;
    opacity: 1;
    border-radius: 30px 10px 30px 10px;
    background: radial-gradient(
      100% 100%,
      rgba(187, 209, 40, 1) 20.96%,
      rgba(11, 92, 85, 1) 99.07%,
      rgba(11, 92, 85, 1) 101%
    );
    border: 3px solid rgba(77, 105, 13, 1);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    text-align: center;
    line-height: 45px;
    font-family: 'Smiley';
    font-size: 24px;
  }
</style>
