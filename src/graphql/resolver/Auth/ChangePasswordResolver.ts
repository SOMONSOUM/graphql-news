import *as bcrypt from "bcryptjs";
import knex from "../../../database/connection";

//TODO: User can change password
export const ChangePasswordMutation = async (_, {password}: { password: string }) => {

  
  const user_id = await knex.table('users').where("id", "=", 1);
  
  const hash = bcrypt.hashSync(password, 12);

  const changePassword = await knex.table("users").update({ password: hash }).where({ id: user_id });
  
  return changePassword > 0;
}