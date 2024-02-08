<script setup>
    import {ref} from 'vue'
    import { RouterLink, RouterView } from 'vue-router'
    import { slideBar } from './slide';
    
</script>
<template>
    <div class="container-fluid">
        <div class="container">
            <div class="col-xl-11 col-lg-11 col-md-11 m-auto slide-menu">
                <ul>
                    <li v-for="(item,i) in slideBar.menuList" :key="i">
                        <RouterLink to="">{{ item.name }}</RouterLink>
                    </li>
                </ul>
            </div>
            <div class="col-xl-12 col-lg-12 col-md-12 m-auto bg-info">
                asdasd
            </div>
        </div>
    </div>
</template>