<script setup>
    import {ref} from 'vue'
    import { RouterLink, RouterView } from 'vue-router'
    import { slideBar, slideItem } from './slide';
    
</script>
<template>
    <div class="container-fluid top_category_bar">
        <div class="container">
            <div class="col-xl-11 col-lg-11 col-md-11 m-auto slide-menu">
                <ul>
                    <li v-for="(item,i) in slideBar.menuList" :key="i">
                        <RouterLink to="">{{ item.name }}</RouterLink>
                    </li>
                </ul>
            </div>
            <div class="col-xl-12 col-lg-12 col-md-12 m-auto bg-info slider" >
               <div class="row" v-for="(slide,i) in slideItem.slideList" :key="i">
                    <div class="col-md-3" style="padding-left:45px">
                        <div class="col-md-12" >
                            <h2>{{ slide.header }}</h2>
                        </div>
                        <div class="col-md-12" >
                            <p>{{ slide.title }}</p>
                        </div>
                        <div class="col-md-12">
                            <button>
                                <p>{{slide.button}}</p>
                            </button>
                        </div>
                    </div>
                    <div class="col-md-9">b</div>
                </div>
            </div>
        </div>
    </div>
</template>