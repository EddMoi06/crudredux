
const EditarProducto = () => {
  return (
    <div className="row justify-content-center">
        <div className="col-md-8">
            <div className="card">
                <div className="card-body">
                    <h2 className="text-center mb-4 font-weight-bold">
                        Editar Producto
                    </h2>

                    <form>
                        <div className="form-group">
                            <label htmlFor="nombre"> Editar Producto </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Editar Producto"
                                name="nombre"
                                id="nombre"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="precio"> Precio Producto </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Precio Producto"
                                name="precio"
                                id="precio"
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                        >
                            Guardar Cambios
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EditarProducto
