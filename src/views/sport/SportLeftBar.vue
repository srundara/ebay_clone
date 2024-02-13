<script setup>
import {ref} from 'vue'
import { sportMenu} from "../nav/menu";

</script>
<template>
    <div class="col-lg-2">
        <div class="shopby-Category">
            <ul>
                <div class="box">
                    <h5 class="">Shop by Category</h5>
                    <li v-for="(item,i) in sportMenu.leftMenu" :key="i">
                        <RouterLink to="">{{item.name}}</RouterLink>
                        <ul class="subMenu">
                            <li v-for="(item,i) in item.subMenu" :key="i">
                                <a href="">{{item.name}}</a>
                            </li>
                        </ul>
                    </li>
                    
                </div>
                <!-- <div class="box">
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
                </div>         -->
            </ul>
        </div>

    </div>
</template>