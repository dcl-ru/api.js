import { z } from 'zod';
export const APIErrorSchema = z.object({
    code: z.coerce.number(),
    error: z.string(),
});
//# sourceMappingURL=errors.js.map