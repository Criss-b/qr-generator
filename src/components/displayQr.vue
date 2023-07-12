<template>
    <div class="displayContainer">
            <p class="error" v-if="hasError">
                <span class="errorIcon">
                    <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="m0 0h24v24h-24z" fill="none" />
                        <path fill="currentColor" d="m1 21h22l-11-19zm12-3h-2v-2h2zm0-4h-2v-4h2z" />
                    </svg>
                </span>
                Impossibile generare il codice QR. <br>Si e' verificato un errore.
            </p>
            <div v-else class="qrContainer">
                <div class="display">
                    <p>Ecco il tuo QR CODE:</p>
                    <img :src="imgSrc" alt="">
                </div>
                <downloadButton :imgSrc="imgSrc" :svgSrc="svgSrc"></downloadButton>
            </div>
            <resetButton></resetButton>
    </div>
</template>

<script>
import downloadButton from './downloadButton.vue';
import resetButton from '@/components/resetButton.vue';
export default {
    name: "displayQr",
    components: {
        downloadButton,
        resetButton,
    },
    props: {
        value: {
            type: String,
            default: "",
        },
    },
    data() {
        return {
            hasError: false,
            imgSrc: null,
            svgSrc: null,
            dataUrlOpts: {
                errorCorrectionLevel: "H",
                type: "image/jpeg",
                quality: 0.8,
                margin: 1,
                width: 256
            },
            stringOpts: {
                type: "svg"
            },
        };
    },
    watch: {
        value: {
            immediate: true,
            // eslint-disable-next-line no-unused-vars
            handler(newVal, oldVal) {
                if (newVal) {
                    // eslint-disable-next-line no-undef
                    QRCode.toDataURL(newVal, this.dataUrlOpts, (err, url) => {
                        if (err) {
                            this.hasError = true;
                        } else {
                            this.imgSrc = url;
                        }
                    });
                    // eslint-disable-next-line no-undef
                    QRCode.toString(newVal, this.stringOpts, (err, string) => {
                        if (err) {
                            this.hasError = true;
                        } else {
                            this.svgSrc = `data:image/svg+xml;base64,${btoa(string)}`;
                        }
                    });
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.displayContainer {
    background-color: rgba(200, 211, 232, 0.299);
    color: darkblue;
    height: 100%;
    width: 70%;
    font-size: 20px;
    margin-top: 20px;
    box-shadow: 0px 0px 6px 2px rgb(200, 211, 232);
}
.error {
    text-align: left;
    font-size: .9em;
    line-height: 1.5;
    color: darkblue;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.errorIcon {
    flex: 1;
    padding: .8em;
}
.qrContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5% 10%
}
.display {
    text-align: center;
}
</style>