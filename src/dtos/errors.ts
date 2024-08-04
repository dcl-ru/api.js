import {z} from 'zod';

export const APIErrorSchema = z.object({
    code: z.coerce.number(),
    error: z.string(),
});

export type APIErrorType = z.infer<typeof APIErrorSchema>;

