<script lang="ts">
  import type { Snippet } from 'svelte';
  interface PopMenuPropsType {
    id: string;
    className?: string;
    ariaLabel?: string;
    trigger: Snippet;
    body: Snippet;
    
  }
  let props: PopMenuPropsType = $props();

  //let bodyDisplay: 'none' | 'flex' = 'none';

  const OnMouseEnter = () => {
    document.getElementById(`${props.id}-body`).style.display = "flex";
  }
  const OnMouseLeave = () => {
    document.getElementById(`${props.id}-body`).style.display = "none";
  }
  
</script>

<div
  id={props.id}
  aria-label={props["aria-label"]}
  role="tooltip"
  class={`pop-menu-container ${props.className}`}
  onmouseleave={OnMouseLeave}
>
  <div id={`${props.id}-trigger`} role="tooltip" class="pop-menu-trigger" onmouseenter={OnMouseEnter}>
    {@render props.trigger()}
  </div>
  <div id={`${props.id}-body`} class="pop-menu-body bg-darker-bg">
    {@render props.body()}
  </div>
</div>

<style lang="scss">
  .pop-menu {
    &-body {
      position: absolute;
      top: 4rem;
      z-index: 10;
      padding: 0.5rem;
      box-shadow: 1px 1px 1px #000;
      background-color: #111;
      display: flex;
      flex-direction: column;
    }
    &-trigger {
      padding-left: 0.5rem;
      overflow: hidden;
    }
    &-container {
      overflow: hidden;
      margin: 0;
    }
  }
</style>
