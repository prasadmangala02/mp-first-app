<!-- <script>
    import App from "./App.svelte";

</script> -->

<style>
    .progress-container{
        margin: 20px 0;
        border: solid rgb(194, 194, 194) 1px;
    }

    .progress-bar{
        height: 30px;
        width: 20%;
        background-color: rgb(77, 199, 55);

    }
</style>

<div bp = "grid">
    <div bp = "offset-5@md 4@md 12@sm"
    class="progress-container" >
    <div class="progress-bar" >

        <span class="sr-only">%</span>

    </div>

    </div>

</div>
