import { Hono, type Context } from 'hono'
import { createMiddleware } from 'hono/factory'
import { verify } from 'hono/jwt'

const JWT_SECRET = process.env.JWT_SECRET! 
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1d'

export const signUp = async (c: Context) => {
  
}