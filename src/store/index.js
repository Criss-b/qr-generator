import { createStore } from 'vuex';

export default createStore({
    state: {
        qrcode: "",
    },
    mutations: {
        CREATE_QRCODE(state, payload) {
            const newQrcode = payload;
            state.qrcode = newQrcode;
        },
    },
    actions: {},
    modules: {},
})