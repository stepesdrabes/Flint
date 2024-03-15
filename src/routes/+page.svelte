<script lang="ts">
    import {t} from '$lib/flint/i18n'
    import Column from "$components/flint/layout/Column.svelte"
    import Button from "$components/flint/inputs/Button.svelte"
</script>

<Column height="100%" align="center" justify="center">
    <img src="/favicon.png" alt="Flint"/>
    <h1>{$t('common.flint')}</h1>

    <Button onClick="{() => {}}" icon="arrow-left" label="Back"/>
</Column>

<style lang="scss">
  img {
    width: 2rem;
    height: 2rem;
  }
</style>