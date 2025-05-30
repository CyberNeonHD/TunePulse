<script>
  export let selectedTimeRange;
  export let onTimeRangeClick;

  const timeRanges = [
    { value: 'short_term', label: 'Last Month' },
    { value: 'medium_term', label: 'Last 6 Months' },
    { value: 'long_term', label: 'All Time' }
  ];
</script>

<div class="flex justify-center gap-4 mb-8">
  {#each timeRanges as { value, label }}
    <button 
      class="px-8 py-2 rounded-md font-semibold animate-jump-in animate-delay-1000 {selectedTimeRange === value ? 'bg-green-500 text-black' : 'bg-black text-green-500 border border-green-500'}"
      on:click={() => onTimeRangeClick(value)}>
      {label}
    </button>
  {/each}
</div>