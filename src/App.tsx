import HeadTitle from "./components/HeadTitle/HeadTitle";
import MenuTabs from "./components/MenuTabs/MenuTabs";
import menu_icon from './assets/menu-icon.svg'
import FilterTabs from "./components/FilterTabs/FilterTabs";
import { useState } from "react";
import ResultTable from "./components/Tables/ResultTable";
import LiveTable from "./components/Tables/LiveTable";
import './components/Tables/Table.css'

function App() {
  const [activeTab,setActiveTab] = useState('Live');
    
  return (  
    <>
      <div className="container mx-auto px-4 md:px-6 lg:px-28">
        <nav className="flex justify-end my-4 md:hidden">
          <img src={menu_icon} alt="menu-icon" />
        </nav>
        <HeadTitle />
        <MenuTabs setActiveTab={setActiveTab} activeTab={activeTab} />
        {activeTab === 'Results' && <FilterTabs />}
        {activeTab === 'Results' && <ResultTable />}
        {activeTab === 'Live' && <LiveTable />}
        
      </div>
    </>
  );
}

export default App;
