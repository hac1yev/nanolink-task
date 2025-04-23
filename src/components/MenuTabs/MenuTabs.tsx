import { useState } from "react";
import './MenuTabs.css';

const MENUTABS = ['Live','Startlist','Schedule','Results','Medals']; 

const MenuTabs = () => {
    const [activeTab,setActiveTab] = useState('Live');

    const handleActive = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 my-14">
            <ul className="menu-tabs flex overflow-x-auto">
                {MENUTABS.map((tab,index) => (
                    <li 
                        className="me-2 w-1/5 flex justify-center items-center gap-1 text-xl text-center font-thin text-white cursor-pointer transition-all duration-300 overflow-hidden" 
                        onClick={handleActive.bind(null, tab)}
                        key={index} 
                    >
                        <span className={activeTab === tab 
                            ? "flex items-center w-full justify-center p-4 border-b-2 border-blue-600 rounded-t-lg active dark:border-blue-500"
                            : "flex items-center w-full justify-center p-4 border-b-2 active border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                        }>
                            {tab}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MenuTabs;