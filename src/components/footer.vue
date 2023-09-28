<template>
    <div class="footerContainer">
        <p class="credits">POWERED BY CB</p>
    </div>
</template>

<script>
    export default {
        name: "footerComponent",
    }
</script>

<style lang="scss" scoped>
.footerContainer {
    background-color: rgba(200, 211, 232, 0.299);
    padding: 10px 0px;
    width: 100%;
    height: auto;
    margin-top: 20px;
}
.credits {
    text-align: center;
    padding-top: 10px;
    color: darkblue;
    font-size: 0.9rem;
}
</style>