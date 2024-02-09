<script setup>
    import {data} from './business'
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
                    <div class="col-lg-3">
                        <ul>
                            <li>
                                <a href=""> adjahda</a>
                            </li>
                            <li>
                                <a href=""> adjahda</a>
                                <ul>
                                    <li>
                                        <a href="">dada</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href=""> adjahda</a>
                            </li>
                            <li>
                                <a href=""> adjahda</a>
                            </li>
                        </ul>

                    </div>
                    <div class="col-lg-9" v-for="(item,i) in data.item" :key="i">
                        <div class="" v-html="item"></div>
                    </div>
                </div>
            </div>

        </div>
        
    </div>
</template>