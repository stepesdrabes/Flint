<script lang="ts">
    export let width: string = '100%'
    export let height: string = 'auto'

    export let align: 'start' | 'center' | 'end' | 'stretch' | 'baseline' = 'start'
    export let justify: 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly' = 'start'

    export let reverse: boolean = false
</script>

<div class="column"
     style="display: flex; width: {width}; height: {height}; align-items: {align}; justify-content: {justify}; flex-direction: {reverse ? 'column-reverse' : 'column'}">
    <slot/>
</div>