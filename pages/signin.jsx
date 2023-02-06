import { Signin } from '@/components/auth/Signin'
import React from 'react'

export default function signin() {
  return (
    <main className=" flex flex-col items-center justify-center mt-24">
      <h1 className="text-2xl text-red-900 uppercase font-serif font-bold">
        Iludate &mdash; Agentur
      </h1>
      <div>
        <p className="text-yellow-600 font-serif uppercase text-center pt-12">
          Log in
        </p>
        <p className="text-gray-500 text-sm text-center  pb-[2rem] font-sans">
          Welcome to Illudate Agentur
        </p>
        <Signin />
      </div>
    </main>
  )
}
