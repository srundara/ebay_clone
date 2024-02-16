<script setup>
    import {ref} from 'vue'
    const isActive = ref(false)
    const faqActive =  ref(false)
</script>
<template>
    <div class="faq_box">
        <div class="faq">
            <ul>
                <li @click="isActive = !isActive">
                    <a>
                        <h1>Collectible Sneakers FAQs</h1>
                        <i class="fa-solid " :class="{'fa-minus':isActive , 'fa-plus':!isActive}"></i>
                    </a>
                    <ul class="" v-if="isActive">
                        <div class="faq-txt">
                            <h1>What are collectible sneakers?</h1>
                            <p>Collectible sneakers are footwear models that hold value and desirability beyond their functional purpose. They are often sought after by sneaker enthusiasts and collectors due to their unique design, rarity, collaborations, and cultural significance.</p>
                        </div>
                        <div class="faq-txt">
                            <h1>Can anyone become a sneaker collector?</h1>
                            <p>Yes, anyone with an interest in sneakers can become a collector. Starting small, learning about different models and releases, and connecting with the sneaker community can help you begin your collecting journey.</p>
                        </div>
                        <div class="faq-txt">
                            <h1>What are some common terms used in the Collectible Sneaker community?</h1>
                            <p>Here are some terms that are commonly used by sneaker collectors or “sneakerheads":</p>
                            <ul>
                                <li><strong> Deadstock:</strong> Refers to sneakers that are brand-new, unworn, and in their
                                    original condition, including all packaging and accessories. This can also refer to a
                                    sneaker that is no longer in production.</li>
                                <li><strong>OG:</strong> Stands for "original" or "original release," referring to the first
                                    iteration of a sneaker model when it was initially introduced.</li>
                                <li><strong>Retro:</strong> Refers to re-released versions of older sneaker models, often
                                    with slight design updates or improvements.</li>
                                <li><strong>On-Feet:</strong> Refers to images of sneakers being worn by an individual,
                                    showcasing how they look when worn.</li>
                                <li><strong>Beaters:</strong> Sneakers that are well-worn and often used for everyday
                                    activities, sacrificing their pristine condition for comfort.</li>
                            </ul>
                        </div>
                        <div class="faq-txt">
                            <h1>What are some iconic collectible Nike sneaker models?</h1>
                            <div class="txt_box">
                                <p>Some iconic collectible <RouterLink to="">Nike sneaker models</RouterLink> include the Nike Air Jordan 1, Nike Dunk SB, Nike Air Max 1, Nike Air Force 1, </p>
                                <p>and various collaborations such as Nike x Off-White and Nike x Travis Scott releases.</p>
                            </div>
                        </div>
                        <div class="faq-txt">
                            <h1>Are there any collectible sneakers made by adidas?</h1>
                            <div class="txt_box">
                                <p>There are a variety of collectible adidas sneaker models, such as the adidas Superstar, adidas Stan Smith, <RouterLink to="">adidas Yeezy line,</RouterLink>adidas Originals</p>
                                <p>ZX series, and collaborations like adidas x Pharrell Williams and adidas x BAPE releases.</p>
                            </div>
                        </div>
                        
                    </ul>
                </li>
            </ul>
            <!-- <a  @click="isActive = !isActive">
                <h1>Collectible Sneakers FAQs</h1>
                <i class="fa-solid " :class="{'fa-plus':isActive , 'fa-minus':!isActive}"></i>
            </a>
            <div class="subFaq" v-if="qafActive">
                asdasasdasd
            </div> -->
        </div>
    </div>
</template>