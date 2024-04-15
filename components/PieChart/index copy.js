import { Pie } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'
import { useEffect,useState } from 'react';

ChartJS.register(
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
)

export default function PieChart(){
    const [chartData, setChartData] = useState ({
        datasets: []
    })

    const [chartOptions,setChartOptions] = useState({})

    useEffect(() => {
        setChartData({
            labels: ["red", "blue", "green","cyan","magenta","yellow",],
            datasets: [
                {
                    label: '# of Votes',
                    data: [10,30,14,5, 12, 24], //takes the numbers and adds them to make them a percentage of the total
                    borderColor: ['rgba(40,40,40,0.4)','rgba(60,60,60,0.4)','rgba(80,162,235,0.4)','rgba(80,80,80,0.4)','rgba(100,100,100,0.4)','rgba(120,120,120,0.4)'],
                    backgroundColor: ['rgba(40,40,40,0.4)','rgba(60,60,60,0.4)','rgba(80,80,80,0.4)','rgba(80,80,80,0.4)','rgba(100,100,100,0.4)','rgba(120,120,120,0.4)'],
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
            <Pie data={chartData} options={chartOptions} style={{width:"200px", height:"200px"}}/>
        </>
    )
}