<template>
  <div class="progress">
    <div class="progress-bar bg-info" role="progressbar" :style="{width: productCount * 10 + '%'}" aria-valuenow="50"
         aria-valuemin="0"
         aria-valuemax="100">
      {{ productCount }}/10
    </div>
  </div>
</template>


<script>
import {eventBus} from "../main"

export default {
  data: function () {
    return {
      productCount: 0,
    }
  },
  created() {
    eventBus.$on("updateCount", (val) => {
      this.productCount = val
    })
  }
}
</script>