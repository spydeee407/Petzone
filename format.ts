export const CURRENCY = (import.meta.env.VITE_CURRENCY as string | undefined) ?? '$'
export const money = (n: number) => `${CURRENCY}${Number(n).toFixed(2)}`
export const WHATSAPP = ((import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined) ?? '').replace(/\D/g, '')
export const dateTime = (s: string) => new Date(s).toLocaleString()
