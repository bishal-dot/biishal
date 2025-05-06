<template>
    <div class="project-container wrapper" id="projects" >
      <div class="p-heading animation">
        <span>Browse My Recent</span>
        <h2>My Projects</h2>
      </div>
      
      <div class="project-lists animation">
        <div class="project-details" v-for="projects in Projects" :key="projects.id">
          <div class="image">
            <img :src="projects.img" alt="todo">
          </div>
          <h3>{{ projects.title }}</h3>
          <p>{{ projects.description }}</p>
          <div class="btn">
            <a :href="projects.github" target="_blank">
                <button>View My Project</button>
            </a>
          </div>
        </div>
      </div>
    </div>
</template>
<script setup>
  import { ref } from 'vue';

  const Projects = ref([
      {
        id: 1,
        title:'TODO Task List',
        description:'Vue + Pinia | Task manager with add/edit/delete features.',
        img:'/images/TODO.png',
        github:'https://github.com/bishal-dot/Todo-task-app-vue.git'
      },
      {
        id: 2,
        title:'ChatBox',
        description:'Vue + Pinia | Task manager with add/edit/delete features.',
        img:'/images/Chatbox.png',
        github:'https://github.com/bishal-dot/chatbox-vue.git'
      },
      {
        id:3,
        title:'e-Commerce',
        description:'Vue + Pinia + Axios + Vue Router | Task manager additems to wishlist or cart features.',
        img:'/images/eCommerce.png',
        github:''
      }
  ])

</script>
  