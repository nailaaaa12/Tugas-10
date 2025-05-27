<template>
  <div id="app" class="layout">
    <Sidebar />
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
export default {
  components: { Sidebar }
}
</script>

<style>
.layout {
  display: flex;
  min-height: 100vh;
}
.content {
  flex-grow: 1;
  padding: 30px;
  margin-left: 240px;
  background-color: #f9f9f9;
}
</style>