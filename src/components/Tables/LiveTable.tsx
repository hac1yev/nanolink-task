import { useEffect, useState } from "react";
import './LiveTable.css';
import LiveAccordion from "../Accordion/LiveAccordion/LiveAccordion";

const LiveTable = () => {
    const [liveData,setLiveData] = useState<LiveDataTypes>([]);

    useEffect(() => {   
        (async function() {
            const response = await fetch('live-data.json');        
            const data = await response.json();
            setLiveData(data.lives);
        })()
    }, [])

    return (
        <>
            <table className="mt-4">
                <tr className='w-full my-10'>
                    <div className='w-1/2'>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </div>
                    <div className='live-table-header-sub2'>
                        <th>App</th>
                        <th>AA</th>
                        <th>Team</th>
                    </div>
                </tr>
                {liveData && liveData.map((item,i) => (
                    <tr className='live-table-body pt-5 pb-6' key={i}>
                        <td style={item.inquiry ? { width: '60%' } : {}} className='live-table-body-sub1 flex items-center w-1/2'>
                            <td className="flex items-center" style={item.inquiry ? { width: '33%' } : {}}>
                                {item.inquiry && <span 
                                    className="text-[#FF9C07] text-base lg:text-xl inquiry-submit-text"
                                >
                                    Inquiry Submitted    
                                </span>
                                }
                                <img src={item.rank} alt={item.country} />
                            </td>
                            <td style={item.inquiry ? { width: '12%' } : {}} className='flex flex-row items-center gap-1 inquiry-country'>
                                <img className="live-flag" src={item.flag} alt={item.country} />
                                <span className="live-country">{item.country}</span>
                            </td>
                            <td style={item.inquiry ? { width: '9%' } : {}}>{item.bib}</td>
                            <td style={item.inquiry ? { width: '12%' } : {}} className={item.inquiry ? "inquiry-bib" : "w-1/4"}>{item.name}</td>
                            <td className="live-dep w-2/6">
                                {item.dep.d && <span>D: {Intl.NumberFormat('en-US').format(item.dep.d)}</span>}
                                {item.dep.e && <span>E: {Intl.NumberFormat('en-US').format(item.dep.e)}</span>}
                                {item.dep.p && <span>P: {Intl.NumberFormat('en-US').format(item.dep.p)}</span>}
                                {item.dep.wait && <span className="live-wait">Wait</span>}
                                {item.dep.go && <span className="live-go">Go</span>}
                            </td>
                        </td>
                        <td className='live-table-body-sub2'>
                            <td>
                                {item.app.score && Intl.NumberFormat('en-US').format(item.app.score)}
                                {item.app.rank && <span 
                                    className='flex items-center justify-center w-6 h-6 md:w-7 md:h-7 bg-[#0A8BEC]' 
                                >
                                    {item.app.rank}
                                </span>}
                            </td>
                            <td>
                                {item.aa.score && Intl.NumberFormat('en-US').format(item.aa.score)}
                                {item.aa.rank && <span 
                                    className='flex items-center justify-center w-6 h-6 md:w-7 md:h-7 bg-[#0A8BEC]' 
                                >
                                    {item.aa.rank}
                                </span>}
                            </td>
                            <td>
                                {item.team.score && Intl.NumberFormat('en-US').format(item.team.score)}
                                {item.team.rank && <span 
                                    className='flex items-center justify-center w-6 h-6 md:w-7 md:h-7 bg-[#0A8BEC]' 
                                >
                                    {item.team.rank}
                                </span>}
                            </td>                 
                        </td>
                    </tr> 
                ))}   
            </table>
            <LiveAccordion liveData={liveData} />
        </>
    );
};

export default LiveTable;