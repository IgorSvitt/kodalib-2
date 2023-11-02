<script>
import {ref} from 'vue';
import {onBeforeRouteLeave} from 'vue-router';

export default {
  setup() {
    const progress = ref(0);

    onBeforeRouteLeave(async (to, from, next) => {
      await simulateLoading()
      next();
    })

    const simulateLoading = async () => {
      for (let i = 0; i <= 90; i++) {
        setTimeout(() => {
          progress.value = i;
        }, i * 40);
      }
    }

    return {
      progress,
    };
  },
};
</script>


<template>
  <div class="progress-bar" :style="{ width: progress + '%' }"></div>
</template>

<style scoped>
.progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  height: 5px;
  background-color: #FF971D;
  width: 0;
  transition: width 0.3s;
  z-index: 12;
}
</style>
