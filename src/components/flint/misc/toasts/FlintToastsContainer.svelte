<script lang="ts">
    import FlintToastManager from "$lib/flint/flintToastManager"
    import {onDestroy} from "svelte"
    import type {FlintToastMessageData} from "$type/flint/toasts/flintToastMessageData"
    import FlintToastMessage from "$components/flint/misc/toasts/FlintToastMessage.svelte"

    let toasts: FlintToastMessageData[] = []

    const toastsUnsubscribe = FlintToastManager.getWritable().subscribe((e) => toasts = e)

    onDestroy(() => {
        toastsUnsubscribe()
    })
</script>

<div class="toast-container">
    {#each toasts as toast, index (toast.id)}
        <div class="flint-toast-message" style="top: {index * -1.75}rem; z-index: {toasts.length - index}; scale: {1 - index * 0.05}">
            <FlintToastMessage {toast}/>
        </div>
    {/each}
</div>

<style lang="scss">
  .toast-container {
    position: relative;
    isolation: isolate;
    display: flex;
    flex-direction: column;

    .flint-toast-message {
      transform: translate(-100%, -100%);
      top: 0;
      left: 0;
      position: absolute;
    }
  }
</style>