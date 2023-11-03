import {z} from "zod";

export const loginSchema = z.object({
    email: z.string({
        required_error: 'Por favor, preencha o campo nome.'
    }).email({message: "Por favor, insira seu email."}),
    password: z.string({
        required_error: 'Por favor, preencha o campo senha.'
    }).min(6, {message: 'Senha possui mínimo de 6 caracteres.'}),
    loginError: z.any().optional()
})

export interface IFormSchema extends z.infer<typeof loginSchema>{}