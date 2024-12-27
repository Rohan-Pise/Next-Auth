import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export const authOptions = {
  providers:[
    GithubProvider({
      clientId: 'Ov23li3ApKPkAbQlerFo',
      clientSecret: '966838511d8054190f6b2b9faf9d614fd5272f9b'
    })
  ]
}

export default NextAuth(authOptions);