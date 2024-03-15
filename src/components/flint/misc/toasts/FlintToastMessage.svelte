<script lang="ts">
    import type {FlintToastMessageData} from "$type/flint/toasts/flintToastMessageData"
    import Box from "$components/flint/layout/Box.svelte"
    import Row from "$components/flint/layout/Row.svelte"

    export let toast: FlintToastMessageData
</script>

<Box width="25rem" height="5rem">
    <Row height="100%" align="center">
        <p>{toast.message}</p>
    </Row>
</Box>