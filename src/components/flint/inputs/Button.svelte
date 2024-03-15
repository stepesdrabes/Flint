<script lang="ts">
    export let width: string = 'auto'
    export let height: string = '2.5rem'

    export let label: string | undefined = undefined
    export let icon: string | undefined = undefined
    export let background = 'var(--accent-color)'
    export let color = '#FFFFFF'
    export let textSize = 'var(--text-smaller)'
    export let borderRadius = '1.25rem'

    export let onClick: () => void = () => {
    }
</script>

<button on:click={onClick}
        style="width: {width}; height: {height}; border-radius: {borderRadius}; background-color: {background}; color: {color}; font-size: {textSize}">
    {#if icon}
        <i class="fi fi-br-{icon}"></i>
    {/if}

    {label}
</button>

<style lang="scss">
  button {
    display: flex;
    align-items: center;
    gap: var(--spacing-ms);
    justify-content: center;
    width: 100%;
    outline: none;
    border: none;
    height: var(--height);
    padding: 0 var(--spacing-l);
    font-weight: 500;
    cursor: pointer;
    text-transform: uppercase;
    white-space: nowrap;
    flex-shrink: 0;
    transition: opacity 0.3s ease-in-out, scale 0.3s ease-in-out;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      scale: 0.95;
    }

    &:disabled {
      opacity: 0.25;

      &:hover {
        transform: none;
        cursor: not-allowed;
      }

      &:active {
        scale: 1;
      }
    }
  }
</style>