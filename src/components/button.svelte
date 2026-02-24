<script lang="ts">
  import type { HTMLButtonAttributes } from 'svelte/elements';
  export interface ButtonPropsType extends HTMLButtonAttributes {
    id: string;
    "aria-label": string;
    className?: string;
  }
  let props: ButtonPropsType = $props();

</script>

<button
  class={`button ${props.className} ${props.disabled && 'button-disabled button-disabled-effects'}`}
  {...props}
>
  {@render props.children?.()}
</button>
