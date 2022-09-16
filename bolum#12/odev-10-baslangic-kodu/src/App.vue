<template>
  <div class="container">
    <div class="col-md-6 col-md-offset-3">
      <h3>Directive Sınavı</h3>
      <!-- Soru -->
      <!-- Event'leri dinleyecek v-on gibi çalışan bir Directive geliştiriniz. -->
      <!-- Niko'dan El-Cevap -->

      <button v-custom="">Click Me Bitch</button>

    </div>
  </div>
</template>

<script>
export default {
  directives: {
    'custom': {
      bind(el, binding, vnode) {
        
      }
    }
  },
  methods: {
    hello() {
      alert('Hello Bitch!')
    }
  }
}
</script>

<style>
</style>
