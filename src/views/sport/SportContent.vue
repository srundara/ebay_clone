<script setup>
import {ref} from 'vue'
import { RouterLink, RouterView } from 'vue-router';
import { topBrandImg } from '../business/business';
import { topReleasesImg } from './sport';
</script>
<template>
    <div class="col-xxl-10 col-xl-10 col-lg-10 col-md-10">
        <div class="row">
            <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 img-contant">
                <RouterLink to="">
                    <img :src="topReleasesImg" alt="">
                </RouterLink>
            </div>
            <div class="container">
                <div class="m-3 header">
                    <h1>Last Releases</h1>
                </div>
                <div class="row">
                    <div class="col-lg-4 box-img" v-for="(img,i) in topBrandImg.imgList" :key="i">
                        <RouterLink to="">
                            <img :src="img.img" alt="">
                        </RouterLink>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>