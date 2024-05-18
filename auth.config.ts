import type { NextAuthConfig } from "next-auth";
import credentials from "next-auth/providers/credentials";

import bcrypt from "bcryptjs";

import { LoginSchema } from "./schemas";
// import { getUserByEmail } from "./data/user";

export default {
    providers: [
        credentials({
            async authorize(credentials) {
                const validatedFields = LoginSchema.safeParse(credentials);

                if (validatedFields.success) {
                    // const { username, password } = validatedFields.data;

                    // // const user = await getUserByEmail(username);
                    // if (!user || !user.password) return null;

                    // const passwordsMatch = await bcrypt.compare(
                    //     password,
                    //     user.password,
                    // );

                    // if (passwordsMatch) return user;
                }

                return null;
            }
        })
    ],
} satisfies NextAuthConfig