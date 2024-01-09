import {Form,Formik} from 'formik';
import { buscarCliente } from '../api/cartera.api';

function PaginaFormulario(){

    return(
        <div>
    <div>
        <Formik
        initialValues={{
            rucname:""
        }}
        onSubmit={ async (values,actions)=>{
            console.log(values);
            try {
                const response = await buscarCliente(values.rucname);
               // console.log(response);
                actions.resetForm();
                const cliente = response.data;
                console.log(cliente)


            } catch (error) {
                console.error(error);
            }
        }}
        >

{({handleChange,handleSubmit,values,isSubmitting})=>(
            <Form onSubmit={handleSubmit}>
            <label>Ruc</label>
            <input type="text" name="rucname" placeholder="ruc"
            onChange={handleChange} value={values.rucname}/>
            <button type='submit' disabled={isSubmitting}>
                {isSubmitting? "Buscando..." : "Buscar"}
            </button>

            </Form>
        )}


        </Formik>
            
    </div>

    

    </div>
    )

}

export default PaginaFormulario