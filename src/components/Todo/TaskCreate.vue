<script setup lang="ts">
import type { CreateTask } from '@/types/Todo.type';
import { reactive } from 'vue';
import { useTodoStore } from '@/stores/todos';

const todoStore = useTodoStore()

const newTask = reactive<CreateTask>({
    label: ''
})

const onSubmit = () => {
    if (newTask.label.length > 0) {
        todoStore.create(newTask.label)
        newTask.label = ''
    }
}

</script>

<template>
    <form @submit.prevent="onSubmit">
        <label for="new-task-label">New Task:</label>
        <input
            v-model="newTask.label"
            type="text"
            id="new-task-label"
            class="p-2 bg-gray-200 text-xl"
        >
        <button class="p-2 bg-blue-200 text-xl">Create</button>
    </form>
</template>
