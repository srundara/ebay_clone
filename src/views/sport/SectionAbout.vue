<script setup>
import {ref} from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import SportFAQ from './SportFAQ.vue';
</script>
<template>
<div class="">
    <div class="container mt-5 ">
        <div class="content">
            <div class="section1">
                <section class="">
                    <h1>Everything You Need to Know About Buying Sneakers</h1>
                </section>
            </div>
        </div>
        <div class="content">
            <div class="section1">
                <section class="">
                    <p>Old-school is the new cool with a pair of rare or limited edition deadstock collectible sneakers. You don't need to be walking around with a receipt to prove that you own a pair of Yeezy Boost 350, Jordan 1, Nike Sacai, or adidas Ultraboost sneakers. Get on eBay to buy DS and OG sneakers that may only have been worn once.</p>
                </section>
            </div>
        </div>
        <div class="content_txt mt-4">
            <div class="section">
                <section class="">
                    <h1>Every pair of sneakers are unique</h1>
                    <p>Sneaker collecting has become a pastime for buyers hoping to get their hands on limited edition Jordan, Yeezy and Air Force 1 sneakers. When Nike OG models like the Nike Dunk and the Nike SB are for sale, potential buyers are attracted by the unique design and the limited number of pairs available. For some, purchasing collectible sneakers is a chance to own a rare item with a unique color scheme, whether accented with black, off-white, or neon. Many sneakers are associated with pop culture trends, celebrities, or movies. Unlike sneakers for everyday use, collectible sneakers are intended to be worn on special occasions or preserved for posterity.</p>
                </section>
            </div>
        </div>
    </div>
    <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 mt-4 con_box">
        <div class="content_box mt-4">
            <div class="section">
                <section class="">
                    <h1>How should you choose collectible sneakers?</h1>
                    <p>Choosing sneakers is an involved task. It's important to check the stitching, colors, and logo on the sneaker to prove that the model is genuine. If you intend to wear your collectible sneakers often, choose darker colors that won't show scuffs so easily. The rarer a sneaker is, the more of an investment opportunity it could be, as its value will only increase over time. Consider whether the shoes will be preserved in the climate conditions that you live in. Unique features such as embossed initials, metallic paint, and neon soles are eye-catching and help to justify the sales price for collectible sneakers.</p>
                </section>
                
            </div>
        </div>
        <div class="content_box_txt mt-4">
            <div class="section">
                <section class="">
                    <h1>Which collectible sneakers are available on eBay?</h1>
                    <p>You can find new and lightly used sneakers on eBay. Authentic sneakers from top brands like adidas, Nike, and Jordan Retro are available. Jordan Retro sneakers come in many models such as the Jordan 1, the Jordan 11, the Jordan 4, and the Jordan 3. Jordan Travis Scott sneakers can be identified by their logo and material for authenticity. Stay on trend but low key with the Yeezy 700. The Nike Off-White and adidas Off-White sneakers are great for those looking for a less mainstream look. Hot products like the Nike Air Max and the Nike SB Dunk are also available on eBay for purchase. Basketball players will enjoy having a pair of Air Jordan sneakers so they can imagine flying like Mike.</p>
                </section>
                <section class="">
                    <p>Collecting sneakers is no longer a rare phenomenon and can have different meanings for different people. For some, it could be an opportunity to own something special, whereas for others it could be an investment. Sneakerheads from all over the world are always on the lookout for new releases and limited-edition models and there are a lot of factors that need to be considered before getting your hands on collectible sneakers. A wide range of collectible sneakers is available on eBay for you to choose from, so learn more about sneakers from ,
                        <RouterLink to="">adidas,</RouterLink> <RouterLink to="">Jordan,</RouterLink> <RouterLink to="">Golden Goose</RouterLink> <RouterLink to="">Converse,</RouterLink>  and <RouterLink to="">Nike Air Force</RouterLink> on our <RouterLink to="">Sneakers articles.</RouterLink>
                    </p>
                </section>
            </div>
        </div>
        <div class="content_box mt-4 mb-4">
            <div class="section">
                <section class="">
                    <h1>Sneaker Release Dates, News and Articles</h1>
                    <p>Stay ahead of the game and be the first to know about eBay latest sneaker releases, news, and <RouterLink to="">lifestyle guides.</RouterLink>Get exclusive information and updates on the <RouterLink to="">coolest sneakers</RouterLink> around. Whether you're into basketball, football, soccer or tennis, you'll find <RouterLink to="">sporting articles</RouterLink> to help you decide on which sneaker to buy for your sport of choice!</p>
                </section>
                
            </div>
        </div>
    </div>
    <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 con_box">
        <SportFAQ/>
    </div> 
    <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 mt-4 con_box">  
        <div class="content_box mt-4 " >
            <div class="section">
                <section class="" >
                    <h1 style="font-size:18px">Content provided for informational purposes only. eBay is not affiliated with or endorsed by Nike or adidas.</h1></section>
                
            </div>
        </div>
    </div>
    <div class="mt-4" style="border-bottom: 1px solid gray;">
    </div>
    <div class="mt-4" style=""></div>
</div>
</template>