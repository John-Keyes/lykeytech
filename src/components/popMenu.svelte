<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  interface PopMenuPropsType extends HTMLAttributes<HTMLDivElement> {
    id: string;
    className?: string;
    ariaLabel?: string;
    trigger: Snippet;
    body: Snippet;
    
  }
  let props: PopMenuPropsType = $props();

  let bodyDisplay: 'none' | 'flex' = $state("flex");
  //document.getElementById(`${props.id}-body`).style.display

  const OnMouseEnter = () => {
    bodyDisplay = "flex";
  }
  const OnMouseLeave = () => {
    bodyDisplay = "none";
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
  <div id={`${props.id}-body`} class="pop-menu-body bg-darker-bg" style="display: {bodyDisplay};">
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
