<script setup>

    import { ref } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute();
    const isDarkMode = ref(false);
    
    let ShowModel = ref(false);
 
    const theme = () => {
        isDarkMode.value = !isDarkMode.value;
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', isDarkMode.value);
    };

    // Check saved theme on page load
    if (localStorage.getItem('darkMode') === 'true') {
        isDarkMode.value = true;
        document.body.classList.add('dark-mode');
    }

    let closeModel = () => {
        ShowModel.value = false;
    }

    const isActive = (hash) => {
        return route.hash === hash
        }

</script>
<template>
    <header>
        <nav class="wrapper">
            <div class="logo">
            <NuxtLink to="/#home" class="name-logo">Bishal</NuxtLink>
            </div>
            <div class="navlinks">
                <NuxtLink to="/#home" :class="{ 'active-nav': isActive('#home') }">Home</NuxtLink>
                <NuxtLink to="/#about" :class="{ 'active-nav': isActive('#about') }">About</NuxtLink>
                <NuxtLink to="/#services" :class="{ 'active-nav': isActive('#services') }">Services</NuxtLink>
                <NuxtLink to="/#projects"  :class="{ 'active-nav': isActive('#projects') }">Projects</NuxtLink>
                <NuxtLink to="/#contact"  :class="{ 'active-nav': isActive('#contact') }">Contact</NuxtLink>
                <div class="mode-action">
                    <img v-if="!isDarkMode" src="./../assets/images/dark.svg"  alt="dark" @click="theme">
                    <img v-else src="./../assets/images/light.svg" alt="light" @click="theme">
                </div>
            </div>
            <div class="ham-menu">
                <div class="mode-action">
                    <img v-if="!isDarkMode" src="./../assets/images/dark.svg"  alt="dark" @click="theme">
                    <img v-else src="./../assets/images/light.svg" alt="light" @click="theme">
                </div>
                <div class="menu">
                    <img v-if="!ShowModel" src="./../assets/images/hamMenu.svg" alt="hamMenu" @click="ShowModel = true">
                    <img v-else src="./../assets/images/close.svg" alt="close" @click="closeModel">
                </div>
            </div>
        </nav>
        <div class="menulinks" v-if="ShowModel">
            <div class="links">
                <NuxtLink to="/#home" @click="closeModel">Home</NuxtLink>
                <NuxtLink to="/#about" @click=" closeModel">About</NuxtLink>
                <NuxtLink to="/#services" @click="closeModel">Services</NuxtLink>
                <NuxtLink to="/#projects" @click="closeModel">Projects</NuxtLink>
                <NuxtLink to="/#contact" @click="closeModel">Contact</NuxtLink>
            </div>
        </div>
    </header>
</template>