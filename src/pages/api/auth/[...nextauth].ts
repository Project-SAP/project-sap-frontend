import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import Config from './../../../utils/config';

const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt',
    },
    providers: [
        CredentialsProvider({
            type: 'credentials',
            credentials: {},
            async authorize(credentials, req) {
                const { email, password } = credentials as {
                    email: string;
                    password: string;
                };
                // perform you login logic
                // find out user from db
                const backendURL = Config.BASE_API_PATH;

                console.log(backendURL);

                const res = await fetch(`${backendURL}/auth/login`, {
                    method: 'POST',
                    body: JSON.stringify({
                        email,
                        password,
                    }),
                    headers: {
                        'content-type': 'application/json',
                    },
                });


                // if authentication fails, an error is returned, else a token
                const user = await res.json();
                console.log(user);

                if (user.error) {
                    throw new Error('Email or password incorrect.');
                } else {
                    // To bypass typescript as we can not access 'user.token' in the callback
                    user.id = user.token;
                    user.email = email;
                }

                // if everything is fine
                return user;
            },
        }),
    ],
    pages: {
        signIn: '/login',
        // error: '/auth/error',
        // signOut: '/auth/signout'
    },
    callbacks: {
        async jwt(params) {
            console.log('jwt', params.user);
            if (params.user?.id) {
                params.token.id = params.user.id;
                params.token.email = params.user.email;
            }
            return params.token;
        },
    },
};

export default NextAuth(authOptions);
