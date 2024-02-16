<script setup>
import {ref} from 'vue'
import { sportMenu} from "../nav/menu";

</script>
<template>
    <div class="col-lg-2">
        <div class="sport_menu">
            <div class="box_sport_menu">
                <h5 class="">Shop by Category</h5>
                <ul>
                    <li v-for="(item,i) in sportMenu.leftMenu" :key="i" @click="item.subActive = !item.subActive">
                        <a >
                            <span>{{item['name']}}</span> 
                            <i class="fa-solid" :class="{'fa-angle-up':item.subActive, 'fa-angle-down':!item.subActive}"></i>
                        </a>
                        <ul class="subMenu" v-if="item.subActive">
                            <li v-for="(item,i) in item.subMenu" :key="i">
                                <RouterLink to="">{{item.name}}</RouterLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <div class="sport_menu">
            <div class="box_sport_menu mt-3">
                <h5 class="">Shop by US Man Size</h5>
                <ul>
                    <li v-for="(item,i) in sportMenu.shopByManSize" :key="i">
                        <RouterLink to="">
                            <span>{{item['name']}}</span> 
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </div>
        <div class="sport_menu">
            <div class="box_sport_menu mt-3">
                <h5 class="">Shop by US Woman Size</h5>
                <ul>
                    <li v-for="(item,i) in sportMenu.shopByWomanSize" :key="i">
                        <RouterLink to="">
                            <span>{{item['name']}}</span> 
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </div>
        <div class="sport_menu">
            <div class="box_sport_menu mt-3">
                <h5 class="">Shop by Category</h5>
                <ul>
                    <li v-for="(item,i) in sportMenu.sportByCategory" :key="i">
                        <RouterLink to="">
                            <span>{{item['name']}}</span> 
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>