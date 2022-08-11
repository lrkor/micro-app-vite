import {createStore} from 'vuex';

const store = createStore({
    state: {
        baseData: {},
        currentIndex: '/home',
    },
    mutations: {
        setBaseData(state: any, baseData: any) {
            state.baseData = baseData;
        },
    },
    actions: {},
    getters: {
        getCurrentIndex(state: any) {
            return state.currentIndex;
        },
    },
});
export default store;
