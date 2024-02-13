<script setup>
    import {ref} from 'vue'
    import { RouterLink, RouterView } from 'vue-router'
    import SportLeftBar from './SportLeftBar.vue'
</script>
<template>
    <div class="container-fluid">
        <div class="container">
            <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                <div class="row">
                    <div class="top_url">
                        <ul>
                            <li>
                                <RouterLink to="">eBay</RouterLink>
                                <i class="fa-solid fa-angle-right"></i>
                                <span>Collectible Sneakers</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="shose-img-header mt-4">
                    <div class="col-lg-4">
                        <h1>Add a spring to your step!</h1>
                        <h2>Iconic designs from the sneaker brands you love.</h2>
                    </div>
                </div>
                <div class="row mt-4">
                    <SportLeftBar/>
                    <Content/>
                </div>
            </div>
        </div>
    </div>
</template>