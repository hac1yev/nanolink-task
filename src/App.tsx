import HeadTitle from "./components/HeadTitle/HeadTitle";
import MenuTabs from "./components/MenuTabs/MenuTabs";
import menu_icon from './assets/menu-icon.svg'
import FilterTabs from "./components/FilterTabs/FilterTabs";

function App() {
  return (  
    <>
      <div className="container mx-auto px-4 md:px-6 lg:px-28">
        <nav className="flex justify-end my-4 md:hidden">
          <img src={menu_icon} alt="menu-icon" />
        </nav>
        <HeadTitle />
        <MenuTabs />
        <FilterTabs />
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 dark:text-white">
              <tr>
                <th scope="col" className="w-[5%] p-4">
                  Rank
                </th>
                <th scope="col" className="w-[10%] px-4 py-2">
                  Team
                </th>
                <th scope="col" className="w-[5%] px-4 py-2">
                  Bib
                </th>
                <th scope="col" className="w-[40%] px-4 py-2">
                  Name
                </th>
                <th scope="col" className="w-[10%] px-4 py-2">
                  D
                </th>
                <th scope="col" className="w-[10%] px-4 py-2">
                  E
                </th>
                <th scope="col" className="w-[10%] px-4 py-2">
                  Pen
                </th>
                <th scope="col" className="w-[10%] px-4 py-2">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b dark:border-gray-700 table-custom-border hover:bg-gray-900">
                <td className="w-4 p-4">
                  <span 
                      className='flex items-center justify-center bg-sky-600 h-8 w-8 text-white' 
                  >
                      1
                  </span>
                </td>
                <th
                  scope="row"
                  className="px-4 py-2"
                >
                  Apple
                </th>
                <td className="px-4 py-2">Silver</td>
                <td className="px-4 py-2">Bonartsev Aleksandr</td>
                <td className="px-4 py-2">Laptop</td>
                <td className="px-4 py-2">Yes</td>
                <td className="px-4 py-2">Yes</td>
                <td className="px-4 py-2">$2999</td>
              </tr>
              <tr className="border-b dark:border-gray-700 table-custom-border hover:bg-gray-900">
                <td className="w-4 p-4">
                  <span 
                    className='flex items-center justify-center bg-sky-600 h-8 w-8 text-white' 
                  >
                    1
                  </span>
                </td>
                <th
                  scope="row"
                  className="px-4 py-2"
                >
                  Apple
                </th>
                <td className="px-4 py-2">Silver</td>
                <td className="px-4 py-2">Bonartsev Aleksandr</td>
                <td className="px-4 py-2">Laptop</td>
                <td className="px-4 py-2">Yes</td>
                <td className="px-4 py-2">Yes</td>
                <td className="px-4 py-2">$2999</td>
              </tr>
              <tr className="border-b dark:border-gray-700 table-custom-border hover:bg-gray-900">
                <td className="w-4 p-4">
                  <span 
                    className='flex items-center  justify-center bg-sky-600 h-8 w-8 text-white' 
                  >
                    1
                  </span>
                </td>
                <th
                  scope="row"
                  className="px-4 py-2"
                >
                  Apple
                </th>
                <td className="px-4 py-2">Silver</td>
                <td className="px-4 py-2">Bonartsev Aleksandr</td>
                <td className="px-4 py-2">Laptop</td>
                <td className="px-4 py-2">Yes</td>
                <td className="px-4 py-2">Yes</td>
                <td className="px-4 py-2">$2999</td>
              </tr>
              <tr className="border-b dark:border-gray-700 table-custom-border hover:bg-gray-900">
                <td className="w-4 p-4">
                  <span 
                    className='flex items-center justify-center bg-sky-600 h-8 w-8 text-white' 
                  >
                    1
                  </span>
                </td>
                <th
                  scope="row"
                  className="px-4 py-2"
                >
                  Apple
                </th>
                <td className="px-4 py-2">Silver</td>
                <td className="px-4 py-2">Bonartsev Aleksandr</td>
                <td className="px-4 py-2">Laptop</td>
                <td className="px-4 py-2">Yes</td>
                <td className="px-4 py-2">Yes</td>
                <td className="px-4 py-2">$2999</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
