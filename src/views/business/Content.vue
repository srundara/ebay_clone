<script setup>
import {ref} from 'vue'
import {imgHeader,topBrandImg,bottomImg,imgShow,brandShow} from './business' 
import { favoriteBrands } from '../nav/menu'
import { RouterLink , RouterView } from 'vue-router'
const isActive = ref(true)
import Detail from './Detail.vue'
</script>
<template>
    <div class="col-lg-10">
        <div class="row">
            <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 ">
                <div class="row">
                    <div class="top-img-contant">
                        <RouterLink to="">
                            <img :src="imgHeader" alt="">
                        </RouterLink>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-lg-4 box-image" v-for="(img,i) in topBrandImg.imgList" :key="i">
                        <RouterLink to="">
                            <img :src="img.img" alt="">
                        </RouterLink>
                    </div>
                </div>
                <div class="branch_box">
                    <div class="row mt-2 ">
                        <h4>Shop By Category</h4>
                        <div class="branch-show " v-for="(item,i) in brandShow.show" :key="i">
                            <div class="imgBranch">
                                <RouterLink to="">
                                    <img :src="item.img" alt="">
                                    {{ item.name }}
                                </RouterLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="branch_box_img">
                    <div class="row mt-2 ">
                        <h4>Shop By Branch</h4>
                        <div class="branch-show " v-for="(item,i) in favoriteBrands.brands" :key="i" v-show="item.isActive">
                            <div class="imgBranch" v-if="item.isActive">
                                <RouterLink to="">
                                    <img :src="item.img" alt="">
                                    {{item.name}}
                                </RouterLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-lg-4 box-image" v-for="(img,i) in bottomImg.imgList" :key="i">
                        <RouterLink to="">
                            <img :src="img.img" alt="">
                        </RouterLink>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 box-image" v-for="(img,i) in imgShow.img" :key="i">
                        <RouterLink to="">
                            <img :src="img.img" alt="">
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
        <Detail/>
    </div>
    
</template>