<script>
export default {
  data() {
    return {
      Email: "",
      Password: "",
    };
  },

  methods: {
    async signIn() {
      try {
        const response = await fetch("/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: this.Email,
            password: this.Password,
          }),
        });

        const data = await response.json();
        if (data.statusCode === 200) {
          // Set the token in local storage
          localStorage.setItem("authToken", data.body.token);
          alert("Login is successful");
          this.$router.push("/deposit-withdraw");
        } else {
          console.log("Login failed:", data.message);
          alert("Email or password is invalid");
        }
      } catch (error) {
        console.error("Error during login:", error);
        alert("Error during login. Please try again.");
      }
    },
  },
};
</script>

<template>
  <div class="w-full bg-white rounded-lg shadow sm:max-w-md">
    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
      <h1 class="font-bold text-center text-xl text-gray-900">Login</h1>
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
            v-model="Email"
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
            v-model="Password"
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
