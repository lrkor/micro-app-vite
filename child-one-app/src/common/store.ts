import {createStore} from 'vuex';

const store = createStore({
    state: {
        baseData: {},
    },
    mutations: {
        setBaseData(state: any, baseData: any) {
            state.baseData = baseData;
        },
    },
    actions: {},
    getters: {},
});
export default store;
