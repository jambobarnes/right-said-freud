/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'

export default function Example() {
    return (
        <div className="relative bg-white">
            <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
                <div>
                    <a href="#" className="flex">
                        <span className="sr-only">Right Said Freud</span>
                        <img
                            className="h-16 w-auto sm:h-16"
                            src="logo.svg"
                            alt=""
                        />
                    </a>
                </div>
                <div className="-mr-2 -my-2 md:hidden">
                    <a
                        href="#"
                        className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-2xl font-medium text-white bg-freud-orange hover:bg-black"
                    >
                        LISTEN NOW
                    </a>
                </div>
                <div className="hidden md:flex-1 md:flex md:items-end md:justify-end">
                    
                        <a
                            href="#"
                            className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-2xl font-medium text-white bg-freud-orange hover:bg-black"
                        >
                            LISTEN NOW
                        </a>
                    
                </div>
            </div>
        </div>
    )
}
