import bcrypt from 'bcryptjs'
import Cuenta from '../models/cuenta.js'
// bcrypt

export async function getCuentas(req, res) {
    const cuentas = await Cuenta.find()
    res.json(cuentas)
}

export async function postCuentas(req, res) {
    const numerocuenta = await Cuenta.getNextNumero();
    const body = req.body
    let msg = 'Cuenta inserted succsesul'
    try {
        const cuentas = new Cuenta(body)
        cuentas.numeroCuenta = numerocuenta
        if (cuentas.Clave.length != 4) {
            msg = 'La clave debe tener 4 caracteres!'
        } else {
            cuentas.Clave = await bcrypt.hash(body.Clave, 10)
            cuentas.fechaApertura = new Date()
            await cuentas.save()
        }
    }
    catch (error) {
        msg = error
    }
    res.json({ msg: msg })
}

export async function consignar(req, res) {
    const id = req.params.id
    const { monto } = req.body
    let msg = 'Dinero consignado!'
    const cuentas = await Cuenta.findById(id)
    if (monto < 0) {
        msg = 'No se puede consignar un monto negativo!'
    } else {
        try {
            await Cuenta.findByIdAndUpdate(id, { Saldo: cuentas.Saldo += monto })
        } catch (error) {
            msg = error
        }
    }
    res.json({ msg: msg })
}

export async function retirar(req, res) {
    const id = req.params.id
    const { monto } = req.body
    let msg = 'Dinero retirado!'
    try {
        const cuentas = await Cuenta.findById(id)
        if (monto > cuentas.Saldo) {
            msg = 'Fondos insuficientes!'
        } else {
            await Cuenta.findByIdAndUpdate(id, { Saldo: cuentas.Saldo -= monto })
        }
    } catch (error) {
        msg = error
    }
    res.json({ msg: msg })
}

export async function eliminarCuenta(req, res) {
    const _id = req.params.id
    let msg = 'Cuenta eliminada!'
    try {
        const cuentas = await Cuenta.findById(_id)
        if (cuentas.Saldo > 0) {
            msg = 'No se puede eliminar la cuenta'
        } else {
            await Cuenta.findByIdAndDelete(_id)
        }
        res.json({ msg: msg })
    } catch (error) {
        res.status(500).json(error, msg)

    }
}

