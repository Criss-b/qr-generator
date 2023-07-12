<template>
    <div class="downloadContainer">
        <a class="btn" :href="imgSrc" :download="'qr_code' + date() + '.jpg'">DOWNLOAD JPG</a>
        <a class="btn" :href="svgSrc" :download="'qr_code' + date() + '.svg'">DOWNLOAD SVG</a>
    </div>
</template>

<script>
    export default {
        name: "downloadButton",
        props: {
            imgSrc: String,
            svgSrc: String,
        },
        methods: {
            date() {
                    return Date.now();
                },
        },
    }
</script>

<style lang="scss" scoped>
.downloadContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}
.btn {
    color: darkblue;
    text-decoration: none;
    padding-top: 10px;
    text-align: center;
    height: 30px;
    width: 170px;
    background-color: cornflowerblue;
}
.btn:hover {
    background-color: lightcyan;
}
.btn:active {
    color: darkblue;
}
</style>