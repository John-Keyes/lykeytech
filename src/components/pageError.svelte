<script lang="ts">
  import Card from './card.svelte';
  import Button from './button.svelte';

  interface PageErrorTypeProps {
    statusCode?: number;
    details?: string;
  }

  let props: PageErrorTypeProps = $props();
</script>

        <Card id="page-error" aria-label="Page Error" className="page-error flex flex-column flex-center border-top border-top-5 border-top-light-purple text-start">
            <h1 id="page-error-title" aria-label="Page Error Title">{props.statusCode ? `Error ${props.statusCode} occurred.` : "An error occurred."}</h1>
            {#if props.details}
              <h2 id="page-error-details" aria-label="Page Error Details">{props.details}</h2>
            {/if}
            <Button id="page-error-back" aria-label="Page Error Back" onclick={() => history.back()} className="bg-purple bg-hover-light-purple button-glow-purple text-inherit">
              <span class="button-text">Return</span>
            </Button>
        </Card>

<style lang="scss">
  .page-error {
    padding: 2.5rem;
    margin-top: 200px;
  }
</style>
  