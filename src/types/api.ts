export interface ErrorResponse {
    code: number;
    message: string;
    errors: ErrorDetail[];
}

export interface ErrorDetail {
    code: number;
    message: string;
    location: string;
    locationType: string;
}

export interface CreateTodoRequest {
    title: string;
    description?: string;
    due?: string; //Must make sure the date passed is correctly formatted later, seems to be libraries for this that might be nicer than customized alternative.
}

export interface UpdateTodoRequest {
    title?: string;
    description?: string;
    due?: string;
    completed?: boolean;
}