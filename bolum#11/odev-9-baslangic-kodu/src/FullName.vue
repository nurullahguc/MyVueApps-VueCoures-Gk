<template>
  <div>
    <div class="col-md-12">
      <label for="">Ad : </label>
      <input v-model="name" type="text" class="form-control" placeholder="Adınızı giriniz">
    </div>
    <div class="col-md-12">
      <label for="">Soyad : </label>
      <input v-model="surname" type="text" class="form-control" placeholder="Soyadınız giriniz">
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
    }
  }
}
</script>