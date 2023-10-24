"use client";

import { useState } from "react";
import Image from "next/image";

import { calculateCarRent, generateCarImageUrl } from "@/utils";
import { CarProps } from "@/types";
import CustomButton from "./CustomButton";
import CarDetails from "./CarDetails";

import { AiOutlineDoubleRight } from "react-icons/ai"
import { RiSteering2Fill } from "react-icons/ri"
import { FaGasPump } from "react-icons/fa6"
import { GiCarWheel } from "react-icons/gi"


interface CarCardProps {
    car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
    const { city_mpg, year, make, model, transmission, drive } = car;

    const [isOpen, setIsOpen] = useState(false);

    const carRent = calculateCarRent(city_mpg, year);

    return (
        <div className="car-card group">
            <div className="car-card__content">
                <h2 className="car-card__content-title">
                    {make} {model}
                </h2>
            </div>

            <p className='flex mt-6 text-[32px] leading-[38px] font-extrabold'>
                <span className='self-start text-[14px] leading-[17px] font-semibold'>$</span>
                {carRent}
                <span className='self-end text-[14px] leading-[17px] font-medium'>/day</span>
            </p>

            <div className='relative w-full h-40 my-3 object-contain'>
                <Image src={generateCarImageUrl(car)} alt='car model' fill priority className='object-contain' />
            </div>

            <div className='relative flex w-full mt-2'>
                <div className='flex group-hover:invisible w-full justify-between text-grey'>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <RiSteering2Fill size={20} />
                        <p className='text-[14px] leading-[17px]'>
                            {transmission === "a" ? "Automatic" : "Manual"}
                        </p>
                    </div>
                    <div className="car-card__icon">
                        <GiCarWheel />
                        <p className="car-card__icon-text">{drive.toUpperCase()}</p>
                    </div>
                    <div className="car-card__icon">
                        <FaGasPump size={20} />
                        <p className="car-card__icon-text">{city_mpg} MPG</p>
                    </div>
                </div>

                <div className="car-card__btn-container">
                    <CustomButton
                        title='View More'
                        containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
                        textStyles='text-white text-[14px] leading-[17px] font-bold'
                        rightIcon={<AiOutlineDoubleRight />}
                        handleClick={() => setIsOpen(true)}
                    />
                </div>
            </div>

            <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />
        </div>
    );
};

export default CarCard;
