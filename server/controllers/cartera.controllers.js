import { getConnection ,sql,queries} from "../database/index.js"
//import { queries} from "../database/index.js"


//export const getCartera = (req,res)=>res.send('cartera de clientes!!!!!!')
export const getCartera = async (req,res)=>{
    try {
    const pool = await getConnection();
   // const result = await pool.request().query("select top 10 RUC,SEGMENTO_PAIS,SUB_SEGMENTO,SEGMENTO from SA_CARTERA_B2B_DIARIA");
    const result = await pool.request().query(queries.getAllCartera);
    console.log(result);
    res.json(result.recordset)
    //res.json('vamos a obtener registros de la cartera ')  
    } catch (error) {
       return res.status(500).json({message:error.message})
    }
    
}

export const getTarea=async (req,res)=>{
    try {
    // throw new Error("error de conexion");
    const pool = await getConnection();
    const result=await pool.request().query(queries.getAllTareas);
 //   console.log(result);
    console.log(result.recordset);
    res.json(result.recordset)
        
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
    
}


export const getTraficomensual=async (req,res)=>{
    try {
        const pool = await getConnection();
        const result=await pool.request().query(queries.getTrafico);
        console.log(result);
        res.send(result.recordset);
        //res.json(result.recordset)
        
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
  
}


export const createNewTarea= async (req,res)=>{
    try {
        const {tarea ,desccripcion,Entrega_a}= req.body;
        let {responsable}=req.body;
        if (tarea==null || desccripcion==null || Entrega_a==null){
            return res.status(400).json({msg:'Bad Request. Please fill all fields'});
        }
    
        if(responsable==null) responsable='carolina';
    
        const pool = await getConnection();
    
        await pool.request()
        .input("tarea",sql.VarChar,tarea)
        .input("desccripcion",sql.VarChar,desccripcion)
        .input("responsable",sql.VarChar,responsable)
        .input("Entrega_a",sql.VarChar,Entrega_a)
      //  .query("INSERT INTO sv_tareas (tarea ,desccripcion,responsable,Entrega_a) VALUES (@tarea,@desccripcion,@responsable,@Entrega_a)")
      .query(queries.createNewTarea)
      //console.log(tarea ,desccripcion,responsable,Entrega_a)
        res.json('new product')
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
   
}

export const getclientebyruc = async (req,res)=>{
    try {
    const {ruc} =req.params;
    const pool= await getConnection()
    const result = await pool.request().input("ruc",ruc).query(queries.getClientebyruc)
    console.log(result);
    //res.send(ruc)
    res.send(result.recordset[0])
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
    
}

export const getTarebynombre = async (req,res)=>{
    try {
        const {responsable} =req.params;
        const pool= await getConnection()
        const result = await pool.request().input("responsable",responsable).query(queries.getTarebyresponsable)
        console.log(result);
        //res.send(ruc)
        res.send(result.recordset[0])
    } catch (error) {
        return res.status(500).json({message:error.message}); 
    }
    
}

export const getTarebynombrebyentrega_a = async (req,res)=>{
    try {
        const {responsable,Entrega_a} =req.params;
        const pool= await getConnection()
        const result = await pool.request().input("responsable",responsable).input("Entrega_a",Entrega_a).query(queries.getTarebyresponsablebyentrega)
        console.log(result);
        //res.send(ruc)
        res.send(result.recordset[0])
    } catch (error) {
        return res.status(500).json({message:error.message}); 
    }
    
}

export const deleteTareabyid = async (req,res)=>{
    try {
        const {id} = req.params;
        const pool = await getConnection()
        const result = await pool.request().input("id",id).query(queries.deleteTarea);
        res.send(result);
       // res.sendStatus(204);
     //   console.log(result);
       // res.send(result);
        
    } catch (error) {
        return res.status(500).json({message:error.message}); 
    }
   
}

export const countClientes = async (req,res)=>{
    try {
        const pool = await getConnection()
        const result = await pool.request().query(queries.countCartera);
        console.log(result)
     //   console.log(result);
       // console.log(rows)
    //res.json(result.recordset[0][''])
        
    } catch (error) {
        return res.status(500).json({message:error.message}); 
    }
    
}

export const countTareas = async (req,res)=>{
    try {
        const pool = await getConnection()
        const result = await pool.request().query(queries.countTarea);
        console.log(result)
     //   console.log(result);
       // console.log(rows)
    //res.json(result.recordset[0][''])
    } catch (error) {
        return res.status(500).json({message:error.message}); 
    }
   
}

export const updateTarea= async (req,res)=>{
    try {
        const {tarea ,desccripcion,responsable,entrega_a}= req.body;
        const {id} = req.params;
        if ((tarea==null || desccripcion==null || responsable==null ||entrega_a==null)){
            return res.status(400).json({msg:'Bad Request. Please fill all fields'});
        }
        const pool = await getConnection();
        await pool.request()
        .input("tarea",sql.VarChar,tarea)
        .input("desccripcion",sql.VarChar,desccripcion)
        .input("responsable",sql.VarChar,responsable)
        .input("entrega_a",sql.VarChar,entrega_a)
        .input("id",sql.VarChar,id)
        .query(queries.updateTarea);
     
      console.log(tarea ,desccripcion,responsable,entrega_a);
      res.json('tarea modificada')
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
        console.log(error.message)
        
    }   
}


