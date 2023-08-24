<template>
  <transition appear name="slideRight">
    <div v-if="success"
         class="alert alert-success !fixed top-4 right-4 text-white fill-white text-right w-80 !z-[9999]">
      <svg class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"
              stroke-width="2"/>
      </svg>
      <span>{{ message }}</span>
    </div>
    <div v-if="error" class="alert alert-error !fixed top-4 right-4 text-white fill-white text-right w-80 !z-[9999]">
      <svg class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"
              stroke-width="2"/>
      </svg>
      <span>{{ message }}</span>
    </div>
  </transition>

</template>

<script>
export default {
  name: "toast",
  data() {
    return {
      success: false,
      error: false,
      message: ''

    };
  },
  created() {
    this.$store.subscribe((mutation, state) => {

      if (mutation.type === "toast/success") {
        this.message = state.toast.message;
        this.success = true;
        setTimeout(() => {
          this.success = false
        }, 2000)
      }
      if (mutation.type === "toast/error") {
        this.message = state.toast.message;
        this.error = true;
        setTimeout(() => {
          this.error = false
        }, 2000)
      }
    });
  }
}
</script>

<style scoped>
.slideRight-enter-active {
  animation: slideRight .5s ease-in-out;

}

.slideRight-leave-active {
  animation: slideRight reverse 1s ease-in-out;

}

@keyframes slideRight {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}


</style>
