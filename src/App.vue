<template>
  <div class="app">
    <sidebar></sidebar>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';

export default {
  name: 'App',
  components: {
    Sidebar
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: rgb(15, 15, 15);
  display: flex;
  width: 100vw; 
  height: 100vh; 
  overflow: hidden;
}
.app {
  display: flex;
  width: fit-content;
  height: 100vh;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
