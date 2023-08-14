import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { useState } from 'react';
import { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { useDispatch, useSelector } from "react-redux";
import { getChartBar } from '../../store/chartBarSlice';

//chart 
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
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
        title: {
            display: true,
            text: 'گزارش مالی',
            color: "#A8A196",
            font: {
                size: 16
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

function ChartBar() {

    const { user, isLoggedIn } = useSelector((state) => state.auth);
    const [uniqueID, setUniqueID] = useState("");
    const dispatch = useDispatch()

    //fetchapi
    useEffect(() => {
        if (isLoggedIn) {
            setUniqueID(user.uniqueID);
            const fetchData = async () => {
                await dispatch(getChartBar(user.uniqueID));
            };
            fetchData();
        }
    }, [isLoggedIn]);

    const chart = useSelector((state) => {
        return state.chartBar;
    })

    const data = {
        labels: chart?.chartBar?.map((x) => x.date),
        datasets: [{
            label: 'گزارش مالی',
            data: chart?.chartBar?.map((x) => x.price),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)',
                "rgba(160, 196, 157,0.2)",
                "rgba(128, 70, 116,0.2)"
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)',
                "rgb(160, 196, 157)",
                "rgb(128, 70, 116)"
            ],
            borderWidth: 1
        }]
    };

    return (
        <div className="box mt-3 mx-2" style={{ borderRadius: "20px" }}>
            <div className="profile-box d-flex justify-content-center chart" style={{ width: "98%" }} >
                <Bar options={options} data={data} height={110} />
            </div>
        </div>
    );
}

export default ChartBar;