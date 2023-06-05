'use client'

import Image from "next/image"
import { MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import Avatar from "react-avatar"


const Header = () => {
    return (
        <header className="">
            <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl">
                
                <div
                className="
                absolute
                top-0
                left-0
                w-full
                h-96
                bg-gradient-to-br
                from-purple-600
                to-purple-400
                rounded-b-2xl
                filter
                blur-3xl
                opacity-50
                -z-50
                "
                />

                <div className="flex items-center justify-center">
                    <Image
                        src="/logo.png"
                        alt="Do Work AI Logo"
                        width={50}
                        height={50}
                        className="w-8 md:w-10 md:pb-0 object-contain"
                    />
                    <h1 className="pl-3 text-3xl font-bold">Do Work</h1>
                </div>
                <div className="flex items-center space-x-5 flex-1 justify-end">
                    {/* Search box */}
                    <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial ">
                        <MagnifyingGlassIcon className="w-6 h-6 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="flex-1 outline-none p-2"
                        />
                        <button type="submit" hidden>Search</button>
                    </form>
                    {/* Avatar */}
                    <Avatar name="Sahinur Islam" size="50" round={true} className="ml-2" />
                </div>
            </div>
            <div className="flex items-center justify-center px-5 py-2 md:py-5">
                <p className="flex items-center p-5 text-sm font-light pr-5 shadow-xl rounded-xl w-fit bg-white italic max-w-3xl text-purple-600">
                    <UserCircleIcon className="inline-block h-10 w-10 text-purple-600 mr-1 " />
                    GPT is summarising the your for the day...
                </p>
            </div>
        </header>
    )
}

export default Header