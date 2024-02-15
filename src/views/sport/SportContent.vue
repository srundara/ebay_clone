<script setup>
import {ref} from 'vue'
import { RouterLink, RouterView } from 'vue-router';
import { topBrandImg } from '../business/business';
import { topReleasesImg,topReleasesImg2,topReleasesImg3,topReleasesImg4, shoseImg  } from './sport';
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
                <section class="box-section">
                    <div class="m-3 header">
                        <h1>Last Releases</h1>
                    </div>
                    <div class="row">
                        <div class="box-img"  v-for="(img,i) in shoseImg.releases" :key="i">
                            <div class="item-box" >
                                <RouterLink to="">
                                <img :src="img.img" alt="">
                                </RouterLink>
                            </div>
                            <div class="mt-2">
                                <p>{{ img.name}}</p>
                            </div>
                        </div>
                    </div>  
                </section>
                <section class="box-section">
                    <div class="m-3 header">
                        <h1>Trending Sneakers</h1>
                    </div>
                    <div class="row">
                        <div class="box-img"  v-for="(img,i) in shoseImg.trendingSneakers" :key="i">
                            <div class="item-box" >
                                <RouterLink to="">
                                <img :src="img.img" alt="">
                                </RouterLink>
                            </div>
                            <div class="mt-2">
                                <p>{{ img.name}}</p>
                            </div>
                        </div>
                    </div>  
                </section>
                
            </div>
            <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 mt-4 img-contant">
                <RouterLink to="">
                    <img :src="topReleasesImg2" alt="">
                </RouterLink>
            </div>
            <div class="container">
                <section class="explore">
                    <div class="m-3 header">
                        <h1>Explore Nike</h1>
                    </div>
                    <div class="row">
                        <div class="box-img"  v-for="(img,i) in shoseImg.exploreNike" :key="i">
                            <div class="item-box" >
                                <RouterLink to="">
                                <img :src="img.img" alt="">
                                <div class="mt-2">
                                    <p>{{ img.name}}</p>
                                </div>
                                </RouterLink>
                            </div>
                        </div>
                    </div>  
                </section>
            </div>
            <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 mt-4 img-contant">
                <RouterLink to="">
                    <img :src="topReleasesImg3" alt="">
                </RouterLink>
            </div>
            <div class="container">
                <section class="explore">
                    <div class="m-3 header">
                        <h1>Explore Adidas</h1>
                    </div>
                    <div class="row">
                        <div class="box-img"  v-for="(img,i) in shoseImg.exploreAdidas" :key="i">
                            <div class="item-box" >
                                <RouterLink to="">
                                <img :src="img.img" alt="">
                                <div class="mt-2">
                                    <p>{{ img.name}}</p>
                                </div>
                                </RouterLink>
                            </div>
                        </div>
                    </div>  
                </section>
            </div>
            <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 mt-4 img-contant">
                <RouterLink to="">
                    <img :src="topReleasesImg4" alt="">
                </RouterLink>
            </div>
            <div class="container">
                <section class="explore">
                    <div class="m-3 header">
                        <h1>Find your favorites</h1>
                    </div>
                    <div class="row">
                        <div class="box-img"  v-for="(img,i) in shoseImg.favorites" :key="i">
                            <div class="item-box" >
                                <RouterLink to="">
                                <img :src="img.img" alt="">
                                <div class="mt-2">
                                    <p>{{ img.name}}</p>
                                </div>
                                </RouterLink>
                            </div>
                        </div>
                    </div>  
                </section>
            </div>
            <div class="container">
                <section class="">
                    <div class="m-3 header">
                        <h1>Best Selling in Shoe Box Shoe Organizers</h1>
                    </div>
                    <div class="row">
                        <div class="box-sell"  v-for="(img,i) in shoseImg.bestSell" :key="i">
                            <div    class="mt-2" >
                                <div class="box-text mt-2">
                                    <RouterLink to="" class="link">
                                    <img :src="img.img" alt="">
                                    <p>{{ img.name.substring(0,36)+ '...'}}</p>
                                    </RouterLink>
                                 <p><Strong>{{ img.price }} {{ img.status }}</Strong></p>
                                </div>
                            </div>
                        </div>
                    </div>  
                </section>
                <div class="mt-5 explore"></div>
            </div>
            <div class="container mt-5">
                <div class="content">
                    <div class="section1">
                        <section class="">
                            <h1>Everything You Need to Know About Buying Sneakers</h1>
                        </section>
                    </div>
                    <!-- <div class="section1">
                        <section class="">
                            <p>Old-school is the new cool with a pair of rare or limited edition deadstock collectible sneakers. You don't need to be walking around with a receipt to prove that you own a pair of Yeezy Boost 350, Jordan 1, Nike Sacai, or adidas Ultraboost sneakers. Get on eBay to buy DS and OG sneakers that may only have been worn once.</p>
                        </section>
                    </div> -->
                </div>
                <div class="content">
                    <div class="section1">
                        <section class="">
                            <p>Old-school is the new cool with a pair of rare or limited edition deadstock collectible sneakers. You don't need to be walking around with a receipt to prove that you own a pair of Yeezy Boost 350, Jordan 1, Nike Sacai, or adidas Ultraboost sneakers. Get on eBay to buy DS and OG sneakers that may only have been worn once.</p>
                        </section>
                    </div>
                </div>
               
            </div>
        </div>
    </div>
</template>