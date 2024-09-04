import Router from 'express'
const routesCuenta = Router()

import { getCuentas, postCuentas, consignar, retirar, eliminarCuenta } from '../controllers/cuentaController.js'; //desestructuración

routesCuenta.get('/', getCuentas)
routesCuenta.post('/', postCuentas)
routesCuenta.put('/:id', consignar)
routesCuenta.put('/retirar/:id', retirar)
routesCuenta.delete('/:id', eliminarCuenta);

export default routesCuenta;