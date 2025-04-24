import { ChevronDown } from "lucide-react";
import "./ResultAccordion.css";

const ResultAccordion = ({ resultData }: { resultData: ResultDataTypes }) => {
  return (
    <div className="w-full flex md:hidden mx-auto">
      <div className="w-full flex flex-col gap-4">
        {resultData.map((item, index) => (
          <div
            className="flex flex-col gap-1 tab w-full overflow-hidden text-white rounded-lg"
            key={`tab-${index}`}
          >
            <input
              className="absolute opacity-0"
              id={`tab-multi-one-${index + 1}`}
              type="checkbox"
              name="tabs"
            />
            <label
              className="flex items-center justify-between bg-[#1A1635] px-3 py-5 sm:p-5 leading-normal cursor-pointer rounded-lg"
              htmlFor={`tab-multi-one-${index + 1}`}
            >
              <div className="flex items-center gap-3 sm:gap-4 w-1/4">
                <span
                  className="w-7 h-7 bg-[#0A8BEC] flex items-center justify-center"
                >
                  {item.rank}
                </span>
                <span>{item.team}</span>
              </div>
              <span className="whitespace-nowrap flex justify-center sm:justify-start w-1/2">{item.name}</span>
              <span className="whitespace-nowrap flex justify-center sm:justify-start w-1/4">{item.bib}</span>
              <ChevronDown className="result-chevron-down transition-transform duration-300" />
            </label>

            <div className="tab-content flex flex-col gap-3 overflow-hidden bg-[#1A1635]  rounded-lg box-border px-4">
              <div className="flex justify-end gap-5 mt-3">
                <span>D: {Intl.NumberFormat("en-US").format(item.d)}</span>
                <span>E: {Intl.NumberFormat("en-US").format(item.e)}</span>
                <span>P: {item.pen}</span>
              </div>
              <div className="flex justify-between">
                <span>App</span>
                <div
                  className="flex items-center justify-between gap-3"
                  style={{ color: "#fff" }}
                >
                  {Intl.NumberFormat("en-US").format(item.total)}
                </div>
              </div>
              <div className="flex justify-between">
                <span>AA</span>
                <div
                  className="flex items-center justify-between gap-3"
                  style={{ color: "#fff" }}
                >
                  {Intl.NumberFormat("en-US").format(item.total)}
                </div>
              </div>
              <div className="flex justify-between mb-3">
                <span>App</span>
                <div
                  className="flex items-center justify-between gap-3"
                  style={{ color: "#fff" }}
                >
                  {Intl.NumberFormat("en-US").format(item.total)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultAccordion;
