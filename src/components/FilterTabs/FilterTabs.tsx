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
            <div className="row mb-5 md:my-5">
                <div className="filter-tabs-row p-0">
                    <div>
                        {FILTERTABS1.map((tab) => (
                            <div 
                                key={tab.id} 
                                className={state.filter1 === tab.title ? 'filter-active' : ''} 
                                onClick={handleActiveTab.bind(null, { type: 'filter1', title: tab.title })}
                            >
                                {tab.title}
                            </div>
                        ))}
                    </div>
                    <div>
                        {FILTERTABS2.map((tab) => (
                            <div 
                                key={tab.id} 
                                className={state.filter2 === tab.title ? 'filter-active' : ''} 
                                onClick={handleActiveTab.bind(null, { type: 'filter2', title: tab.title })}>
                                {tab.title}
                            </div>
                        ))}
                    </div>
                    <div>
                        {FILTERTABS3.map((tab) => (
                            <div 
                                key={tab.id} 
                                className={state.filter3 === tab.title ? 'filter-active' : ''} 
                                onClick={handleActiveTab.bind(null, { type: 'filter3', title: tab.title })}>
                                {tab.title}
                            </div>
                        ))}
                    </div>
                    <div>
                        {FILTERTABS4.map((tab) => (
                            <div 
                                key={tab.id} 
                                className={state.filter4 === tab.title ? 'filter-active' : ''} 
                                onClick={handleActiveTab.bind(null, { type: 'filter4', title: tab.title })}
                            >
                                {tab.title}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mobile-filter-tabs-row">
                    <div className='filter-tab mb-4'  onClick={handleMobileFilter}>
                        <img src={filterIcon} alt="filter-icon" />
                        Filter
                    </div>
                    {mobileFilter && <div className='modile-active-filter-tabs'>
                        {state.activeFilters.map((tab, i) => (
                            <span key={i}>
                                <img src={cancel} alt="cancel" onClick={handleDelecteActiveFilter.bind(null, tab)} />
                                {tab}
                            </span>
                        ))}
                    </div>}
                </div>
            </div>
            <div className='flex justify-center gap-16 mt-16 mb-20' id='filterImages'>
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