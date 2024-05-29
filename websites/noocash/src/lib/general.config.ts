import bycrypt from "bcrypt"
export const saltAndHashPassword = (password:string) => {
    return bycrypt.hashSync(password, 10)
}

