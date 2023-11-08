<script setup lang="ts">
import TaskList from '../components/Todo/TaskList.vue'
import TaskFilter from '../components/Todo/TaskFilter.vue'
import TaskCreate from '../components/Todo/TaskCreate.vue'

</script>

<template>
  <main>
    <TaskCreate class="my-4"/>
    <TaskFilter />
    <TaskList />
  </main>
</template>
