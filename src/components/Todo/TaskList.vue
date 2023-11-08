<script setup lang="ts">
import { useTodoStore } from '@/stores/todos';
import TaskItem from './TaskItem.vue';

const todoStore = useTodoStore()

</script>

<template>
    <div>
        <TaskItem
            v-for="(task, i) in todoStore.tasks"
            :key="i"
            v-bind="task"
        />
    </div>
</template>
