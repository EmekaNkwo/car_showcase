import Link from "next/link";
import { BsCarFrontFill } from "react-icons/bs"

import Button from "./CustomButton";

const Navbar = () => (
    <header className='w-full absolute z-10'>
        <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
            <Link href='/' className='flex justify-center gap-3 items-center'>
                <BsCarFrontFill size={26} className="text-primary-blue" /> <span className="font-semibold text-[22px]">Carhub</span>
            </Link>

            <Button
                title='Sign in'
                btnType='button'
                containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
                textStyles="font-medium"
            />
        </nav>
    </header>
);

export default Navbar;
