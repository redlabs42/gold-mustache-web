import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().min(1, "Email é obrigatório").email("Email inválido"),
  password: z.string().min(6, "Mínimo 6 caracteres"),
});

export const signupSchema = z
  .object({
    email: z.string().min(1, "Email é obrigatório").email("Email inválido"),
    password: z.string().min(6, "Mínimo 6 caracteres"),
    confirmPassword: z.string().min(1, "Confirmação é obrigatória"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Senhas não conferem",
    path: ["confirmPassword"],
  });

export const resetSchema = z.object({
  email: z.string().min(1, "Email é obrigatório").email("Email inválido"),
});

export const newPasswordSchema = z
  .object({
    password: z.string().min(6, "Mínimo 6 caracteres"),
    confirmPassword: z.string().min(1, "Confirmação é obrigatória"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Senhas não conferem",
    path: ["confirmPassword"],
  });

export type LoginInput = z.infer<typeof loginSchema>;
export type SignupInput = z.infer<typeof signupSchema>;
export type ResetInput = z.infer<typeof resetSchema>;
export type NewPasswordInput = z.infer<typeof newPasswordSchema>;
