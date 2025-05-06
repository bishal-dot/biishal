<script setup>

    import { ref } from 'vue';
    import Education from './internal/Education.vue';
    import Experience from './internal/Experience.vue';
    import Skills from './internal/Skills.vue';

    let activeTab = ref('Skills');

</script>

<template>
    <div class="about-container wrapper" id="about">
        <div class="about-image-container">
            <img src="./../assets/images/profile.JPG" alt="">
        </div>
        <div class="about-details animation">
            <h1>About Me</h1>
            <p>Hi, I'm Bishal, a passionate front-end developer with 4 months of experience in building responsive and user-friendly websites. I have worked on 3-4 projects using HTML, CSS, JavaScript, and VueJS to create smooth and interactive web experiences. I'm grateful to have learned from <strong>Arjun Kandel</strong>, who has guided me in mastering front-end technologies and best coding practices, I'm always eager to learn and improve my skills. Let's connect and create something awesome!</p>
            <div class="a-contents animation">
                <div class="a-skills">
                    <p :class="{ selected: activeTab == 'Skills'}" @click="activeTab = 'Skills'">Skills</p>
                    <p :class="{ selected: activeTab == 'Experience'}" @click="activeTab = 'Experience'">Experience</p>
                    <p :class="{ selected: activeTab == 'Education'}" @click="activeTab = 'Education'">Education</p>
                </div>
                <div class="about-field" v-if="activeTab == 'Skills'">
                    <Skills />
                </div>
                <div class="about-field " v-if="activeTab == 'Experience'">
                    <ul>
                        <Experience/>
                    </ul>
            </div>
            <div class="about-field " v-if="activeTab == 'Education'">
                <ul>
                    <Education />
                </ul>
            </div>
        </div>  
    </div>
 </div>
</template>