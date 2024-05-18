
import * as z from "zod";

export const LoginSchema = z.object({
    username: z.string().email({
        message: "Email is required"
    }),
    password: z.string().min(1, {
        message: "Password is required"
    }),
});

export const RegisterSchema = z.object({
    username: z.string().email({
        message: "Email is required"
    }),
    password: z.string().min(6, {
        message: "Password must contain at least 6 characters"
    }),
});