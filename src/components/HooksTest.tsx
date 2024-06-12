'use client'
import React, { useEffect, useState } from 'react'

interface CountriesProps {
    id: number;
    name: string;
    population: number;
    land_area: number;
    capital: string;
    currency: string;
    flag: string;
}

export default function HooksTest() {
    const [testCountries, setTestCountries] = useState<CountriesProps[]>([])

    useEffect(() => {
        const allCountries = async () => {
            const response = await fetch('https://freetestapi.com/api/v1/countries?limit=15');
            const countryResponse: Array<any> = await response.json();
            if (countryResponse) {
                setTestCountries(countryResponse);
            }
        }
        allCountries();
    }, [])

    return (
        <div className='flex flex-wrap'>
            {testCountries.map(item => (
                <div key={item.id} className='py-3 border-2 border-gray-500 my-4 w-96 mx-4 flex rounded-md bg-white'>
                    <div className='p-5 w-1/3'>
                        <img src={item.flag} className=' rounded-full w-16 h-16' />
                    </div>
                    <div className='w-2/3 px-5'>
                        Name: {item.name}<br />
                        Population: {item.population}<br />
                        Land Area: {item.land_area} <br />
                        Capital: {item.capital} <br />
                        Currency: {item.currency}<br />
                    </div>
                </div>
            )
            )}
        </div>
    )
}
