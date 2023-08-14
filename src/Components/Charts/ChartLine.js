import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { useState } from 'react';
import { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
 import { API_BASE } from '../../data/apiConfig';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { getChartLine } from '../../store/chartLineSlice';

//chart 
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false
        },
        tooltips: {
            callbacks: {
                label: function (tooltipItem) {
                    return tooltipItem.yLabel;
                }
            }
        },
        //legend: {
        //    position: 'top',
        //    labels: {
        //        // This more specific font property overrides the global property
        //        font: {
        //            size: 16,
        //        },
        //    color:"#A8A196"
        //    },
        // },
        title: {
            display: true,
            text: 'گزارش ترافیک',
            color: "#A8A196",
            font: {
                size:16
            }
         },

    },
    scales: {
        x: {
            ticks: {
                color: "#A8A196",
                 
            },
            grid: {
                color: "rgba(100,100,100,0.2)"
            }
        },
        y: {
            ticks: {
                color: "#A8A196"

            },
            grid: {
                color: "rgba(100,100,100,0.2)"
            }
        }

    }

};

function ChartLine() {

    const { user, isLoggedIn } = useSelector((state) => state.auth);
    const [uniqueID, setUniqueID] = useState("");
    const dispatch = useDispatch()

    //fetchapi
    useEffect(() => {
        if (isLoggedIn) {
            setUniqueID(user.uniqueID);
            const fetchData = async () => {
                await dispatch(getChartLine(user.uniqueID));
            };
            fetchData();
        }
    }, [isLoggedIn]);

    const chart = useSelector((state) => {
        return state.chartLine;
    })

    const data = {
        labels: chart?.chartLine?.map((x) => x.date),
        datasets: [
            {
                label: 'گزارش ترافیک',
                data: chart?.chartLine?.map((x) => x.traffic),
                borderColor: 'rgb(251,157,130)',
                backgroundColor: 'rgba(251,157,130, 0.5)',
            },
        ],
    };

    return (
        <div className="box mt-3 mx-2" style={{ borderRadius: "20px" }}>
            <div className="profile-box d-flex justify-content-center chart" style={{ width: "98%" }} >
                <Line options={options} data={data} height={110} />
            </div>
        </div>
    );
}

export default ChartLine;