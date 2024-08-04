import { z } from 'zod';
export declare const APIErrorSchema: z.ZodObject<{
    code: z.ZodNumber;
    error: z.ZodString;
}, "strip", z.ZodTypeAny, {
    code: number;
    error: string;
}, {
    code: number;
    error: string;
}>;
export type APIErrorType = z.infer<typeof APIErrorSchema>;
//# sourceMappingURL=errors.d.ts.map