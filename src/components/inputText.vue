<template>
    <div class="inputContainer">
        <form class="form">
            <label for="link" id="labelLink">Link da generare</label>
            <input type="text" name="link" id="link" v-model="inputText">
            <button class="btn" type="submit" @click.prevent="generates">GENERA</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "inputText",
        data(){
            return {
                inputText: "",
            };
        },
        methods: {
            generates() {
                const inputValue = this.inputText;
                this.$emit("textValue", inputValue);
                console.log(inputValue);
            }
        },
    };
</script>

<style lang="scss" scoped>
@font-face {
  font-family: minecraft;
  src: url("@/assets/font/Minecraft.ttf");
}
.inputContainer {
    background-color: rgba(200, 211, 232, 0.299);
    color: darkblue;
    height: 200px;
    width: 70%;
    font-size: 20px;
    margin-top: 20px;
    box-shadow: 0px 0px 6px 2px rgb(200, 211, 232);
    display: flex;
    flex-direction: column;
    align-items: center;
}
.form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
}
#labelLink {
    font-size: 25px;
}
#link {
    height: 30px;
    width: 500px;
    border: none;
    font-family: minecraft;
}
#link:focus {
    border: 3px solid darkblue;
    outline: none;
}
.btn {
    font-family: minecraft;
    color: darkblue;
    background-color: cornflowerblue;
    padding: 3px;
    height: 30px;
    width: 90px;
    border: none;
}
.btn:hover {
    background-color: lightcyan;
    cursor: pointer;
}
</style>