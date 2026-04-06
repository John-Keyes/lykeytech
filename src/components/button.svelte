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

<style lang="scss">
  :global {
  .button {
    border: none;
    padding: 0.5rem;
    &-text {
      font-weight: bold;
      color: inherit;
    }
    &-glow {
      &-purple {
        &:hover {
          box-shadow: 0 0px 10px var(--lighter-purple);
        }
      }
      &-blue {
        &:hover {
          box-shadow: 0 0px 10px var(--clear-blue);
        }
      }
    }
  }
}
</style>