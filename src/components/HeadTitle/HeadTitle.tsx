import { MoveLeft } from 'lucide-react';

const HeadTitle = () => {
    return (
        <div className="gym-header-wrapper flex items-start gap-6 my-14 md:mt-20 md:mb-14">
            <MoveLeft className='text-white w-8 h-8 md:w-8 md:h-8 lg:w-10 lg:h-10' />
            <div className="gap-4 flex flex-col">
                <h1 className='text-white mb-0 font-normal text-xl sm:text-2xl md:text-3xl lg:text-4xl'>FIG ARTISTIC GYMNASTICS WORLD CUP</h1>
                <p className="text-slate-300  text-sm sm:text-base md:text-lg lg:text-xl">
                    Doha, Qatar &nbsp;|&nbsp; 12/03/2023 - 13/02/2023
                </p>
            </div>
        </div>
    );
};

export default HeadTitle;