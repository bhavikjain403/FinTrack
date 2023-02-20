import passport from 'passport'
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'
import userServices from '../services/userServices'
export const jwtStrategy = new JwtStrategy(
  {
    secretOrKey: process.env.SKEY,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  },
  async (payload: any, done: any) => {
    const userEmail = payload.email
    const foundUser = await userServices.findUserByEmail(userEmail)
    done(null, foundUser)
  }
)
