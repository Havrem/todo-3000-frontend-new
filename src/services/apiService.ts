import { auth } from "./firebaseService";
import { isErrorResponse } from "../utils/guards";
import { ApiError } from "../errors/error";

const BASE_URL = import.meta.env.VITE_API_URL;

//Takes in a path and a config object. In the config object the method, headers and body is defined. Requestinit is an object supplied/defined from Typescript itself, provides compile-time type-checking for objects being passed to the function.
async function request<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const token = await auth.currentUser?.getIdToken();

  //Creates a javascript object with this as a property. HeadersInit allows plain objects as long as both key and values is string type?
  const headers: HeadersInit = {
    ... (options.method !== "GET" && {"Content-Type" : 'application/json'}), //Need === instead of == to compare value AND type.
    ... (token &&  {"Authorization": `Bearer ${token}`}),
    ...options.headers
  }

  try { //Fetch might throw errors before it hits the backend which would cause code not to reach !res.ok, so there needs to be a two bucket system.
    const res = await fetch(`${BASE_URL}${path}`, {
      ...options, //Method, body etc...
      headers
    });
    const text = await res.text();
    let data: T | null = null;

    try {
      data = text ? JSON.parse(text) : null;
    } catch {
      data = null;
    }
    
    if (!res.ok) {
      if(isErrorResponse(data)) {
        throw new ApiError(data);
      } else {
        throw new Error("Unexpected error response"); //TODO: These errors are not being caught and handled by caller properly.
      }
    }

    return data as T;
  } catch (err) {
    if (err instanceof ApiError) {
      throw err;
    } else {
      throw new Error("Unknown error");
    }
  }
}

function get<T>(path: string): Promise<T[]> {
  return request(path, {
    method: "GET"
  });
}

function post<T>(path: string, body: unknown): Promise<T> {
  return request(path, {
    method: "POST",
    body: JSON.stringify(body)
  });
}

function put<T>(path: string, body: unknown): Promise<T> {
  return request(path, {
    method: "PUT",
    body: JSON.stringify(body)
  });
}

function del(path: string): Promise<void> {
  return request(path, {
    method: "DELETE",
  });
}

export const apiService = {
  get,
  post,
  put,
  del
}