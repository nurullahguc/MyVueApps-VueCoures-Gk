<template>
  <div class="container">
    <h3>User Edit Component</h3>
    <hr>
    <p>
      Ad: {{ $route.query.name }}
    </p>
    <p>Soyad: {{ $route.query.lastName }}</p>
    <button @click="saved = true" class="btn btn-primary">Onayla</button>

    <div style="height: 840px;"></div>
    <p id="data">Buradan benim gelecek bazı bilgilerim olabilir</p>
  </div>
</template>
<script>
export default {
  date() {
    return {
      saved: false
    }
  },
  beforeRouteLeave(to, from, next) {
    if (this.saved)
      next()
    else {
      if (confirm("Tüm bilgileriniz kaybolacak, emin misiniz?"))
        next();
      else
        next(false)
    }
  }
}
</script>
