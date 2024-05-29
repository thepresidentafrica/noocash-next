"use server";
import bcrypt from "bcrypt";
import { db } from "@/lib";
import { ICredentialInputs } from "@/types/general";

export const getUserByCredentials = async (input: ICredentialInputs) => {
  try {
    const { email, password } = input;
    const user = await db.user.findUnique({
      where: {
        email,
      },
      include: {
        passwordStore: true,
      },
    });
    if (user && user.passwordStore) {
      const correctPassword = bcrypt.compareSync(password, user?.passwordStore.hash);
      if (correctPassword) {
        return user;
      }
      return null;
    }
    return null;
  } catch (error) {}
  return null;
};
