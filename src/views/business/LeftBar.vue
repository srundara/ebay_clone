<script setup>
import {ref} from 'vue'
import { shopByCategory , favoriteBrands ,shopByInterest} from "../nav/menu";

</script>
<template>
    <div class="col-lg-2">
        <div class="shopby-Category">
            <ul>
                <div class="box">
                    <h5 class="">Shop by Category</h5>
                    <li v-for="(item,i) in shopByCategory.category" :key="i">
                        <RouterLink to="">{{item.name}}</RouterLink>
                    </li>
                    
                </div>
                <div class="box">
                    <h5 class="">Your Favorite Brands</h5>
                    <li v-for="(item,i) in favoriteBrands.brands" :key="i">
                        <RouterLink to="">{{item.name}}</RouterLink>
                    </li>

                </div>
                <div class="box">
                    <h5 class="">Shop by Interest</h5>
                    <li v-for="(item,i) in shopByInterest.byInterest" :key="i">
                        <RouterLink to="">{{item.name}}</RouterLink>
                    </li>
                </div>        
            </ul>
        </div>

    </div>
</template>