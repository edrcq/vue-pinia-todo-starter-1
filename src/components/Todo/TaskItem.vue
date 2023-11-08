<script setup lang="ts">
import { useTodoStore } from '@/stores/todos';
import type { Task } from '@/types/Todo.type';
defineProps<Task>()

const todoStore = useTodoStore()

</script>

<template>
    <div :class="{ 'task-done': done }">
        <span>{{ label }}</span>
        <button
            @click="todoStore.doWithId(id)"
            class="px-2 mx-4 bg-yellow-200"
        >Done</button>
        <button
            @click="todoStore.removeWithId(id)"
            class="px-2 mx-4 bg-red-400"
        >Delete</button>
    </div>
</template>

<style scoped>
.task-done {
    text-decoration: line-through;
}
</style>
