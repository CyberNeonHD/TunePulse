<!-- src/lib/components/BackButton.svelte -->
<script>
  import { goto } from '$app/navigation';
  export let target = '/pulseboard';  // Default
  export let text = 'Back';          // Default
</script>

<div class="button-container">
  <button on:click={() => goto(target)} class="back-button">
    ← {text}
  </button>
</div>

<style>
  .button-container {
    display: flex;
    justify-content: flex-end;
    padding-right: 32px;
    width: 100%;
  }

  .back-button {
    padding: 8px 12px;
    background: rgb(20, 220, 80);
    color: black;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;
    font-family: inherit;
    font-size: 1rem;
  }
  .back-button:hover { 
    background: rgb(15, 200, 70); 
  }
</style>