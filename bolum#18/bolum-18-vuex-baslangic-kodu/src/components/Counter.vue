<template>
  <div>
    <button class="btn btn-success" @click="increaseCounter">+ Arttır</button>
    <button class="btn btn-danger" @click="decreaseCounter">- Azalt</button>
    <hr>
    <button class="btn btn-success" @click="increment">+ Arttır</button>
    <button class="btn btn-danger" @click="decrement">- Azalt</button>
    <hr>
    <button class="btn btn-success" @click="incrementAsync({time: 12})">+ Arttır Async</button>
  </div>
</template>


<script>
import {mapMutations, mapActions} from 'vuex'

export default {
  methods: {
    ...mapMutations([
      "increaseCounter",
      "decreaseCounter"
    ]),

    ...mapActions([
      'increment',
      'incrementAsync',
      'decrement'
    ]),
    // increment(){
    //   this.$store.dispatch('increment')
    // },
    // decrement(){
    //   this.$store.dispatch('decrement')
    // },
    // incrementAsync() {
    //   this.$store.dispatch('incrementAsync')
    // }

    // incrementCounter() {
    //   // this.$emit("counterEvent", 1);
    //   // this.$store.state.counter++
    //   this.$store.commit("increaseCounter")
    // },
    // decrementCounter() {
    //   // this.$emit("counterEvent", -1);
    //   // this.$store.state.counter--
    //   this.$store.commit("decreaseCounter", -1)
    // }
  }
}
</script>

<style>
</style>
