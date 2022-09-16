<template>
  <div class="container">
    <form v-if="!formSubmitStatus">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <!-- Soru 1 -->
          <!-- Aşağıdaki bilgileri içeren bir Üye Ol sayfası geliştiriniz. -->
          <!-- Tam Adı (Ad + Soyad) -->
          <!-- E-mail -->
          <!-- Şifre -->
          <!-- Cinsiyet (Kadın/Erkek) -->

          <!-- Soru 2 -->
          <!-- Üye Ol formu, Submit EDİLMEDİĞİ SÜRECE ekranda gözükmelidir.-->
          <!-- Üye Bilgileri Ekranı ise form Submit EDİLDİKTEN SONRA ekranda gözükecektir -->

          <!-- Soru 3 -->
          <!-- Yukarıdaki uygulamayı düzenleyerek Tam Ad (Ad + Soyad) alanı için bir Form Kontrol Elemanı üretiniz -->

          <h3 class="text-center text-primary">Üye Kayıt Formu</h3>

          <full-name v-model="fullName"></full-name>

          <div class="col-md-12">
            <label for="">Email: </label>
            <input v-model="email" type="text" class="form-control" placeholder="Emailinizi giriniz">
          </div>
          <div style="margin-bottom: 30px;" class="col-md-12">
            <label for="">Şifre: </label>
            <input v-model="password" type="text" class="form-control" placeholder="Şifre giriniz">
          </div>
          <div class="col-md-12 mb-3">
            <label for="">Cinsiyet: </label>
            <input v-model="gender" type="radio" value="Erkek"> Erkek
            <input v-model="gender" type="radio" value="Kadın"> Kadın
          </div>
          <br>
          <br>
          <button @click.prevent="submit" style="width: 100%" class="btn  mt-3 btn-primary">Kayıt Ol</button>


        </div>
      </div>
    </form>
    <div v-else class="row">
      <hr>

      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-info">
          <div class="panel-heading">
            <h4>Girdiğiniz Bilgiler</h4>
          </div>
          <div class="panel-body">
            <p>Tam Ad: {{ fullName }}</p>
            <p>E-mail: {{ email }} </p>
            <p>Şifre: {{ password }}</p>
            <p>Cinsiyet: {{ gender }}</p>
          </div>
        </div>
        <button @click="formSubmitStatus = false" class="btn btn-danger">Bigileri Düzenlemeye Geri Dön <=</button>
      </div>
    </div>
  </div>
</template>

<script>
import fullName from "./FullName";

export default {
  components: {
    fullName
  },
  data: function () {
    return {
      // name: '',
      // surname: '',
      fullName: '',
      email: '',
      password: '',
      gender: '',
      formSubmitStatus: false,
    }
  },
  methods: {
    submit() {
      this.formSubmitStatus = true
    }
  }
}
</script>

<style>
</style>
