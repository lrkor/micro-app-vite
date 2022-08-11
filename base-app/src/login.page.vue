<template>
    <div class="login" :style="{backgroundImage: 'url(' + bgImg + ')'}">
        <div id="div_box">
            <div id="div_validation-go">
                <div id="div_box-v1">
                    <div id="div_box-v1-top">
                        <div id="div_box-v1-top-1">Login</div>
                    </div>
                    <div id="div_box-v1-bottom">
                        <el-form ref="formRef" :model="form" :rules="rules" style="margin-top: 10px">
                            <el-form-item prop="userName">
                                <el-input v-model="form.userName" placeholder="Username" class="txtName" />
                            </el-form-item>
                            <el-form-item prop="password">
                                <el-input v-model="form.password" placeholder="Password" />
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" size="small" round @click="onSubmit">Login</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>
            </div>

            <div id="div_start1">
                <div id="div_start2">
                    <div id="div_start3" title="Click login" @click="checkLogin()">Login</div>
                </div>
            </div>
        </div>
        <div id="div_NetMonitor">
            <div class="div_netMon" @click="checkNet(2)"><img :src="bgImg2" /></div>
            <div class="div_netMon" @click="checkNet(3)"><img :src="bgImg3" /></div>
            <div class="div_netMon" @click="checkNet(4)"><img :src="bgImg4" /></div>
            <div class="div_netMon" @click="checkNet(5)"><img :src="bgImg5" /></div>
            <div id="div_netMon5">Wallpaper</div>
            <div id="div_netMon6" title="Wallpaper" @click="checkWallpaper()">
                <svg
                    id="icon-sus1"
                    t="1590074189701"
                    class="icon-suspension"
                    viewBox="0 0 1000 1000"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="1773"
                    width="200"
                    height="200"
                >
                    <path
                        d="M500 0c-276.1563 0-500 223.8438-500 500s223.8438 500 500 500 500-223.8438 500-500-223.8438-500-500-500zM500 906.25c-224.375 0-406.25-181.875-406.25-406.25s181.875-406.25 406.25-406.25 406.25 181.875 406.25 406.25-181.875 406.25-406.25 406.25zM794.1875 455.8125l-250-250c-24.4063-24.4063-63.9688-24.4063-88.375 0s-24.4063 63.9688 0 88.375l143.3125 143.3125h-349.125c-34.5313 0-62.5 27.9688-62.5 62.5s27.9688 62.5 62.5 62.5h349.125l-143.3125 143.3125c-24.4063 24.4063-24.4063 63.9688 0 88.4063 12.2188 12.1875 28.1875 18.3125 44.1875 18.3125s32-6.0938 44.1875-18.3125l250-250c24.4063-24.4063 24.4063-63.9688 0-88.375z"
                        fill="#1571fa"
                        p-id="1774"
                    ></path>
                </svg>
                <svg
                    id="icon-sus2"
                    t="1590076234376"
                    class="icon-suspension"
                    viewBox="0 0 1000 1000"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="5476"
                    width="200"
                    height="200"
                >
                    <path
                        d="M500 0c276.1563 0 500 223.8438 500 500s-223.8438 500-500 500-500-223.8438-500-500 223.8438-500 500-500zM500 906.25c224.375 0 406.25-181.875 406.25-406.25s-181.875-406.25-406.25-406.25-406.25 181.875-406.25 406.25 181.875 406.25 406.25 406.25zM205.8125 455.8125l250-250c24.4063-24.4063 63.9688-24.4063 88.375 0s24.4063 63.9688 0 88.375l-143.3125 143.3125h349.125c34.5313 0 62.5 27.9688 62.5 62.5s-27.9688 62.5-62.5 62.5h-349.125l143.3125 143.3125c24.4063 24.4063 24.4063 63.9688 0 88.4063-12.2188 12.1875-28.1875 18.3125-44.1875 18.3125s-32-6.0938-44.1875-18.3125l-250-250c-24.4063-24.4063-24.4063-63.9688 0-88.375z"
                        p-id="5477"
                        fill="#1571fa"
                    ></path>
                </svg>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import {defineComponent, ref, readonly, reactive} from 'vue';
import bgImg2 from './assets/img/timg2.jpg';
import bgImg3 from './assets/img/timg3.jpg';
import bgImg4 from './assets/img/timg4.jpg';
import bgImg5 from './assets/img/timg5.jpg';
import {useRouter} from 'vue-router';
import {guid} from '@/common/tools';

export default defineComponent({
    name: 'LoginPage',
    components: {},
    setup() {
        const bgImg = ref<any>(bgImg2);
        const router = useRouter();
        const checkLogin = () => {
            const start1 = document.getElementById('div_start1');
            const start2 = document.getElementById('div_start2');
            start1!.style.transform = 'rotate(360deg)';
            start1!.style.transition = 'transform 1.5s';
            start1!.style.webkitTransition = 'transform 1.5s';

            start2!.style.transform = 'rotate(-360deg)';
            start2!.style.transition = 'transform 1.5s';
            start2!.style.webkitTransition = 'transform 1.5s';

            start1!.addEventListener('webkitTransitionEnd', function () {
                start1!.style.display = 'none';
                const v1 = document.getElementById('div_validation-go');
                v1!.style.display = 'block';
            });
        };

        const bgImgObj = readonly<any>({
            2: bgImg2,
            3: bgImg3,
            4: bgImg4,
            5: bgImg5,
        });

        const checkNet = (index: number) => {
            bgImg.value = bgImgObj[index];
        };

        const count = ref(0);
        const checkWallpaper = () => {
            const icon1 = document.getElementById('icon-sus1');
            const icon2 = document.getElementById('icon-sus2');
            count.value++;
            const netbox = document.getElementById('div_NetMonitor');
            if (count.value % 2 !== 0) {
                icon1!.style.display = 'none';
                icon2!.style.display = 'block';
                netbox!.style.marginLeft = '0px';
                netbox!.style.transition = 'margin-left 1s';
                netbox!.style.webkitTransition = 'margin-left 1s';
            } else {
                icon2!.style.display = 'none';
                icon1!.style.display = 'block';
                netbox!.style.marginLeft = '-350px';
                netbox!.style.transition = 'margin-left 1s';
                netbox!.style.webkitTransition = 'margin-left 1s';
            }
        };
        const formRef = ref();

        const form = ref({
            userName: '',
            password: '',
        });

        const onSubmit = () => {
            if (!formRef.value) {
                return;
            }
            formRef.value.validate((valid: any) => {
                if (valid) {
                    sessionStorage.setItem('token', guid());
                    router.push('/');
                }
            });
        };

        const rules = reactive({
            userName: [{required: true, message: '请输入用户名', trigger: 'blur'}],
            password: [{required: true, message: '请输入密码', trigger: 'blur'}],
        });

        return {
            checkLogin,
            checkNet,
            checkWallpaper,
            bgImg,
            bgImg2,
            bgImg3,
            bgImg4,
            bgImg5,
            form,
            onSubmit,
            rules,
            formRef,
        };
    },
});
</script>

<style lang="scss" scoped>
@import './common/styles/login.css';
.login {
    flex: 1 0 0;
    width: 100%;
    height: 100%;
    background-size: cover;

    :deep(.el-form-item) {
        margin-bottom: 10px;
    }

    :deep(.el-input__inner) {
        width: 200px;
        height: 40px;
        outline: none;
        border: none;
        background-color: transparent;
        border-bottom: 2px solid #ffffff;
        color: #ffffff;
        border-radius: 0;
    }
}
</style>
