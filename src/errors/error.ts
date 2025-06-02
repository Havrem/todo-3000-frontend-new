import type { ErrorDetail, ErrorResponse } from "../types/api";

export class ApiError extends Error {
    public code: number;
    public errors: ErrorDetail[];

    constructor(error: ErrorResponse) {
        super(error.message);
        this.name = "ApiError";
        this.code = error.code;
        this.errors = error.errors;
    }
}