import React, {useMemo} from 'react'
import { footer } from '../data/footer';

export const Footer = () => {
    const FooterData = useMemo(() => {
    return footer;
    }, []);
    return (
        <div className='w-full h-12 flex gap-2 justify-evenly'>
            {FooterData.map((e, i) => (
                <div className='flex flex-col items-center cursor-pointer' key={i}>
                    <e.icon
                    className={'cursor-pointer text-primary w-5'}
                    style={{ fill: '#00A6FF' }} // #888888 Unactive color
                    />
                    <p className='font-normal text-base text-sm'>{e.name}</p>
                </div>
            ))}
        </div>
    )
}
