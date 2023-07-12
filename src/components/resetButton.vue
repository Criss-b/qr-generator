<template>
    <div class="resetContainer">
        <button class="btn" @click="reset">RIGENERA</button>
    </div>
</template>

<script>
    export default {
        name: "resetButton",
        methods: {
            reset() {
                this.$router.push({ path: "/" });
            }
        },
    }
</script>

<style lang="scss" scoped>
@font-face {
  font-family: minecraft;
  src: url("@/assets/font/Minecraft.ttf");
}
.resetContainer {
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 5%;
}
.btn {
    font-family: minecraft;
    font-size: 20px;
    text-decoration: none;
    text-align: center;
    height: 30px;
    width: 170px;
    background-color: cornflowerblue;
    border: none;
    padding: 6px;

}
.btn:hover {
    background-color: lightcyan;
    cursor: pointer;
}
</style>