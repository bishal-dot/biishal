<template>
  <div class="contact-container wrapper" id="contact">
    <div class="contact-links animation">
      <div class="contact-heading">
        <h2 class="section-title">Contact Me</h2>
        <p class="section-subtitle">Let's Build Something Amazing Together!</p>
      </div>
      <div class="contact-info">
        <p><i class="fas fa-envelope"></i> bchettri859@gmail.com</p>
        <p><i class="fas fa-phone"></i> +977-9748202893</p>
        <p><i class="fas fa-map-marker-alt"></i> Gaindakot-8, Nawalpur</p>
      </div>
      <div class="c-icons">
        <a href=""><i class="fab fa-facebook"></i></a>
        <a href="https://www.instagram.com/bii_tal/" target="_blank"><i class="fab fa-instagram"></i></a>
        <a href=""><i class="fab fa-linkedin"></i></a>
        <a href="https://github.com/bishal-dot" target="_blank"><i class="fab fa-github"></i></a>
      </div>
      <div class="btn">
        <a href="https://wa.me/9779748202893?text=Hi%20Bishal%2C%20I'm%20interested%20in%20hiring%20you%20for%20a%20project.%20Let's%20discuss%20the%20details." target="_blank">
          Hire Me
        </a>
      </div>
    </div>

    <div class="contact-form">
      <div class="contact-heading">
        <h2 class="section-title animation">Get in touch</h2>
        <p class="section-subtitle animation">Have a project in mind? Send me a message.</p>
      </div>
      <div class="inp">
        <input v-model="form.name" type="text" placeholder="Name" />
        <p v-if="errors.name" class="error">{{ errors.name }}</p>
      </div>
      <div class="inp">
        <input v-model="form.email" type="email" placeholder="Email" />
        <p v-if="errors.email" class="error">{{ errors.email }}</p>
      </div>
      <textarea v-model="form.message" placeholder="Message"></textarea>
      <p v-if="errors.message" class="error">{{ errors.message }}</p>
      <div class="sbt-btn">
        <button @click="sendEmail">Submit</button>
      </div>
      <p v-if="status">{{ status }}</p>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import emailjs from 'emailjs-com'

  const form = ref({
    name: '',
    email: '',
    message: ''
  });
  const status = ref('');
  const errors = ref({
    name: '',
    email: '',
    message: ''
  });

  const config = useRuntimeConfig();

  const validateForm = () => {
    let valid = true;
    errors.value = { name: '', email: '', message: '' }; // reset errors

    // Name validation
    if (!form.value.name) {
      errors.value.name = 'Name is required';
      valid = false;
    }

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!form.value.email || !emailPattern.test(form.value.email)) {
      errors.value.email = 'Please enter a valid email';
      valid = false;
    }

    // Message validation
    if (!form.value.message) {
      errors.value.message = 'Message cannot be empty';
      valid = false;
    }

    return valid;
  };

  const sendEmail = async () => {
    if (validateForm()) {
      try {
        await emailjs.send(
          config.public.emailJsServiceId,
          config.public.emailJsTemplateId,
          {
            name: form.value.name,
            email: form.value.email,
            message: form.value.message
          },
          config.public.emailJsPublicKey
        )
        status.value = 'Message Sent!';
        form.value = { name: '', email: '', message: '' }; // reset form
      }
      catch(error){
        console.error(error);
        status.value = 'Failed to send message. Try again.';
      }
    } else {
      status.value = 'Please fill out all required fields correctly.';
    }
  };
</script>
