<template>
  <aside class="sidebar">
    <router-link to="/" @mouseover="handleMouseOver" @mouseout="handleMouseOut" :class="linkClass('home')">Home</router-link>
    <router-link to="/about" @mouseover="handleMouseOver" @mouseout="handleMouseOut" :class="linkClass('about')">About</router-link>
  </aside>
</template>

<script>
export default {
  name: 'MySidebar',
  data() {
    return {
      activeLink: null
    };
  },
  methods: {
    handleMouseOver(event) {
      this.activeLink = event.target.textContent.toLowerCase();
    },
    handleMouseOut() {
      this.activeLink = null;
    },
    linkClass(linkName) {
      return {
        'link': true,
        'active': this.activeLink === linkName
      };
    }
  }
};
</script>

<style scoped>
.sidebar {
  width: fit-content;
  height: 100%;
  text-align: center;
  padding: 20px;
  background-color: darkgrey;
}

.link {
  display: block;
  margin-bottom: 10px;
  color: #333;
  text-decoration: none;
}

.active {
  color:#696868;
}
</style>