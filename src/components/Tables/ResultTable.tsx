import { useEffect, useState } from "react";
import ResultAccordion from "../Accordion/ResultAccordion/ResultAccordion";

const ResultTable = () => {
  const [resultData, setResultData] = useState<ResultDataTypes>([]);

  useEffect(() => {
    (async function () {
      const response = await fetch("result-data.json");
      const data = await response.json();
      setResultData(data.results);
    })();
  }, []);

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table>
          <tr className="result-table-header">
            <td className="table-header-sub">
              <td>Rank</td>
              <td>Team</td>
              <td>Bib</td>
              <td>Name</td>
            </td>
            <td className="table-header-sub">
              <td>D</td>
              <td>E</td>
              <td>Pen</td>
              <td>Total</td>
            </td>
          </tr>
          {resultData &&
            resultData.map((item, i) => (
              <tr className="result-table-body py-5 relative flex justify-between" key={i}>
                <td className="table-body-sub1 w-[40%]">
                  <td>
                    <span
                      className="w-7 h-7 bg-[#0a8bec] flex items-center justify-center"
                    >
                      {item.rank}
                    </span>
                  </td>
                  <td
                    className="flex items-center gap-1"
                    style={{ height: "fit-content", flexDirection: 'row' }}
                  >
                    <img
                      src={item.flag}
                      alt={item.team}
                      className="w-5"
                    />
                    {item.team}
                  </td>
                  <td>{item.bib}</td>
                  <td>{item.name}</td>
                </td>
                <td className="table-body-sub2 w-[40%]">
                  <td>
                    <span>{Intl.NumberFormat("en-US").format(item.d)}</span>
                    <span>{Intl.NumberFormat("en-US").format(item.d)}</span>
                  </td>
                  <td>
                    <span>{Intl.NumberFormat("en-US").format(item.e)}</span>
                    <span>{Intl.NumberFormat("en-US").format(item.e)}</span>
                  </td>
                  <td>
                    <span>{Intl.NumberFormat("en-US").format(item.pen)}</span>
                    <span>{Intl.NumberFormat("en-US").format(item.pen)}</span>
                    <span>{item.score ? "Score" : ""}</span>
                  </td>
                  <td>
                    <span style={item.first_total ? { color: "#FF9C07" } : {}}>
                      {Intl.NumberFormat("en-US").format(item.total)}
                    </span>
                    <span>{Intl.NumberFormat("en-US").format(item.total)}</span>
                    <span style={{ color: "#FF9C07" }}>
                      {Intl.NumberFormat("en-US").format(item.total)}
                    </span>
                  </td>
                </td>
              </tr>
            ))}
        </table>
      </div>
      <ResultAccordion resultData={resultData} />
    </>
  );
};

export default ResultTable;
