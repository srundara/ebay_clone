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
                        <RouterLink to="">
                            <span>{{item.name}}</span> 
                            <i class="fa-solid fa-chevron-down"></i>
                        </RouterLink>
                        <ul class="subMenu">
                            <li v-for="(item,i) in item.subMenu" :key="i">
                                <RouterLink to="">{{item.name}}</RouterLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>