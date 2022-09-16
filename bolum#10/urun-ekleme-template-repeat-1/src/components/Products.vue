<template>
  <div v-if="products.length > 0">
    <h3 class="text-center">Eklenen Ürünlerin Listesi</h3>
    <hr>
    <div class="row product-container">
      <product v-for="product in products">
        <img class="card-img-top"
             :src="product.selectedImage "
             :alt="product.title">
        <div class="card-body">
          <h5 class="card-title">{{ product.title }}</h5>
          <small>
            <strong>Adet : </strong> {{ product.count }}
          </small>
          <br>
          <small>
            <strong>Fiyat : </strong> {{ product.price }}
          </small>
          <br>
          <small>
            <strong>Tutar : </strong> {{ product.totalPrice }}
          </small>
        </div>
      </product>
    </div>
  </div>
  <div v-else>
    <h3 class="text-danger text-center">There is no any products! Please add some products.</h3>
  </div>
</template>


<script>
import Product from "./Product";
import {eventBus} from "../main"

export default {
  data: function () {
    return {
      products: [],
    }
  },
  components: {Product},
  created() {
    eventBus.$on("newProductAdded", (val) => {

      if (this.products.length < 10) {
        this.products.push(val)
        eventBus.$emit('updateCount', this.products.length)
      } else
        alert('Daha fazla ürün ekleyemezsiniz.')
    })
  }
}
</script>