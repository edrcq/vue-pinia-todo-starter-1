import type { Task } from "@/types/Todo.type";
import { defineStore } from "pinia";

interface TodoStoreState {
    tasks: Task[]
}

export const useTodoStore = defineStore('todos', {
    state: (): TodoStoreState => ({
        tasks: []
    }),
    
    actions: {
        create(label: string) {
            const newTask: Task = {
                id: Math.ceil(Math.random() * 1000000000),
                done: false,
                createdAt: new Date(),
                label,
            }
            
            this.tasks.push(newTask)
        },
        
        doWithId(id: number) {
            const index = this.tasks.findIndex(task => task.id === id)
            if (index >= 0) {
                this.doWithIndex(index)
            } else {
                console.log('No task found with ID', id)
            }
        },
        
        doWithIndex(index: number) {
            this.tasks[index].done = !this.tasks[index].done
        },
        
        removeWithId(id: number) {
            const index = this.tasks.findIndex(task => task.id === id)
            if (index >= 0) {
                this.removeWithIndex(index)
            } else {
                console.log('No task found with ID', id)
            }
        },
        
        removeWithIndex(index: number) {
            this.tasks.splice(index, 1)
        },
    }
})
