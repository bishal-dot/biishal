<template>
    <div class="service-container wrapper" id="services" >
      <div class="s-heading animation">
        <h1>My Services</h1>
      </div>
      
      <div class="s-services animation">
        <div class="s-section animation" v-for="services in Services" :key="services.id">
          <img :src="services.img" alt="web-d">
          <h3>{{ services.title }}</h3>
          <p>{{ services.description }}</p>
        </div>
      </div>
    </div>
  </template>
  <script setup>

  import { ref } from 'vue';

  const Services = ref([
    {
      id: 1,
      img:'/images/web-d.png',
      title: 'Full-Stack Web Application Development',
      description: 'I build scalable web apps using Vue.js and Nuxt.js for frontend, paired with Laravel and MySQL for backend development — delivering seamless, full-featured solutions.'
    },
    {
      id: 2,
      img: '/images/f-end.png',
      title: 'Frontend Development (Vue + Nuxt + Tailwind CSS)',
      description: 'Creating modern, responsive, and interactive UIs with Vue, Nuxt, and Tailwind CSS. I also use Pinia for clean and efficient state management in large-scale applications.'
    },
    {
      id: 3,
      img: '/images/b-end.png',
      title: 'Backend Development (Laravel + MySQL)',
      description: 'Developing secure and high-performing RESTful APIs and database-driven logic with Laravel and MySQL — optimized for speed and scalability.'
    },
    {
      id: 4,
      img:'/images/api.png',
      title: 'API Integration (Axios + 3rd Party Services)',
      description: 'Using Axios to connect frontend apps with REST APIs, integrate services like EmailJS (for contact forms), CRMs, or any external data source.'
    }
  ])
</script>