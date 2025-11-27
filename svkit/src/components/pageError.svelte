<script lang="ts">
  import Card from './card';
  import Button from './button';
</script>


        <Card id="page-error" aria-label="Page Error" className="page-error flex flex-column flex-center border-top border-top-5 border-top-light-purple text-start">
            <h1 id="page-error-title" aria-label="Page Error Title">{statusCode ? `Error ${statusCode} occurred.` : "An error occurred."}</h1>
            {#if details}
              <h2 id="page-error-details" aria-label="Page Error Details">{details}</h2>
            {/if}
            <Button id="page-error-back" aria-label="Page Error Back" onClick={back} className="bg-purple bg-hover-light-purple button-glow-purple text-inherit">
              <span class="button-text">Return</span>
            </Button>
        </Card>

<style lang="scss">
  .page-error {
    padding: 2.5rem;
    margin-top: 200px;
  }
</style>
  