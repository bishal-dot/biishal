export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.config.globalProperties.$router.options.scrollBehavior = (to, from, savedPosition) => {
      if (to.hash) {
        return {
          el: to.hash,
          behavior: 'smooth',
          block: 'start'
        };
      }
      return { top: 0, behavior: 'smooth' };
    };
  });
  