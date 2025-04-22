function App() {
  return (
    <div className="container mx-auto px-10">
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
              <div className="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-table-search-1" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              className="px-4 py-2"
            >
              Apple
            </th>
            <td className="px-4 py-2">Silver</td>
            <td className="px-4 py-2">Bonartsev Aleksandr Bonartsev Aleksandr Bonartsev Aleksandr</td>
            <td className="px-4 py-2">Laptop</td>
            <td className="px-4 py-2">Yes</td>
            <td className="px-4 py-2">Yes</td>
            <td className="px-4 py-2">$2999</td>
          </tr>
          <tr className="border-b dark:border-gray-700 table-custom-border hover:bg-gray-900">
            <td className="w-4 p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-table-search-1" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              className="px-4 py-2"
            >
              Apple
            </th>
            <td className="px-4 py-2">Silver</td>
            <td className="px-4 py-2">Bonartsev Aleksandr Bonartsev Aleksandr Bonartsev Aleksandr</td>
            <td className="px-4 py-2">Laptop</td>
            <td className="px-4 py-2">Yes</td>
            <td className="px-4 py-2">Yes</td>
            <td className="px-4 py-2">$2999</td>
          </tr>
          <tr className="border-b dark:border-gray-700 table-custom-border hover:bg-gray-900">
            <td className="w-4 p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-table-search-1" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              className="px-4 py-2"
            >
              Apple
            </th>
            <td className="px-4 py-2">Silver</td>
            <td className="px-4 py-2">Bonartsev Aleksandr Bonartsev Aleksandr Bonartsev Aleksandr</td>
            <td className="px-4 py-2">Laptop</td>
            <td className="px-4 py-2">Yes</td>
            <td className="px-4 py-2">Yes</td>
            <td className="px-4 py-2">$2999</td>
          </tr>
          <tr className="border-b dark:border-gray-700 table-custom-border hover:bg-gray-900">
            <td className="w-4 p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-table-search-1" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              className="px-4 py-2"
            >
              Apple
            </th>
            <td className="px-4 py-2">Silver</td>
            <td className="px-4 py-2">Bonartsev Aleksandr Bonartsev Aleksandr Bonartsev Aleksandr</td>
            <td className="px-4 py-2">Laptop</td>
            <td className="px-4 py-2">Yes</td>
            <td className="px-4 py-2">Yes</td>
            <td className="px-4 py-2">$2999</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default App;
