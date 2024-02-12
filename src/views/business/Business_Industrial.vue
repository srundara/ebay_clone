<script setup>
import {ref} from 'vue'
import LeftBar from './LeftBar.vue' 
import Content from './Content.vue'
import Footer from '../nav/Footer.vue'
import { RouterLink } from 'vue-router'

</script>
<template>
    <div class="container-fluid">
        <div class="container">
            
            <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                <div class="img-header mt-4">
                    <div class="col-lg-4">
                        <h2><span>Professional Tools</span></h2>
                        <h5><span>The tools and equipment you need to complete the job</span></h5>
                    </div>
                </div>
                <div class="row mt-4">
                    <LeftBar/>
                    <Content/>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
</template>