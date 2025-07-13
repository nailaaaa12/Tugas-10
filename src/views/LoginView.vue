<template>
  <div class="login-container">
    <div class="login-card">
      <h2 class="login-title">Login Admin</h2>

      <input
        v-model="username"
        placeholder="Masukkan Nama "
        class="login-input"
      />

      <input
        v-model="password"
        type="password"
        placeholder="Masukkan Password"
        class="login-input"
      />

      <button @click="login" class="login-button">Masuk</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const username = ref('')
const password = ref('')
const router = useRouter()
const auth = useAuthStore()

function login() {
  if (!username.value || !password.value) {
    alert('Nama dan password tidak boleh kosong!')
    return
  }

  auth.login({ username: username.value })
  router.push('/admin')
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600&display=swap');

.login-container {
  font-family: 'Fredoka', sans-serif;
  background: linear-gradient(145deg, #c0e0ff, #e2f0ff);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-card {
  background: white;
  padding: 2rem 3rem;
  border-radius: 1rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
}

.login-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #1e3a8a;
}

.login-input {
  width: 100%;
  padding: 0.75rem 1rem;
  margin-bottom: 1rem;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 1rem;
  transition: border 0.3s;
}

.login-input:focus {
  border-color: #3b82f6;
  outline: none;
}

.login-button {
  background: #3b82f6;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
}

.login-button:hover {
  background: #2563eb;
}
</style>
