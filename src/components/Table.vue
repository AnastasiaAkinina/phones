<script setup lang="ts">
import { ref } from "vue";
import { iPhone } from "../types/phone";
import DropDownMenu from "./DropDownMenu.vue";

const show = ref<boolean>(true);

const props = defineProps<{
  phones: iPhone[];
  phonesOthers: iPhone[];
}>();

const compareEquals = (phones: iPhone[], field: string) => {
  return (
    phones.map((phone) => phone[field]).filter((f) => f != phones[0][field]).length != 0
  );
};
</script>

<template>
  <table class="container gap-4">
    <thead>
      <tr class="border-0">
        <th></th>
        <td v-for="phone in phones" v-bind:key="phone.id">
          <div class="flex items-center">
            <img class="flex items-center" :src="phone.imageUrl" alt="/" />

            <DropDownMenu :parentPhone="phone" :phones="phonesOthers" />
          </div>
        </td>
      </tr>
      <tr class="bg-white">
        <th class="items-center">
          <input
            class="w-6 h-6 mr-4 cursor-pointer"
            type="checkbox"
            @click="show = !show"
          />Показать различия
        </th>
        <td class="name" v-for="phone in phones" v-bind:key="phone.id">
          {{ phone.name }}
        </td>
      </tr>
    </thead>
    <tbody class="bg-[#F4F9FC]">
      <!-- 2 -->
      <tr class="" v-if="show || compareEquals(phones, 'manufactured')">
        <th class="">Производитель</th>
        <td v-for="phone in phones" v-bind:key="phone.id">{{ phone.manufactured }}</td>
      </tr>
      <!-- 2 -->
      <!-- 3 -->
      <tr v-if="show || compareEquals(phones, 'release')">
        <th>год релиза</th>
        <td v-for="phone in phones" v-bind:key="phone.id">{{ phone.release }}</td>
      </tr>
      <!-- 3 -->
      <!-- 4 -->
      <tr v-if="show || compareEquals(phones, 'diagonal')">
        <th>Диагональ экрана (дюйм)</th>
        <td v-for="phone in phones" v-bind:key="phone.id">{{ phone.diagonal }}</td>
      </tr>
      <!-- 4 -->
      <!-- 5 -->
      <tr v-if="show || compareEquals(phones, 'country')">
        <th class="font-medium">Страна-производитель</th>
        <td v-for="phone in phones" v-bind:key="phone.id">{{ phone.country }}</td>
      </tr>

      <!--5 строка -->
      <!--6 строка -->
      <tr v-if="show || compareEquals(phones, 'memmory')">
        <th>Частота обновления экрана</th>
        <td v-for="phone in phones" v-bind:key="phone.id">{{ phone.memmory }}</td>
      </tr>
      <!--6 строка -->
      <!--7 строка -->
      <tr v-if="show || compareEquals(phones, 'nfs')">
        <th>NFC</th>
        <td v-for="phone in phones" v-bind:key="phone.id">
          <img :src="phone.nfs == 'true' ? '/ok.svg' : '/cross.svg'" alt="/" />
        </td>
      </tr>
      <!--7 строка -->
      <!--8 строка -->
      <tr v-if="show || compareEquals(phones, 'esim')">
        <th>Поддержка eSIM</th>
        <td v-for="phone in phones" v-bind:key="phone.id">
          <img :src="phone.esim == 'true' ? '/ok.svg' : '/cross.svg'" alt="/" />
        </td>
      </tr>
      <!--8 строка -->
      <!--9 строка -->
      <tr v-if="show || compareEquals(phones, 'charger')">
        <th>Поддержка беспроводной зарядки</th>
        <td v-for="phone in phones" v-bind:key="phone.id">
          <img :src="phone.charger == 'true' ? '/ok.svg' : '/cross.svg'" alt="/" />
        </td>
      </tr>
      <!--9 строка -->
      <!--10 строка -->
      <tr v-if="show || compareEquals(phones, 'price')">
        <th>Стоимость</th>
        <td v-for="phone in phones" v-bind:key="phone.id">{{ phone.price }} руб</td>
      </tr>
    </tbody>
  </table>
</template>

<style>
.table * {
  border-bottom: 1px solid #cdcfd2;
}
tr {
  border-bottom: 1px solid #cdcfd2;
}
th {
  width: 30%;
  padding: 40px 0;
  text-align: start;
  color: #a4a9b9;
  text-transform: uppercase;
}

td {
  color: #3b4157;
  font-size: 18px;
  font-weight: 500;
}

@media (max-width: 1300px) {
  .name {
    font-size: 14px;
  }
}

@media (max-width: 1200px) {
  td,
  th {
    font-size: 16px;
  }

  @media (max-width: 1024px) {
    td,
    th {
      font-size: 14px;
    }
  }

  @media (max-width: 913px) {
    th {
      font-size: 12px;
      max-width: 25%;
      margin-left: 20px;
    }
  }
  @media (max-width: 771px) {
    th,
    td {
      font-size: 11px;
    }
    tbody td img {
      width: 20px;
      height: 20px;
    }
    th {
      max-width: 28%;
    }
  }
}

@media (max-width: 481px) {
  th,
  td {
    font-size: 8px;
  }
  thead td img {
    width: 25px;
  }
  th {
    max-width: 28%;
  }
  .name {
    font-size: 8px;
  }
  thead tr th {
    padding: 0;
  }

  th.items-center input {
    width: 12px;
    height: 12px;
    margin-bottom: 8px;
    margin-right: 8px;
  }

  .items-center {
    display: flex;
    flex-direction: column;
    padding: 0;
  }
}
</style>
../types/phone