<template>
  <div class="container">
    <div class="or">
      <div class="col-md-12">
        <br>
        <router-view name="header-top"></router-view>
        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>

        <router-view name="header-bottom"></router-view>

      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header"

export default {
  components: {
    appHeader: Header
  }
}
</script>

<style>
.slide-enter{
  opacity: 0;
}
.slide-enter-active{
  animation: slide-in 1s ease-out forwards;
  transition: 0.01s;
}

.slide-leave-active{
  animation: slide-out 1s ease-out forwards;
  transition: opacity .01s;
  opacity: 0;
  position: absolute;
}

@keyframes slide-in {
  from{
    transform: translateY(20px);
  }
  to{
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from{
    transform: translateY(0);
  }
  to{
    transform: translateY(20px);
  }
}
</style>
















