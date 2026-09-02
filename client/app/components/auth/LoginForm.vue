<script setup lang="ts">
const email = ref<string>("");
const password = ref<string>("");

const signIn = async () => {
  try {
    const res: any = await $fetch("http://localhost:3001/api/auth/login", {
      method: "POST",
      body:{
        email: email.value,
        password: password.value,
      }
    });

    if (res.success === true) {
      // Set the token in local storage
      localStorage.setItem("authToken", res.data.token);
      alert("Login is successful");
      return navigateTo("/deposit-withdraw");
    }
  } catch (error: any) {
    const stauts = error?.response?.status;
    const message = error?.response?._data?.message;

    if (stauts === 404) {
      alert(message);
    } else if (stauts === 401) {
      alert(message);
    } else {
      console.error("Error during login:", error);
      alert("Error during login. Please try again.");
    }
  }
};
</script>

<template>
  <div class="w-full sm:max-w-md">
    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
      <form @submit.prevent="signIn" class="space-y-4">
        <div>
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900"
            >Email *</label
          >
          <input
            type="email"
            name="email"
            id="email"
            v-model="email"
            class="bg-white border-2 border-gray-300 text-gray-900 focus:outline-none rounded-lg focus:ring-gray-200 focus:border-gray-400 block w-full p-2"
            placeholder="Email"
            required
          />
        </div>

        <div>
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900"
            >Password *</label
          >
          <input
            type="password"
            name="password"
            id="password"
            v-model="password"
            class="bg-white border-2 border-gray-300 text-gray-900 focus:outline-none rounded-lg focus:ring-gray-200 focus:border-gray-400 block w-full p-2"
            placeholder="Password"
            required
          />
        </div>

        <button
          type="submit"
          class="w-full bg-[#363940] text-white font-bold p-2 rounded-md"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>
