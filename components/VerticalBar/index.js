import styles from './VerticalBar.module.css';
import { Bar } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { useEffect,useState } from 'react';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export default function verticalBar(){
    const [chartData, setChartData] = useState ({
        datasets: []
    })

    const [chartOptions,setChartOptions] = useState({})

    useEffect(() => {
        setChartData({
            labels: ["Sun", "Mon", "tue", "wed", "thru", "fri","sat"],
            datasets: [
                {
                    label: 'sales $',
                    data: [10,30,14,5, 12, 24,16],
                    borderColor: 'rgb(53, 162 , 235)',
                    backgroundColor: 'rgba(53,162,235,0.4)',

                }
            ]
        })

        setChartOptions({
            plugins: {
                legend: {
                    position: 'top'
                },
                titles: {
                    display: true,
                    text: "daily Revenue"
                }
            },
            maintainAspectRation: false,
            responsive:true
        })
    }, [])
        //the useEffect

    return(
        <>
            <Bar data={chartData} options={chartOptions}/>
        </>
    )
}