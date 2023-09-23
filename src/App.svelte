<script>
import Router from 'svelte-spa-router'
import { routes } from './router';
</script>

<div class="main-container">
  <Router {routes} />
</div>

<style>
.main-container {
  max-width: 500px;
  margin: 0 auto;
  padding: 0;
  width: 100vw;
  overflow: hidden;
}


</style>