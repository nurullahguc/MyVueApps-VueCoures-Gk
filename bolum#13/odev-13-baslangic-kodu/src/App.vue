<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h4 class="text-primary">0- Set A Good Test</h4>
        <input type="text" class="form-control" v-model="firstText">
        <hr>

        <h4 class="text-primary">1- Default Test</h4>
        <p>{{ firstText }}</p>
        <hr>
        <!-- Soru 1 -->
        <!-- Girmiş olduğunuz yazıyı tersten yazacak bir Filter tanımı yapınız ve bunu <p> içerisinde uygulayınız -->

        <h4 class="text-primary">2- Reverse Test</h4>
        <!--<p>{{ // firstText | reverseText }}</p>-->
        <p>{{ reversedText }}</p>
        <hr>

        <!-- Soru 2 -->
        <!-- Global bir Filter tanımlayarak size kelime sayısını ve kelimeyi veren bir Filter tanımı yapınız -->
        <!-- Örneğin : "videosinif.com" => videosinif.com (14) Şeklinde çıktı vermelidir -->
        <h4 class="text-primary">3- Test With Text Lenght</h4>
        <!--        <p>{{ firstText | textLenght }}</p>-->
        <p>{{ calculateTextLength }}</p>
        <hr>

        <!-- Soru 3 -->
        <!-- Soru 1 ve 2 deki uygulamaların aynısını Computed Property kullanarak yapınız -->


        <!-- Soru 4 -->
        <!-- 3.Uygulamadaki Computed Property'leri bir Mixin aracılığı ile tanımlayarak tekrardan kodlarınızı düzenleyiniz-->

      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      firstText: "NikoAcedemey.com | Nurullah GÜÇ Tarafından"
    }
  },
  filters: {
    reverseText(val) {
      return val.split("").reverse().join("");
    },
    textLenght(val) {
      return val + " (" + val.length + ")";
    }
  },
  computed: {
    reversedText: function () {
      return this.firstText.split("").reverse().join("")
    },
    calculateTextLength: function () {
      return this.firstText + " (" + this.firstText.length + ")";
    }
  }

}
</script>
<style>

</style>
