<template>
    <div class="headerContainer">
        <h1>QRCODE generator</h1>
        <p>Compila il campo di testo e clicca su GENERA</p>
    </div>
    <div class="contentContainer">
        <inputText @textValue="onTextValue"></inputText>
    </div>
</template>

<script>
import inputText from '@/components/inputText.vue';
export default {
    components: { inputText },
    data() {
        return {
            isGenerates: false,
        };
    },
    methods: {
            onTextValue(payload) {
            if(payload !== "") {
                this.isGenerates = true;
                this.textValue = payload;
                this.$store.commit("CREATE_QRCODE", this.textValue);
            }
            if(this.isGenerates) {
                this.$router.push({ path: "/qrcode"});
            }
        },
    },
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: minecraft;
  src: url("@/assets/font/Minecraft.ttf");
}
.headerContainer {
    font-family: minecraft;
    background-color: cornflowerblue;
    background-attachment: fixed;
    background-size: cover;
    width: 100%;
    height: 300px;
    letter-spacing: 3px;
    text-align: center;
}
h1 {
    margin-top: 0;
    color: darkblue;
    padding-top: 40px;
    font-size: 80px;
}
p {
    color:lightcyan;
    padding: 5px;
    font-size: 30px;
}
.contentContainer {
    font-family: minecraft;
    display: flex;
    justify-content: center;
}
@media screen and (max-width: 425px) {
.headerContainer {
    width: 100%;
    height: 210px;
    letter-spacing: 3px;
    text-align: center;
}
h1 {
    margin-top: 0;
    padding-top: 20px;
    font-size: 50px;
}
p {
    padding-bottom: 15px;
    font-size: 15px;
}
}
@media screen and (min-width: 425px) and (max-width: 768px){
h1 {
    padding-top: 40px;
    font-size: 70px;
}
p {
    padding-bottom: 20px;
    font-size: 25px;
}
}
@media screen and (min-width: 769px) and (max-width: 880px){
    h1 {
    padding-top: 40px;
    font-size: 70px;
}
p {
    padding-bottom: 20px;
    font-size: 25px;
}
}
</style>