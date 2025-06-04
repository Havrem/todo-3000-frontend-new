import type { ErrorDetail, ErrorResponse } from "../types/api"

export function isErrorDetail(data: any): data is ErrorDetail {
    return (
        typeof data.code === "string" &&
        typeof data.message === "string" &&
        typeof data.location === "string" &&
        typeof data.locationType === "string"
    );
}

export function isErrorResponse(data: any): data is ErrorResponse {
    return (
        typeof data.code === "number" &&
        typeof data.message === "string" &&
        Array.isArray(data.errors) &&
        data.errors.every(isErrorDetail));
}