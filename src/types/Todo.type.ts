export interface CreateTask {
    label: string
}

export interface Task extends CreateTask {
    id: number,
    done: boolean,
    createdAt: Date,
}
