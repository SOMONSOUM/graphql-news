import knex from '../../../database/connection'
import * as bycrypt from 'bcryptjs'

const loginUser = async (_: any, { email, password }) => {
  const user = await knex('users').where('email', '=', email).first();

  if (user === undefined) return 'Invalid Email'

  if (bycrypt.compare(password, user.password)) {
    return user.access_token
  } else {
    return 'Invalid Password'
  }
}

export const AuthResolver = {
  Mutation: {
    loginUser,
  },
}
