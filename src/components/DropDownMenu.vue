<script setup lang="ts">
import { ref, computed, toRef, defineProps, inject } from "vue";

const isOpen = ref<boolean>(false);

const props = defineProps({
  phones: Array,
  parentPhone: Object,
});

const { changePhones } = inject("phone");
</script>

<template>
  <div class="menu relative cursor-pointer">
    <img
      class="arrow-img ml-2 mt-8"
      @click="isOpen = !isOpen"
      src="/phone/arrow.png"
      alt=""
    />
    <div class="sub-menu" v-if="isOpen">
      <input class="w-full mb-5 p-2" type="text" placeholder="Поиск" />
      <div class="flex items-center mb-6" v-for="phone in phones" v-bind:key="phone.id">
        <div @click="changePhones(parentPhone, phone)">
          <img src="/phone/Vector.png" alt="" />
        </div>
        <img class="ml-4 mr-6 w-6 h-12" :src="phone.imageUrl" alt="/" />
        <div>{{ phone.name }}</div>
      </div>
    </div>
  </div>
</template>

<style setup>
.sub-menu {
  position: absolute;
  top: 70px;
  left: -150px;
  width: 350px;
  padding: 20px 10px;
  padding-bottom: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;

  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}

@media (max-width: 481px) {
  img.arrow-img {
    margin: 0;
    width: 25px;
    height: 20px;
    z-index: 3;
  }
}
</style>
