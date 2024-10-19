import React, {useMemo} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { footer } from '../data/footer';
import { setActiveFooter } from '../redux/footerSlice';

export const Footer = () => {
    const dispatch = useDispatch<AppDispatch>();
    const activeFooter = useSelector((state: RootState) => state.footer.activeFooter);

    const FooterData = useMemo(() => {
    return footer;
    }, []);

    const handleFooterClick = (activeFooter: string) => {
        dispatch(setActiveFooter(activeFooter));
    };

    return (
        <div className='w-full h-12 flex gap-2 justify-evenly'>
            {FooterData.map((e, i) => (
                <div 
                className='flex flex-col items-center cursor-pointer' key={i}
                onClick={() => handleFooterClick(e.name)}>
                    <e.icon
                    className={'cursor-pointer text-primary w-5'}
                    style={{ fill: e.name === activeFooter ? '#00A6FF' : '#888888' }}
                    />
                    <p className={`font-normal text-base text-sm ${e.name === activeFooter ? 'text-primary underline' : 'text-base'}`}>{e.name}</p>
                </div>
            ))}
        </div>
    )
}