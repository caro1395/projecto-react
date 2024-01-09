import axios from 'axios'
import {Chart as ChartJS,BarElement, CategoryScale, LinearScale} from 'chart.js'
import { useState,useEffect } from 'react'
import {Bar} from 'react-chartjs-2'
import Select from 'react-select'


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement
)

const Barchart=()=>{
    //const baseUrl='http://localhost:4000/trafico';
    const [eschart,setChart] = useState([]);
    const [eschart2,setChart2] = useState([]);
    const [opciones,setOpciones] = useState([]);


    const obtenerData=()=>{
        axios.get('http://localhost:4000/trafico').
        then(response=>(
            setChart(response.data),
            setChart2(response.data),
            setOpciones(response.data.map(x=>x.PERIODO)),
            console.log(response.data.map(x=>x.PERIODO)),
        ///   opciones3=opciones2.concat(opciones),
         //  console.log(Object.keys(opciones3).length),
       //     setOpciones(opciones,12356),

          //  setOpciones(opciones.unshift('TODOS')),

        //    console.log("se inserto correctamente"),
            console.log(response.data)

            //console.log(eschart),
           // console.log(Object.keys(eschart).length)

        ))
        .catch(error=>{
            console.log(error)
        })

    };
    
    useEffect(()=>{
        obtenerData()
    },[])
 
   const data= {
        labels: eschart?.map(x=>x.PERIODO),
        datasets: [{
          label: '# of Votes',
          data: eschart?.map(x=>x.total),
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
                fontSize:10
            }
        }
      }

      const selectChange=(event)=>{
        console.log(event);
        const evento=event.value;
        console.log(evento);
       
      //setChart(eschart2.filter(x=>x.PERIODO===evento))


      setChart(evento=='todas'?eschart2:eschart2.filter(x=>x.PERIODO===evento))

       
        //const arreglo = eschart.filter(x=>x.PERIODO==event);
       // console.log(eschart.filter(x=>x.PERIODO===event))
        //setChart(eschart.filter(x=>x.PERIODO===event))
        /*eschart.map(x=>{
          if(x.PERIODO==event) {
              console.log(x.total)       
          }else{
            console.log('no')
          }
        })
        */
       // setChart(eschart.filter(x=>x.PERIODO==evento));
        //console.log(eschart.filter(x=>x.PERIODO==evento))

        console.log(eschart2.filter(x=>x.PERIODO===evento));
       
     
      }
    
    return(
      <div>
        <div className='col-md-4 '>
      <h3 className='texto2'>RESULTADOS DEL TRÁFICO</h3>
      {Object.keys(eschart).length}
      
      <Bar className='grafico'
      data={data}
      height={400}
      options={options}
      />
      
      <Select className='grafico'
      options={opciones.map(x=>({label: x , value: x}))}
      onChange={selectChange}
      />
      
       </div>
       </div>
        
    )
}
export default Barchart;