<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  interface PopMenuPropsType extends HTMLAttributes<HTMLDivElement> {
    id: string;
    className?: string;
    ariaLabel?: string;
    popmenuTrigger: Snippet;
    popmenuBody: Snippet;
    
  }
  let { id, className, "aria-label": ariaLabel, popmenuTrigger, popmenuBody }: PopMenuPropsType = $props();

  let bodyDisplay: 'none' | 'flex' = $state("none");
  //document.getElementById(`${props.id}-body`).style.display

  const OnMouseEnter = () => {
    bodyDisplay = "flex";
  }
  const OnMouseLeave = () => {
    bodyDisplay = "none";
  }
  
</script>

<div
  id={id}
  aria-label={ariaLabel}
  role="tooltip"
  class={`pop-menu-container ${className}`}
  onmouseleave={OnMouseLeave}
>
  <div id={`${id}-trigger`} role="tooltip" class="pop-menu-trigger" onmouseenter={OnMouseEnter}>
    {@render popmenuTrigger()}
  </div>
  <div id={`${id}-body`} class="pop-menu-body bg-darker-bg" style="display: {bodyDisplay};">
    {@render popmenuBody()}
  </div>
</div>

<style lang="scss">
:global {
  .pop-menu {
    &-body {
      box-shadow: 1px 1px 1px #000;
      display: flex;
      flex-direction: column;
    }
    &-trigger {
      overflow: hidden;
    }
    &-container {
      overflow: hidden;
      margin: 0;
    }
  }
}
</style>
