<script setup>
import {ref} from 'vue'
import { sportMenu} from "../nav/menu";

</script>
<template>
    <div class="col-lg-2">
        <div class="shopby-Category">
                <div class="box_sport_menu">
                    <h5 class="">Shop by Category</h5>
                    <ul>
                        <li v-for="(item,i) in sportMenu.leftMenu" :key="i">
                            <RouterLink to="">{{item.name}} <i class="fa-solid fa-chevron-down"></i></RouterLink>
                            
                            <ul class="subMenu">
                                <li v-for="(item,i) in item.subMenu" :key="i">
                                    <RouterLink to="">{{item.name}}</RouterLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    
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
            <!-- </ul> -->
        </div>

    </div>
</template>