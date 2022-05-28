import knex from '../../../database/connection'
import * as bcrypt from 'bcryptjs'
import { TokenGeneration } from '../../../lib/GenerateToken'

const userList = async () => {
  const users = await knex('users').orderBy('id', 'asc')
  return users
}

const createUser = async (_: any, { data }: any) => {
  if (
    (await(await (await knex('users').where('email', '=', data.email)).length)) <= 0
  ) {
    await knex('users').insert({
      email: data.email,
      username: data.username,
      password: bcrypt.hashSync(data.password, 12),
      phone_number: data.phone_number,
      avatar: data.avatar,
      access_token: TokenGeneration() + '@' + data.username,
    })
    return true
  } else {
    throw 'user already exist'
  }
}

export const UserResolver = {
  Query: {
    userList,
  },
  Mutation: {
    createUser,
  },
}
