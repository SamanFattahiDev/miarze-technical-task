<template>
  <div
    v-if="pages && pages.length > 1"
    class="btn-group w-full flex items-center justify-center"
  >
    <button
      v-if="activePage !== 1"
      :disabled="activePage === 1"
      class="m-3 w-24 h-auto px-4 py-1 flex items-center justify-between disabled:bg-primary bg-primary rounded-full text-white cursor-pointer"
      @click="setNewPage(activePage - 1)"
    >
      <svg
        class="h-6 w-6 ml-1"
        fill="none"
        stroke="currentColor"
        stroke-width="1"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 7l5 5m0 0l-5 5m5-5H6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <span>قبلی</span>
    </button>
    <button
      v-if="pages.length > 3 && activePage > 3"
      :class="
        activePage == 1
          ? 'underline underline-offset-2 rounded-full bg-primary text-white'
          : ''
      "
      class="m-3 w-9 h-9 cursor-pointer"
      @click="setNewPage(1)"
    >
      {{ 1 }}
    </button>
    <span
      v-if="pages.length > 2 && activePage > 2"
      class="m-3 w-9 h-9 cursor-text"
    >
      ...
    </span>
    <button
      v-for="i in filteredPage"
      :key="i"
      :class="
        activePage == i
          ? 'underline underline-offset-2 rounded-full bg-primary text-white'
          : ''
      "
      class="m-3 w-9 h-9 cursor-pointer"
      @click="setNewPage(i)"
    >
      {{ i }}
    </button>
    <span
      v-if="pages.length > 3 && activePage < pages.length - 2"
      class="m-3 w-9 h-9 cursor-text"
    >
      ...
    </span>
    <button
      v-if="pages.length > 3"
      :class="
        activePage == pages.length
          ? 'underline underline-offset-2 rounded-full bg-primary text-white'
          : ''
      "
      class="m-3 w-9 h-9 cursor-pointer"
      @click="setNewPage(pages.length)"
    >
      {{ pages.length }}
    </button>
    <button
      v-if="activePage !== pages.length"

      :disabled="activePage == pages.length"
      class="m-3 w-24 h-auto px-4 py-1 flex items-center justify-between disabled:bg-primary bg-primary rounded-full text-white cursor-pointer"
      @click="setNewPage(activePage + 1)"
    >
      <span>بعدی</span>
      <svg
        class="h-6 w-6 mr-1"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 17l-5-5m0 0l5-5m-5 5h12"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  emits: ["PageChanged"],
  props: {
    totalCount: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      required: true
    },
    activePage: {
      type: [Number, String],
      required: true,
    },
  },
  data() {
    return {
      totalPages: [],
    };
  },
  methods: {
    setNewPage(pageNumber) {
      this.$emit("PageChanged", pageNumber);
    },
  },
  computed: {
    pages() {
      let totalPages = []
      const result = Math.ceil(this.totalCount / this.perPage)
      for (let i = 1; i <= result; i++) {
        totalPages.push(i);
      }
      return totalPages;
    },
    filteredPage() {
      // Okay, idk what's happening here, but im proud of it
      // Half of credit goes to @amoowily
      if (this.pages && this.pages.length > 3) {
        let filteredPaginationArray = [];
        if (this.activePage < 3) {
          // Rendering first 8 pages
          for (let i = 1; i <= 3; i++) {
            filteredPaginationArray.push(i);
          }
        } else if (this.activePage < this.pages.length - 2) {
          // Rendering middle pages
          filteredPaginationArray = [];
          for (let i = this.activePage - 2; i <= this.activePage + 2; i++) {
            filteredPaginationArray.push(i);
          }
        } else {
          // Rendering last pages
          filteredPaginationArray = [];
          for (let i = this.activePage - 3; i <= this.pages.length - 1; i++) {
            filteredPaginationArray.push(i);
          }
        }
        return filteredPaginationArray;
      } else {
        return this.pages;
      }
    },
  },
};
</script>
