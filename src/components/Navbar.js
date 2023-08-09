import { useState } from 'react'
import Logo from '../assets/logo.png'

export default function Navbar() {
    const [IsBurgerOpen, setBurgerOpen] = useState(false)

    return (
        <div className="bg-white h-16 py-3 px-6 flex items-center fixed w-full z-[9999]">
            <div className="flex-1 ">
                <img src={Logo} alt="logo" />
            </div>
            <div className="flex-none">

                {!IsBurgerOpen &&
                    <div className="sm:hidden space-y-1" onClick={() => setBurgerOpen((prev) => !prev)} >
                        <span className="block h-1 w-6 bg-gray-600"></span>
                        <span className="block h-1 w-6 bg-gray-600"></span>
                        <span className="block h-1 w-6 bg-gray-600"></span>
                    </div>
                }

            </div>
        </div>
    )
}