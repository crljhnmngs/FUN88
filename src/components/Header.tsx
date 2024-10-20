import React from 'react'
import nav from '../assets/icons/nav.webp';
import logo from '../assets/images/logo.webp';
import wallet from '../assets/icons/wallet.webp';
import person from '../assets/icons/person.webp';

export const Header = () => {
  return (
    <div className='w-full h-12 flex justify-between items-center px-3'>
            <div className='h-full flex items-center gap-4'>
                <img src={nav} className='size-5'  alt="NavIcon" />
                <img src={logo} className='w-24'  alt="Logo" />
            </div>
            <div className='h-full flex items-center'>
                <div className='flex gap-2'>
                    <img src={wallet} className='size-5'  alt="WalletIcon" />
                    <p className='font-semibold text-primary pt-[1px] text-base'>$1990.6</p>
                </div>
                <div className="w-[1.8px] h-8 bg-gradient-to-b from-transparent via-[#00A6FF] to-transparent mx-2"></div>
                <img src={person} className='size-5 pt-[1px]'  alt="PersonIcon" />
            </div>
    </div>
  )
}
