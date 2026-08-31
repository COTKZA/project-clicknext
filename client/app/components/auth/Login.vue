<template>
  <div class="w-full bg-white rounded-lg shadow sm:max-w-md">
    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
      <h1 class="font-bold text-center text-xl text-gray-900">Login</h1>
      <form action="" class="space-y-4">
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
            class="bg-white border-2 border-gray-300 text-gray-900 focus:outline-none rounded-lg focus:ring-gray-200 focus:border-gray-400 block w-full p-2"
            placeholder="Password"
            required
          />
        </div>

        <button type="submit" class="w-full bg-[#363940] text-white font-bold p-2 rounded-md">
            Login
        </button>
      </form>
    </div>
  </div>
</template>
