<script setup lang="ts">
import { ref, onMounted, provide } from "vue";

import Header from "./components/Header.vue";
import Table from "./components/Table.vue";
import {phonesApi} from "./api/phones";


import axios from "axios";

import { iPhone } from './types/phone'

const phones = ref<iPhone[]>([]);
const phonesOthers = ref<iPhone[]>([]);
const numLength = ref<number>();
const isActive = ref<boolean>(true);
const currentlyActiveItem = ref<number>();



const fetchPhones = async (num: number) => {
  try {
    const { data } = await phonesApi.getPhones(); 
    numLength.value = data.length - 1;
    phones.value = data.slice(0, num);
     phonesOthers.value = data.filter((phone: iPhone) => !phones.value.includes(phone));
  } catch (err) {
    console.log(err);
  }
};

const changePhones = (parentPhone: iPhone, phone: iPhone) => {
  phones.value.splice(phones.value.indexOf(parentPhone), 1, phone);
  phonesOthers.value.splice(phonesOthers.value.indexOf(phone), 1, parentPhone);
};

const onChangeNumber = (event:number) => {
  currentlyActiveItem.value = event;
  fetchPhones(event);
};

onMounted(async () => {
    currentlyActiveItem.value = 3;
  await fetchPhones(3);
});

provide("phone", {
  changePhones
});



</script>

<template>
  <div>
    <Header />
    <div class="title-block container pt-16 flex items-center text-center justify-between">
      <h1 class="title font-bold text-gray_title text-5xl text-[#828286]">Смартфоны</h1>
    <div class="flex"><p class="flex items-center text-center text-m text-[#0D5ADC] tracking-[0.025em]">
          Отобразить товары:
          <ul class="flex p-0 cursor-pointer">
          <li  v-for="n in numLength" :key="n"
            class="ml-3 flex flex-wrap"
            @click="onChangeNumber(n + 1)"
            :class="{ active: n + 1 == currentlyActiveItem }"
          >
            {{ n + 1 }}
          </li>
          </ul>
        </p></div>
        
    </div>
  <Table :phones="phones" :phonesOthers="phonesOthers" />
    
  </div>
</template>
<style scoped>
.title-block {
  margin-bottom: 20px;
}

.active {
  border-bottom: 1px solid #000;
}

@media (max-width: 1200px) {
.title {
  font-size: 2rem;
}
td,
th {
  font-size: 16px;
}

}

@media (max-width: 481px) {
.title {
  display: none;
}


}
</style>
./api/phonesApi./api/phones./types/phone