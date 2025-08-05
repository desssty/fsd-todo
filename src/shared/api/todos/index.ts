import { httpClient } from "../http-client";
import type { QueryParams, Todo } from "./model";

const SLUG = "todos";

export function getTodo(params: QueryParams) {
  return httpClient.get(SLUG, { searchParams: params }).json<Todo[]>();
}

export function getTodoById(id: string) {
  return httpClient.get(`${SLUG}/${id}`).json<Todo>();
}

export function updateTodo(todo: Todo) {
  return httpClient.put(`${SLUG}/${todo.id}`, { json: todo }).json<Todo>();
}
