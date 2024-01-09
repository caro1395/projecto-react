import { Router } from "express";
import { countClientes, countTareas, createNewTarea, deleteTareabyid, getCartera, getTarea,getTarebynombre,getTarebynombrebyentrega_a,getTraficomensual,getclientebyruc, updateTarea } from "../controllers/cartera.controllers.js";
const router =Router()
//router.get('/cartera',(req,res)=>res.send('cartera de clientes!!!!!!'))
router.get('/cartera',getCartera);
router.get('/tareas',getTarea);
router.post('/tareas',createNewTarea);
router.get('/cartera/:ruc',getclientebyruc);
router.delete('/tareas/:id',deleteTareabyid);
router.get('/cartera/count',countClientes);
router.get('/tareas/count',countTareas);
router.put('/tareas/:id',updateTarea);
router.get('/tareas/:responsable',getTarebynombre);
router.get('/tareas/:responsable/:Entrega_a',getTarebynombrebyentrega_a);
router.get('/trafico',getTraficomensual);





export default router;