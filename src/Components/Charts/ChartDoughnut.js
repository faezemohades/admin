import {
    Chart as ChartJS, ArcElement, Tooltip, Legend
} from 'chart.js';
import { useState } from 'react';
import { useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
 import { API_BASE } from '../../data/apiConfig';
import axios from 'axios';
import { useSelector } from "react-redux";

//chart 
ChartJS.register(
    ArcElement, Tooltip, Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'right',
            labels: {
                // This more specific font property overrides the global property
                font: {
                    size: 16,
                },
                color: "#A8A196"
            },
        },
        title: {
            display: true,
            text: 'گزارش مالی',
            color: "#A8A196",
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

function ChartDoughnut() {
    const { user } = useSelector((state) => state.auth);

    const [uniqueID, setUniqueID] = useState("");
    const [chart, setChart] = useState();

    //fetchapi
    useEffect(() => {
        if (user) {
            setUniqueID(user.uniqueID);

            const fetchData = async () => {
                try {
                    const response = await axios.post(`${API_BASE}/getChartReport`, {
                        UniqueID: user.uniqueID,
                    });
                    setChart(response.data);
                } catch (error) {
                    // Handle error if API call fails
                    console.log(error);
                    // You can set an error state here and display an error message to the user
                }
            };

            fetchData();
        }
    }, [user]);

   
    const data = {
        labels: chart?.map((x) => x.date),
        datasets: [{
            label: 'My First Dataset',
            data: chart?.map((x) => x.traffic),
            backgroundColor: [
                'rgba(255, 159, 64, 0.8)',
                'rgba(255, 205, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            hoverOffset: 4
        }]
    };

    return (
        <div className="box mt-3 mx-2" style={{ borderRadius: "20px" }}>
            <div className="profile-box d-flex justify-content-center " style={{  height:"405px" }} >
                <Doughnut options={options} data={data} height={80} />
            </div>
        </div>
    );
}

export default ChartDoughnut;