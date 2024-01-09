export const queries={
//    getAllCartera:'select top 10 * from SA_CARTERA_B2B_DIARIA',
    getAllCartera:'select top 100 convert(numeric,RUC) id ,RUC,SEGMENTO_PAIS,SEGMENTO,TIPO_CLIENTE from SA_CARTERA_B2B_DIARIA',
    getAllTareas:'select * from sv_tareas',
    createNewTarea:'INSERT INTO sv_tareas (tarea ,desccripcion,responsable,Entrega_a) VALUES (@tarea,@desccripcion,@responsable,@Entrega_a)',
    getClientebyruc:'select * from SA_CARTERA_B2B_DIARIA where ruc=@ruc',
    deleteTarea:'delete from sv_tareas where id=@id ',
    countCartera:'select count(*) count from SA_CARTERA_B2B_DIARIA',
    countTarea:'select count(*) from sv_tareas',
    updateTarea:'update sv_tareas set tarea=@tarea,desccripcion=@desccripcion,responsable=@responsable,entrega_a=@entrega_a where id=@id',
    getTarebyresponsable:'select * from sv_tareas where responsable=@responsable',
    getTarebyresponsablebyentrega:'select * from sv_tareas where responsable=@responsable and Entrega_a=@Entrega_a',
    getTrafico:"select sum(casos) total,PERIODO from SA_MIX_CANALES where PERIODO>=202301 group by PERIODO"

}