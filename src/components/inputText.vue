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
            }
        },
    };
</script>

<style lang="scss" scoped>
.inputContainer {
    background-color: #c8d3e84c;
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
    font-family: minecraft;
    height: 30px;
    width: 500px;
    border: none;
    border-radius: 0px!important;
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
@media screen and (min-width: 320px) and (max-width: 376px) {
    #link {
    width: 200px;
    }
}
@media screen and (min-width: 377px) and (max-width: 740px) {
    #link {
    width: 250px;
    }
}
</style>