<script lang="ts">
    import {t} from '$lib/flint/i18n'
    import Column from "$components/flint/layout/Column.svelte"
    import Button from "$components/flint/inputs/Button.svelte"
    import Box from "$components/flint/layout/Box.svelte"
    import Spacer from "$components/flint/layout/Spacer.svelte"

    import FlintToastManager from "$lib/flint/flintToastManager"
    import {FlintToastType} from "$type/flint/toasts/flintToastType"

    const testToasts = () => {
        FlintToastManager.addMessage('Test toast', FlintToastType.SUCCESS)
    }
</script>

<Column height="100%" align="center" justify="center">
    <Box width="30rem" height="40rem">
        <Column height="100%" align="center">
            <img src="/favicon.png" alt="Flint"/>
            <Spacer value="var(--spacing-m)"/>

            <h1>{$t('common.flint')}</h1>

            <Spacer value="auto"/>
            <Button icon="comment-alt" width="100%" label="Test toast" onClick="{testToasts}"/>
        </Column>
    </Box>
</Column>

<style lang="scss">
  img {
    width: 2rem;
    height: 2rem;
  }
</style>