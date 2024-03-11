import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
 } from '../types'

 export function crearNuevoProductoActions(producto){
    return (dispatch) => {
        console.log(producto)
    }
 }