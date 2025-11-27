<script lang="ts">
  import type { HTMLButtonAttributes } from 'svelte/elements';
  interface ButtonTypeProps extends HTMLButtonAttributes {
    className?: string;
  }
  const props: ButtonTypeProps = $props();
</script>

<button
  class={`button ${props.className} ${props.disabled && 'button-disabled button-disabled-effects'}`}
  {...props}
>
  {@render props.children()}
</button>

<style lang="scss">
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
          box-shadow: 0 0px 10px theme-color("lighter-purple");
        }
      }
      &-blue {
        &:hover {
          box-shadow: 0 0px 10px theme-color("clear-blue");
        }
      }
    }
  }
</style>
