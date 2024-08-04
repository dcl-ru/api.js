export default class APIError extends Error {
    code;
    constructor(apiError) {
        super(apiError.error);
        this.code = apiError.code;
        Error.captureStackTrace(this, APIError);
    }
}
//# sourceMappingURL=error.js.map