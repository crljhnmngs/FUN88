import React,{ memo} from 'react'
import { IoMdClose } from "react-icons/io";
import { ReactComponent as Filter } from '../assets/icons/filter.svg';
import { useSelector } from 'react-redux';
import { selectGameProviders } from '../redux/gameProviderSlice';
import { GameProvider, ProviderModalProps } from '../types';

const GameProviderModal = memo(({ isOpen, onClose, title, onProviderSelect}: ProviderModalProps) => {
    const gameProviders = useSelector(selectGameProviders);

    if (!isOpen) return null; 

    return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end z-50">
                <div className="bg-white w-maxWidth h-[75%] max-h-[75vh] shadow-lg relative">
                    <div className='h-[8%] bg-primary w-full'>
                        <button 
                            onClick={onClose} 
                            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                        >
                            <IoMdClose className='size-7 text-white'></IoMdClose>
                        </button>
                        <div className='flex h-full items-center ml-3 gap-2'>
                            <Filter
                            className='w-5'
                            style={{ stroke:'#FFFFFF' }}
                        />
                        <h2 className="text-sm mt-1 mb-2 text-white">{title}</h2>
                        <div className='w-10 h-5 border border-white rounded-lg flex items-center justify-center'>
                            <p className='text-xs text-white'>{gameProviders.length}</p>
                        </div>
                        </div>
                    </div>
                    <div className='h-auto max-h-[92%] w-full flex flex-wrap items-center justify-center gap-3 pt-2'>
                        {gameProviders.map((e: GameProvider, i: number) => (
                            <div 
                            className='h-10 w-44 flex items-center justify-center rounded-sm bg-[#F2F2FA] cursor-pointer'
                            key={i}
                            onClick={() => {
                                onProviderSelect(e.name);
                                onClose();
                            }}
                            >
                                <img src={e.img} className='w-20'  alt="Provider Logo" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
});

export default GameProviderModal;