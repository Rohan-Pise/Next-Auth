import Image from "next/image";
import {useSession, signIn, signOut} from 'next-auth/react'
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const session = useSession()
  console.log(session);

  if(session.data === null){
    return <button onClick={signIn}>Login</button>
  }

  return (
   <>
   
    <h1>Hello {session?.data?.user?.name} </h1>
    <button onClick={signOut}>Signout </button>

   </>
  );
}
