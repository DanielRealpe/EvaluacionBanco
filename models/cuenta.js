import { Schema, model } from 'mongoose';

const cuentaSchema = new Schema({
    numeroCuenta: {
        type: Number,
        unique: [true, "numero already exist"],
        required: [true, "The number is required"],
    },
    documentoCliente: {
        type: String,
        unique: [true, "Client already exist"],
        required: [true, "The document is required"],
    },
    fechaApertura: {
        type: Date,
        required: [true, "The start date is required"],
    },
    Saldo: {
        type: Number,
        required: [true, "The balance is required"],
        min: [0, "The balance must be a positive number"]
    },
    Clave: {
        type: String,
        required: [true, "The password is required"],
        minlength: [4, "The minimum password length is 4"]
    },
}, {
    versionKey: false
})

cuentaSchema.statics.getNextNumero = async function () {
    const lastCell = await this.findOne().sort({ numeroCuenta: -1 });
    return lastCell ? lastCell.numeroCuenta + 1 : 1;
};

export default model('Cuenta', cuentaSchema, 'cuenta');