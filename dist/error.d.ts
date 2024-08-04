import { APIErrorType } from './dtos/errors';
export default class APIError extends Error {
    readonly code: number;
    constructor(apiError: APIErrorType);
}
//# sourceMappingURL=error.d.ts.map