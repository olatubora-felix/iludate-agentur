import React from 'react'
import { RxInstagramLogo } from 'react-icons/rx'
import { ImFacebook } from 'react-icons/im'
import { BsSnapchat } from 'react-icons/bs'

export const Vcard = () => {
  return (
    <main className="flex-col justify-center border-[1px] border-gray-500 p-6 max-w-[60%] min-h-[50vh] flex sm:flex-row items-center gap-6 m-auto my-[5rem]">
      <section className="w-[55%]">
        <h1 className="text-2xl text-red-900 uppercase font-serif font-bold mb-8">
          Iludate-Agentur
        </h1>
        <div className="flex items-center gap-3">
          <div className="flex flex-col justify-center items-center">
            <RxInstagramLogo className="text-white bg-red-900 rounded-full text-[1.5rem] p-[0.2rem]" />
            <p className="text-[0.7rem] font-semibold">Instagram</p>
            <span className="text-[0.6rem] font-light">username</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <ImFacebook className="text-white bg-red-900 rounded-full text-[1.5rem] p-[0.2rem]" />
            <p className="text-[0.7rem] font-semibold">Facebook</p>
            <span className="text-[0.6rem] font-light">username</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <BsSnapchat className="text-white bg-red-900 rounded-full text-[1.5rem] p-[0.2rem]" />
            <p className="text-[0.7rem] font-semibold">Snapchat</p>
            <span className="text-[0.6rem] font-light">username</span>
          </div>
        </div>
      </section>
      <section>
        <div className="grid grid-cols-2 justify-items-start">
          <div>
            <span className="text-xs">Name</span>
            <h2 className="uppercase font-semibold">Emery</h2>
          </div>
          <div>
            <span className="text-xs">Surname</span>
            <h2 className="uppercase font-semibold">Muller</h2>
          </div>
          <div className="col-span-2">
            <span className="text-xs">Phone number</span>
            <p className="font-semibold">0000 123-123 123 45</p>
          </div>
          <div className="col-span-2">
            <span className="text-xs">Email Address</span>
            <p className="font-semibold">emerymodel@gmail.com</p>
          </div>
        </div>
      </section>
    </main>
  )
}
