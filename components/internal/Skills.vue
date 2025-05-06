<script setup>
import { ref } from 'vue';


    const skills = ref([
        {
            name: 'HTML/CSS',
            percentage: 90
        },
        {
            name: 'Javascript',
            percentage: 85
        },
        {
            name: 'Vue.js',
            percentage: 80
        },
        {
            name: 'Git & GitHub',
            percentage: 75
        },
        {
            name: 'Laravel',
            percentage: 60
        },
        {
            name: 'Nuxt.js',
            percentage: 60
        },
        {
            name: 'Vue-Router/Pinia/Axios',
            percentage: 75
        },
        {
            name: 'Mysql',
            percentage: 65
        }
        
    ]);

</script>

<template>
    <div class="skills-container animation">
        <h2>My Skills</h2>
        <div v-for="skill in skills" :key="skill.name" class="skill">
            <div class="skill-label animation">
                <p>{{ skill.name }}</p>
                <p>{{ skill.percentage }}%</p>
            </div>
            <div class="skill-bar animation">
                <div class="fill" 
                :style="{ width: skill.percentage + '%'}"></div>
            </div>
        </div>
    </div>
</template>