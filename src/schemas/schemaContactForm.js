import * as z from 'zod';

// Definir el esquema de validación con zod
export const schemaContactForm = z.object({
  name: z.string().min(1, { message: 'El nombre es requerido' }),
  email: z.string().email({ message: 'Correo electrónico inválido' }),
  message: z.string().min(1, { message: 'El mensaje es requerido' }),
});