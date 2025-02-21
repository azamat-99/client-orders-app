<template>
    <el-form ref="ruleFormRef" style="max-width: 600px; margin: auto;" label-position="top" :model="ruleForm"
        status-icon :rules="rules" label-width="auto" class="demo-ruleForm">
        <el-form-item label="Ady" prop="lastname">
            <el-input v-model="ruleForm.lastname" />
        </el-form-item>
        <el-form-item label="Email" prop="email">
            <el-input v-model="ruleForm.email" />
        </el-form-item>
        <el-form-item label="Telefon belgisi" prop="phone">
            <el-input v-model.number="ruleForm.phone" />
        </el-form-item>
        <el-form-item label="Nirden" prop="fromCountryId">
            <el-select v-model="ruleForm.fromCountryId">
                <el-option v-for="country in countries" :key="country.id" :label="country.name" :value="country.id" />
            </el-select>
        </el-form-item>
        <el-form-item label="Nira" prop="toCountryId">
            <el-select v-model="ruleForm.toCountryId">
                <el-option v-for="country in countries" :key="country.id" :label="country.name" :value="country.id" />
            </el-select>
        </el-form-item>
        <el-form-item label="Yukin ady" prop="goodname">
            <el-input v-model="ruleForm.goodname" />
        </el-form-item>
        <el-form-item label="Yukin gornushi" prop="categoryId">
            <el-select v-model="ruleForm.categoryId">
                <el-option v-for="category in categories" :key="category.id" :label="category.name"
                    :value="category.id" />
            </el-select>
        </el-form-item>
        <el-form-item label="Seneni" prop="date">
            <el-date-picker v-model="ruleForm.date" type="date" style="width: 100%" />
        </el-form-item>
        <el-form-item label="Gutaryan senesi" prop="expireDate">
            <el-date-picker v-model="ruleForm.expireDate" type="date" style="width: 100%" />
        </el-form-item>
        <el-form-item>
            <div class="flex justify-center w-full">

                <el-button type="primary" @click="submitForm(ruleFormRef)">
                    Submit
                </el-button>
                <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
            </div>
        </el-form-item>
    </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { useOrderStore } from '@/store/order'
import { storeToRefs } from 'pinia'
const storeOrder = useOrderStore()
const { formOrders: ruleForm, categories, countries } = storeToRefs(storeOrder)

const ruleFormRef = ref<FormInstance>()


const validatePass = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('Please input'))
    }
    callback()
}


const rules = reactive<FormRules<typeof ruleForm>>({
    lastname: [{ validator: validatePass, trigger: 'blur' }],
    email: [
        {
            required: true,
            message: 'Please input email address',
            trigger: 'blur',
        },
        {
            type: 'email',
            message: 'Please input correct email address',
            trigger: ['blur', 'change'],
        },
    ],
    categoryId: [{ validator: validatePass, trigger: 'blur' }],
    phone: [{ validator: validatePass, trigger: 'blur' }],
    fromCountryId: [
        {
            required: true,
            message: 'Please select',
            trigger: 'change',
        },
    ],
    toCountryId: [
        {
            required: true,
            message: 'Please select',
            trigger: 'change',
        },
    ],
    date: [{ validator: validatePass, trigger: 'blur' }],
    expireDate: [{ validator: validatePass, trigger: 'blur' }],
    goodCategory: [{ validator: validatePass, trigger: 'blur' }],
    goodname: [{ validator: validatePass, trigger: 'blur' }],
})

const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            const category = categories.value.find(cat => cat.id === ruleForm.value.categoryId);
            ruleForm.value.goodCategory = category ? category.name : "Неизвестная категория";
            const from = countries.value.find(cat => cat.id === ruleForm.value.fromCountryId);
            ruleForm.value.from = from ? from.name : "Неизвестная категория";
            const to = countries.value.find(cat => cat.id === ruleForm.value.toCountryId);
            ruleForm.value.to = to ? to.name : "Неизвестная категория";
            emit('submit')
        } else {
            console.log('error submit!')
        }
    })
}

const emit = defineEmits(['submit'])

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}
</script>