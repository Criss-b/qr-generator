<template>
    <div class="contentContainer">
        <displayQr :value="textValue" ></displayQr>
    </div>
</template>

<script>
import displayQr from '@/components/displayQr.vue';
    export default {
        components: { displayQr },
        computed: {
            textValue() {
                return this.$store.state.qrcode;
            }
        }
    }
</script>

<style lang="scss" scoped>
@font-face {
  font-family: minecraft;
  src: url("@/assets/font/Minecraft.ttf");
}
.contentContainer {
    font-family: minecraft;
    display: flex;
    justify-content: center;
}
</style>