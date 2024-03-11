import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { crearNuevoProductoActions } from '../actions/productoActions'

const NuevoProducto = () => {

    const [ nombre, setNombre] = useState('')
    const [ precio, setPrecio] = useState(0)

    const dispatch = useDispatch()


    const agregarProducto = producto => dispatch ( crearNuevoProductoActions(producto) )

    const submitNuevoProducto = e => {
        e.preventDefault()

        if(nombre === ''){
            console.log('esta vacios')
            return
        }else if(precio <= 0){
            console.log('insertar una cantidad Valida')
            return
        }

        agregarProducto({
            nombre,
            precio
        })
    }

  return (
    <div className="row justify-content-center">
        <div className="col-md-8">
            <div className="card">
                <div className="card-body">
                    <h2 className="text-center mb-4 font-weight-bold">
                        Agregar Nuevo Producto
                    </h2>

                    <form
                        onSubmit={submitNuevoProducto}
                    >
                        <div className="form-group">
                            <label htmlFor="nombre"> Nuevo Producto </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Agregar Producto"
                                name="nombre"
                                id="nombre"
                                value={nombre}
                                onChange={e => setNombre(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="precio"> Precio Producto </label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Precio Producto"
                                name="precio"
                                id="precio"
                                value={precio}
                                onChange={e => setPrecio(+e.target.value)}
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                        >
                            Agregar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NuevoProducto
