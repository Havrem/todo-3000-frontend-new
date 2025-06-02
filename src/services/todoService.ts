import type { CreateTodoRequest, UpdateTodoRequest } from "../types/api";
import type { Todo } from "../types/todo";
import { apiService } from "./apiService";

function getTodos(): Promise<Todo[]> {
    return apiService.get("/todos");
}

function createTodo(data: CreateTodoRequest) {
    return apiService.post("/todos", data);
}

function updateTodo(id: number, data: UpdateTodoRequest) {
    return apiService.put(`/todos/${id}`, data);
}

function deleteTodo(id: number) {
    return apiService.del(`/todos/${id}`)
}

export const todoService = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo
}