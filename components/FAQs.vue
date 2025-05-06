<script setup>
import { ref } from 'vue';

let CloseModel = ref(false);
const FAQs = ref([
        {
            id: 1,
            title: 'Who am I, and what do I do?',
            description: "I'm a Frontend/Backend Developer specialized in Vue, Laravel. I use technologies like Vue, Laravel, Nuxt.js etc.",
            active: false
        },
        {   
            id: 2,
            title: 'What kind of web development do i specialize in?',
            description: 'I focus on building responsive, high-performance websites and web applications using modern technologies like HTML, CSS, JavaScript, Vue and Laravel. I also work with frameworks like Nuxt.js',
            active: false
        },
        {
            id: 3,
            title: 'Do you build websites from scratch?',
            description: 'Yes! I can design and develop a custom site from the ground up, or work with existing designs if you already have something in mind.',
            active: false
        },
        {
            id: 4,
            title: 'How long does it take to build a website?',
            description:"Simple websites can take 1-2 weeks, while more advanced projects may take 3-6 weeks. I'll provide a clear timeline before we get started.",
            active: false
        }
    ]);

    const Showfaq = (faq) => {
        FAQs.value.map(element => {
            if(faq.id == element.id) element.active = true;
            else element.active = false; 
        });
    }

</script>

<template>
    <div class="faq-container animation wrapper">
      <h2>Frequently Asked Questions</h2>
      
      <div class="faq-contents animation" 
           v-for="faq in FAQs" 
           :key="faq.id" 
           @click="Showfaq(faq)">
        <div class="faq-topic">
          <h6>{{ faq.title }}</h6>
          <span>
            <img v-if="faq.active" src="./../assets/images/up.svg" alt="up" @click="CloseModel = true">
            <img v-else src="./../assets/images/down.svg" alt="down">
          </span>
        </div>
  
        <div class="faq-answer">
          <p v-if="faq.active">{{ faq.description }}</p>
        </div>
      </div>
    </div>
  </template>
  