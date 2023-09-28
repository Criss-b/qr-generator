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
.contentContainer {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>