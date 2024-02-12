<script setup>
import {ref} from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { footerBar } from './menu'
</script>
<template>
    <div class="container-fluid footer-nav">
        <div class="container">
            <div class="footer">
                <ul>
                    <li v-for="(item,i) in footerBar.footer" :key="i">
                        <RouterLink to="">{{item.name }}</RouterLink>
                    </li>
                </ul>
                <ul>
                    <li v-for="(item,i) in footerBar.copy" :key="i">
                        <p>{{ item.copy }}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>