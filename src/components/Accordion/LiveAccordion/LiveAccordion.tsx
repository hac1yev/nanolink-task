import { ChevronDown } from "lucide-react";
import "./LiveAccordion.css";

const LiveAccordion = ({ liveData }: { liveData: LiveDataTypes }) => {
  return (
    <div className="w-full flex md:hidden mx-auto">
      <div className="w-full flex flex-col gap-4">
        {liveData.map((item,index) => (
          <div className="flex flex-col gap-1 tab w-full overflow-hidden text-white rounded-lg" key={`tab-${index}`}>
            {(!item.dep.go && !item.dep.wait) && <input
              className="absolute opacity-0"
              id={`tab-multi-one-${index + 1}`}
              type={(item.app.wait || item.app.go) ? 'radio' : 'checkbox'}
              name="tabs"
            />}
            <label
              className="flex items-center justify-between bg-[#1A1635] px-3 py-5 sm:p-5 leading-normal cursor-pointer rounded-lg"
              htmlFor={`tab-multi-one-${index + 1}`}
            >
              <div className="flex items-center gap-2">
                <div>
                    <img className="w-100 h-100" src={item.rank} alt="" />
                </div>
                <span style={{ width: "15%" }}>{item.country}</span>
              </div>
              <span className="w-1/4 whitespace-nowrap">{item.name}</span>
              {item.app.score && (
                <span style={{ width: "20%" }}>
                  {Intl.NumberFormat("en-US").format(item.app.score)}
                </span>
              )}
              {item.dep.wait && (
                <div style={{ width: "25%" }}>
                  <span className="live-wait">Wait</span>
                </div>
              )}
              {item.dep.go && (
                <div style={{ width: "20%" }}>
                  <span className="live-go">Go</span>
                </div>
              )}
              {(!item.dep.go && !item.dep.wait) && <ChevronDown className="chevron-down transition-transform duration-300" />}
            </label>

            <div className="tab-content flex flex-col gap-3 overflow-hidden bg-[#1A1635] leading-normal rounded-lg box-border px-4">
              <div className="flex justify-end gap-5 mt-3">
                <span>
                  D: {Intl.NumberFormat("en-US").format(item.dep.d)}
                </span>
                <span>
                  E: {Intl.NumberFormat("en-US").format(item.dep.e)}
                </span>
                <span>P: {item.dep.p}</span>
              </div>
              <div className="flex justify-between">
                <span>App</span>
                {item.app.rank && (
                  <div
                    className="flex items-center justify-between gap-3"
                    style={{ color: "#fff", width: "110px" }}
                  >
                    {Intl.NumberFormat("en-US").format(item.app.score)}
                    <span
                      className="flex items-center justify-center w-7 h-7 bg-blue-500"
                    >
                      {item.app.rank}
                    </span>
                  </div>
                )}
              </div>
              <div className="flex justify-between">
                <span>AA</span>
                {item.aa.rank && (
                  <div
                    className="flex items-center justify-between gap-3"
                    style={{ color: "#fff", width: "110px" }}
                  >
                    {Intl.NumberFormat("en-US").format(item.aa.score)}
                    <span
                      className="flex items-center justify-center w-7 h-7 bg-blue-500"
                    >
                      {item.aa.rank}
                    </span>
                  </div>
                )}
              </div>
              <div className="flex justify-between mb-3">
                <span>App</span>
                {item.app.rank && (
                  <div
                    className="flex items-center justify-between gap-3"
                    style={{ color: "#fff", width: "110px" }}
                  >
                    {Intl.NumberFormat("en-US").format(item.app.score)}
                    <span
                      className="flex items-center justify-center w-7 h-7 bg-blue-500"
                    >
                      {item.app.rank}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveAccordion;