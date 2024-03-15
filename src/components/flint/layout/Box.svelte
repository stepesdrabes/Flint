<script lang="ts">
    export let width: string = '20rem'
    export let height: string = 'auto'
    export let background: string = 'var(--box-background-color)'
    export let borderRadius: string = 'var(--border-radius-medium)'
    export let outline: string = '1px solid var(--outline-color)'
    export let padding: string = 'var(--spacing-m) var(--spacing-l)'
</script>

<div class="box"
     style="width: {width}; height: {height}; background: {background}; border-radius: {borderRadius}; padding: {padding}; outline: {outline}">
    <slot/>
</div>

<style lang="scss">
  .box {
    display: flex;
    flex-direction: column;
  }
</style>