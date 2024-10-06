<template>
  <div class="flex h-screen overflow-hidden">
    <!-- Toggle Button for Sidebar (Visible on Mobile) -->
    <button
      @click="toggleSidebar"
      class="absolute top-4 left-4 bg-blue-500 text-white p-2 rounded-md z-20 lg:hidden"
    >
      <!-- SVG for Menu Icon -->
      <svg
        class="w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>

    <!-- Sidebar -->
    <div
      :class="[
        'fixed inset-y-0 left-0 w-64 bg-blue-600 text-white shadow-lg transform lg:relative lg:translate-x-0 transition-transform',
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      ]"
      class="flex flex-col h-full"
    >
      <div class="p-2">
        <!-- CRM Система заголовок -->
        <h1 class="text-xl font-bold mb-8 flex justify-center items-center h-16">CRM система</h1>
      </div>
      <div class="flex flex-col h-full relative">
        <!-- Список навигации -->
        <nav class="flex-grow">
          <ul class="space-y-0">
            <li class="w-full">
              <router-link
                to="/"
                class="flex items-center py-4 px-4 w-full border-b border-white hover:bg-blue-500 transition duration-200"
                active-class="bg-blue-700"
                @click="closeSidebar"
              >
                <svg
                  class="w-6 h-6 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                </svg>
                Заявки
              </router-link>
            </li>
            <li class="w-full">
              <router-link
                to="/events"
                class="flex items-center py-4 px-4 w-full border-b border-white hover:bg-blue-500 transition duration-200"
                active-class="bg-blue-700"
                @click="closeSidebar"
              >
                <svg
                  class="w-6 h-6 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M8 2v4" />
                  <path d="M16 2v4" />
                  <rect width="18" height="18" x="3" y="4" rx="2" />
                  <path d="M3 10h18" />
                </svg>
                Мероприятия
              </router-link>
            </li>
            <li class="w-full">
              <router-link
                to="/students"
                class="flex items-center py-4 px-4 w-full border-b border-white hover:bg-blue-500 transition duration-200"
                active-class="bg-blue-700"
                @click="closeSidebar"
              >
                <svg
                  class="w-6 h-6 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M18 21a8 8 0 0 0-16 0" />
                  <circle cx="10" cy="8" r="5" />
                  <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
                </svg>
                Студенты
              </router-link>
            </li>
            <li class="w-full">
              <router-link
                to="/analytics"
                class="flex items-center py-4 px-4 w-full border-b border-white hover:bg-blue-500 transition duration-200"
                active-class="bg-blue-700"
                @click="closeSidebar"
              >
                <svg
                  class="w-6 h-6 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"
                  />
                  <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
                </svg>
                Аналитика
              </router-link>
            </li>
            <li class="w-full">
              <router-link
                to="/settings"
                class="flex items-center py-4 px-4 w-full hover:bg-blue-500 transition duration-200"
                active-class="bg-blue-700"
                @click="closeSidebar"
              >
                <svg
                  class="w-6 h-6 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
                  />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                Настройки
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <!-- Main content -->
    <div class="w-full flex flex-col mx-0 px-0">
      <div
        class="w-full bg-gray-100 py-4 px-6 flex flex-col lg:flex-row justify-between items-center shadow-md mx-0 px-0 space-y-2 lg:space-y-0"
      >
        <h2 class="text-2xl font-bold text-gray-800 pl-4 sm:pl-8">
          {{ pageTitle }}
        </h2>

        <!-- User info -->
        <div
          :class="[isSidebarOpen ? 'hidden lg:flex' : 'flex']"
          class="flex items-center space-x-2 lg:space-x-4"
        >
          <!-- Notification bell icon -->
          <button class="relative">
            <svg
              class="w-6 h-6 text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
            </svg>
            <!-- Notification badge -->
            <span class="absolute top-0 right-0 w-2 h-2 bg-red-600 rounded-full"></span>
          </button>

          <!-- User name -->
          <div class="flex items-center space-x-2 border-l border-gray-300 pl-4">
            <span class="text-gray-800 whitespace-nowrap">Далиба Богдан</span>
          </div>

          <!-- Logout button with SVG icon -->
          <button class="p-2 border-l">
            <svg
              class="w-6 h-6 text-gray-600 hover:text-red-600"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" x2="9" y1="12" y2="12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Main page content -->
      <div class="p-6 flex-grow bg-white">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSidebarOpen: false // State to track sidebar visibility
    }
  },
  computed: {
    pageTitle() {
      // Получаем текущее имя маршрута, которое будет отображаться в заголовке
      const routeName = this.$route.name
      switch (routeName) {
        case 'Requests':
          return 'Заявки'
        case 'Events':
          return 'Мероприятия'
        case 'Analytics':
          return 'Аналитика'
        case 'Settings':
          return 'Настройки'
        default:
          return 'CRM Система'
        case 'Students':
          return 'Студенты'
      }
    }
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen
    },
    closeSidebar() {
      this.isSidebarOpen = false // Закрываем слайдер при выборе страницы
    }
  }
}
</script>
