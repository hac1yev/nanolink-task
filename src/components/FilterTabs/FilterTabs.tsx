import { useReducer, useState } from 'react';
import filterIcon from '../../assets/filter-icon.svg';
import cancel from '../../assets/Cancel.svg';
import './FilterTabs.css';
import { FILTERTABS1, FILTERTABS2, FILTERTABS3, FILTERTABS4 } from '../../data/Tabs.ts';
import filterImg1 from '../../../public/images/live/filter1.svg';
import filterImg2 from '../../../public/images/live/filter2.svg';
import filterImg3 from '../../../public/images/live/filter3.svg';
import filterImg4 from '../../../public/images/live/filter4.svg';
import filterImg5 from '../../../public/images/live/filter5.svg';
import filterImg6 from '../../../public/images/live/filter6.svg';

type FilterType<T> = { 
    activeFilters: T[]; 
    filter1: T, 
    filter2: T, 
    filter3: T, 
    filter4: T 
}

type ActionFilterTypes = 'filter1' | 'filter2' | 'filter3' | 'filter4';

type ActionType =
  | { type: ActionFilterTypes; title: string }
  | { type: 'deleteTab'; tab: string };

function reducer(state: FilterType<string>, action: ActionType) {
    switch (action.type) {
        case 'filter1':
            state.activeFilters[0] = action.title;

            return {
                ...state,
                filter1: action.title
            }    
        case 'filter2': 
            state.activeFilters[1] = action.title;

            return {
                ...state,
                filter2: action.title
            }
        case 'filter3': 
            state.activeFilters[2] = action.title;

            return {
                ...state,
                filter3: action.title
            }
        case 'filter4': 
            state.activeFilters[3] = action.title;
            
            return {
                ...state,
                filter4: action.title
            }
        case 'deleteTab': 
            return {
                ...state,
                activeFilters: state.activeFilters.filter(filter => filter !== action.tab)
            }
    }
}

const FilterTabs = () => {
    const [state, dispatch] = useReducer(reducer, { 
        activeFilters: ['MAG', 'Final', 'Apparatus', 'Seniors'], 
        filter1: 'MAG', 
        filter2: 'Final', 
        filter3: 'Apparatus', 
        filter4: 'Seniors' 
    });
    const [mobileFilter,setMobileFilter] = useState(false);

    const handleActiveTab = (param: { type: ActionFilterTypes, title: string }) => {
        dispatch({ type: param.type, title: param.title });
    };

    const handleMobileFilter = () => {
        setMobileFilter(prev => !prev);
    };  

    const handleDelecteActiveFilter = (tab: string) => {
        dispatch({ type: 'deleteTab', tab })
    };

    return (
        <>
            <div className="row mb-7 md:my-5">
                <div className="hidden md:flex md:items-center md:justify-center md:gap-2 p-0">
                    <div className='flex border min-w-20 border-[#1A1635] rounded-lg'>
                        {FILTERTABS1.map((tab) => (
                            <div 
                                key={tab.id} 
                                className={state.filter1 === tab.title ? 'filter-active md:flex md:items-center md:py-2 md:px-4 lg:py-2 lg:px-3 md:text-sm lg:text-base md:whitespace-nowrap md:text-slate-200 md:cursor-pointer' : 'md:flex md:py-2 md:px-4 lg:py-2 lg:px-3 md:text-sm lg:text-base md:whitespace-nowrap md:text-slate-200 md:cursor-pointer'} 
                                onClick={handleActiveTab.bind(null, { type: 'filter1', title: tab.title })}
                            >
                                {tab.title}
                            </div>
                        ))}
                    </div>
                    <div className='flex border min-w-36 border-[#1A1635] rounded-lg'>
                        {FILTERTABS2.map((tab) => (
                            <div 
                                key={tab.id} 
                                className={state.filter2 === tab.title ? 'filter-active md:flex md:items-center md:py-2 md:px-4 lg:py-2 lg:px-3 md:text-sm lg:text-base md:whitespace-nowrap md:text-slate-200 md:cursor-pointer' : 'md:flex md:py-2 md:px-4 lg:py-2 lg:px-3 md:text-sm lg:text-base md:whitespace-nowrap md:text-slate-200 md:cursor-pointer'}  
                                onClick={handleActiveTab.bind(null, { type: 'filter2', title: tab.title })}>
                                {tab.title}
                            </div>
                        ))}
                    </div>
                    <div className='flex border min-w-36 border-[#1A1635] rounded-lg'>
                        {FILTERTABS3.map((tab) => (
                            <div 
                                key={tab.id} 
                                className={state.filter3 === tab.title ? 'filter-active md:flex md:items-center md:py-2 md:px-4 lg:py-2 lg:px-3 md:text-sm lg:text-base md:whitespace-nowrap md:text-slate-200 md:cursor-pointer' : 'md:flex md:py-2 md:px-4 lg:py-2 lg:px-3 md:text-sm lg:text-base md:whitespace-nowrap md:text-slate-200 md:cursor-pointer'}  
                                onClick={handleActiveTab.bind(null, { type: 'filter3', title: tab.title })}>
                                {tab.title}
                            </div>
                        ))}
                    </div>
                    <div className='flex border min-w-36 border-[#1A1635] rounded-lg'>
                        {FILTERTABS4.map((tab) => (
                            <div 
                                key={tab.id} 
                                className={state.filter4 === tab.title ? 'filter-active md:flex md:items-center md:py-2 md:px-4 lg:py-2 lg:px-3 md:text-sm lg:text-base md:whitespace-nowrap md:text-slate-200 md:cursor-pointer' : 'md:flex md:py-2 md:px-4 lg:py-2 lg:px-3 md:text-sm lg:text-base md:whitespace-nowrap md:text-slate-200 md:cursor-pointer'} 
                                onClick={handleActiveTab.bind(null, { type: 'filter4', title: tab.title })}
                            >
                                {tab.title}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mobile-filter-tabs-row flex flex-col items-end md:hidden">
                    <div className='filter-tab flex items-center justify-center gap-1 w-28 bg-slate-900 py-3 px-8 rounded-md text-base whitespace-nowrap text-slate-200 cursor-pointer text-center mb-4'  onClick={handleMobileFilter}>
                        <img src={filterIcon} alt="filter-icon" />
                        Filter
                    </div>
                    {mobileFilter && <div className='flex justify-start gap-2 flex-wrap w-full'>
                        {state.activeFilters.map((tab, i) => (
                            <span className='flex items-center justify-center text-sm text-white bg-blue-500 rounded-full py-1 px-5 gap-1' key={i}>
                                <img className='w-3 cursor-pointer' src={cancel} alt="cancel" onClick={handleDelecteActiveFilter.bind(null, tab)} />
                                {tab}
                            </span>
                        ))}
                    </div>}
                </div>
            </div>
            <div className='hidden md:flex md:justify-center md:gap-16 md:mt-16 md:mb-20' id='filterImages'>
                <div className='flex justify-center'>
                    <img src={filterImg1} alt="filter1" />
                </div>
                <div className='flex justify-center'>
                    <img src={filterImg2} alt="filter2" />
                </div>
                <div className='flex justify-center'>
                    <img src={filterImg3} alt="filter3" />
                </div>
                <div className='flex justify-center'>
                    <img src={filterImg4} alt="filter4" />
                </div>
                <div className='flex justify-center'>
                    <img src={filterImg5} alt="filter5" />
                </div>
                <div className='flex justify-center'>
                    <img src={filterImg6} alt="filter6" />
                </div>
            </div>
        </>
    );
};

export default FilterTabs;