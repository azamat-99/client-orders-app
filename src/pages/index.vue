<script setup lang="ts">
import FormOrder from '@/components/Form/formOrder.vue';
import Dialog from '@/components/modal/Dialog.vue';
import { useOrderStore } from '@/store/order';
import type { IOrder } from '@/types';
import { resetObject } from '@/utils/utils';
import { Edit, Trash, Trash2 } from 'lucide-vue-next';
import { storeToRefs } from 'pinia';
import { onBeforeMount } from 'vue';

const storeOrder = useOrderStore()
const { categories, countries, dialogs, formOrders, orders } = storeToRefs(storeOrder)
onBeforeMount(() => {
  storeOrder.fetchAllData()
  storeOrder.fetchData('orders')
})
const tableRowClassName = ({
  row,
  rowIndex,
}: {
  row: IOrder
  rowIndex: number
}) => {
  const currentDate = new Date();

  const expire = new Date(row.expireDate);
  const isExpired = expire < currentDate;
  if (isExpired) {
    return 'warning-row'
  }
  return ''
}
const beforeAdd = () => {
  resetObject(formOrders.value)
  dialogs.value.isAdd = true
}
const beforeEdit = (row: IOrder) => {
  resetObject(formOrders.value)
  Object.assign(formOrders.value, row)
  dialogs.value.isUpdate = true
}
const beforeDelete = (row:IOrder) => {
  storeOrder.handleSubmit('orders','DELETE',row)
}
</script>

<template>
  <div class="container border rounded-lg">
    <div class="flex items-center px-3 py-3 justify-between w-full">
      <h1 class="font-semibold font-lg">Заказы</h1>
      <ElButton @click="beforeAdd" type="primary">Добавить</ElButton>
      <Dialog width="700" v-model="dialogs.isAdd" title="Добавить заказ">
        <template #content>
          <FormOrder @submit="storeOrder.handleSubmit('orders', 'POST', formOrders)" />
        </template>
      </Dialog>
    </div>
    <el-table :data="orders" :row-class-name="tableRowClassName"
    height="600"
      header-cell-class-name="!bg-gray1 overf text-text !border-y header_cell">
      <el-table-column label="Фамилия" prop="lastname"> </el-table-column>
      <el-table-column width="150" label="Электронная почта" prop="email"> </el-table-column>
      <el-table-column label="Телефон" prop="phone"> </el-table-column>
      <el-table-column label="Откуда" prop="from"> </el-table-column>
      <el-table-column label="Куда" prop="to"> </el-table-column>
      <el-table-column label="Название товара" prop="goodname"> </el-table-column>
      <el-table-column label="Категория товара" prop="goodCategory"> </el-table-column>
      <el-table-column label="Дата заказа" prop="date"> </el-table-column>
      <el-table-column label="Дата доставки" prop="expireDate"> </el-table-column>
      <el-table-column label="Действие" prop="action">
        <template #default="scope">
        <div class="flex gap-4">
          <Edit :size="18" @click="beforeEdit(scope.row)" />
          <Trash :size="18" @click="beforeDelete(scope.row)" />
        </div>
        </template>
      </el-table-column>
    </el-table>
    <Dialog width="700" v-model="dialogs.isUpdate" title="Редактировать заказ">
      <template #content>
        <FormOrder @submit="storeOrder.handleSubmit('orders', 'PUT', formOrders)" />
      </template>
    </Dialog>
  </div>
</template>

<style>
.el-table .warning-row {
  --el-table-tr-bg-color: var(--el-color-danger-light-9);
}
</style>
