<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>VueJS ile gelen Directive Tanımları</h3>
        <p v-text="'Deneme yanılma metodu her zaman iyidir!'"></p>
        <p v-html="'<strong>Bu da v-html</strong>'"></p>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Custom Directive</h3>
        <p v-color:background.delay="'green'">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
          consequatur dolorum
          eum ex expedita, hic
          ipsa iste libero nam natus nobis nostrum odit omnis quae quis quisquam recusandae similique suscipit.</p>
        <p v-color.delay="'red'">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequatur
          dolorum
          eum ex expedita, hic
          ipsa iste libero nam natus nobis nostrum odit omnis quae quis quisquam recusandae similique suscipit.</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  directives: {
    'color': {
      bind(el, binding, vnode) {

        if (binding.modifiers['delay']) {

          setTimeout(() => {
            if (binding.arg == "background") {
              el.style.backgroundColor = binding.value
            } else {
              el.style.color = binding.value
            }
          }, 2500)

        } else {
          if (binding.arg == "background") {
            el.style.backgroundColor = binding.value
          } else {
            el.style.color = binding.value
          }
        }
      }
    }
  }
}
</script>

<style>

</style>
