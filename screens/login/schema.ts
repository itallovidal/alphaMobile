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

export interface ILoginSchema extends z.infer<typeof loginSchema>{}


export const editUserSchema = z.object({
    facebook: z.string().optional(),
    instagram: z.string().optional(),
    youtube: z.string().optional(),
    linkedin: z.string().optional(),
    siteInstitucional: z.string().optional(),
    senha: z.string({
        required_error: "Por favor, preencha a senha. "
    }).min(6),
    senhaConfirma: z.string({
        required_error: "Por favor, preencha a confirmação."
    }).min(6),
    telefone: z.string({
        required_error: "Por favor, preencha o telefone. "
    }).min(4),
    nome: z.string({
        required_error: "Por favor, preencha o nome. "
    }).min(4),
    partido_nome: z.string({
        required_error: "Por favor, preencha o nome do partido."
    }).min(4),
    partido_sigla: z.string({
        required_error: "Por favor, preenchao a sigla do partido."
    }).min(4),
}).refine(({senha, senhaConfirma})=>{
    return senha === senhaConfirma
}, {
    path: ["senhaConfirma"],
    message: "As senhas não batem."
})

export interface IEditUserSchema extends z.infer<typeof editUserSchema>{}