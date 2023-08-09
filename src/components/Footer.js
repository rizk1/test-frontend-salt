import Logo from '../assets/logo-white.png'

export default function Footer() {
    return(
        <div className="bg-com-indigo px-4 pt-8 pb-16">
            <img src={Logo} className='mb-6' alt="logo" />
            <div className='bg-white py-8 px-6'>
                <div className='col-span-6'>
                    <select name="location" className='text-com-indigo font-bold w-full rounded-md border px-3 py-2'>
                        <option value="TECHNOLOGY DEPARTMENT">TECHNOLOGY DEPARTMENT</option>
                    </select>
                    <div className='text-com-primary text-md font-primary pr-24 mt-10'>Jl. Lembong No 8 Kel. Braga Kec. Sumur Bandung, Kota Bandung, Jawa Barat</div>
                </div>
            </div>

            <div className='grid mt-12 text-white gap-4 md:flex font-normal'>
                <a href="#">Who We Are</a>
                <a href="#">Our Values</a>
                <a href="#">The Perks</a>
            </div>
        </div>
    )
}