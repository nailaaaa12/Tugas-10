<template>
  <Navbar />
  <router-view />
</template>

<script setup>
import Navbar from './components/Navbar.vue'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600;700&display=swap');

body {
  margin: 0;
  font-family: 'Fredoka', sans-serif;
  background-color: #f9f9fb;
  color: #333;
}

a {
  text-decoration: none;
  color: #4f46e5;
  transition: color 0.3s;
}
a:hover {
  color: #9333ea;
}

button {
  cursor: pointer;
  transition: background-color 0.3s ease;
}

input, select {
  transition: all 0.2s;
}
input:focus, select:focus {
  outline: none;
  border-color: #6366f1;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.3);
}

.container {
  max-width: 1024px;
  margin: 0 auto;
  padding: 1rem;
}

.card {
  background-color: #fff;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
}

.text-center {
  text-align: center;
}
.text-xl {
  font-size: 1.25rem;
}
.text-2xl {
  font-size: 1.5rem;
}
.text-4xl {
  font-size: 2.25rem;
}
.mt-4 {
  margin-top: 1rem;
}
.mt-8 {
  margin-top: 2rem;
}
.mb-4 {
  margin-bottom: 1rem;
}
</style>
