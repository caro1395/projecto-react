import {Chart as ChartJS,BarElement, CategoryScale, LinearScale} from 'chart.js'
import {Bar} from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement
)

const Barchart=()=>{

   const data= {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)'
          ],
          borderWidth: 1
        }]
      }

    const options= {
        maintainAspectRadio:false,
        scales: {
          y: {
            beginAtZero: true
          }
        },
        legend:{
            labels:{
                fontSize:26
            }
        }
      }
    
    return(
        <div>
            <h1>RESULTADOS DEL TRÁFICO</h1>
            <Bar
            data={data}
            height={400}
            options={options}
            />
        </div>
    )
}
export default Barchart;