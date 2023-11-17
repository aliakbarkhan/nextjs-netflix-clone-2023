import NextAuth from "next-auth/next";
import GithubProvider from 'next-auth/providers/github'

const authOptions = {
    providers: [
        GithubProvider(
            {
                clientId: 'Iv1.5f6a69caf6ca2c57',
                clientSecret: '78e0abdb36e94ccdc323087785d29de7ab866f05'
            }
        )
    ],
    callbacks: {
        async session({ session, token, user }) {
            session.user.username = session?.user?.name
        .split(" ")
        .join("")
        .toLocaleLowerCase();

            session.user.uid = token.sub 

            return session

        }
    },
    secret: "default_secret_key"
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}