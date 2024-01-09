import axios from 'axios';

export const buscarCliente = async (ruc) =>
await axios.get(`http://localhost:4000/cartera/${ruc}`)

export const listarCliente =async()=>
await axios.get(`http://localhost:4000/cartera`)



