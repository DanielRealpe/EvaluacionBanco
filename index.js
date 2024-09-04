// Crear una api REST en Node.js y MongoDB que permita gestionar la información de
// una cuenta de ahorros.
// Los datos son:
// numeroCuenta, documentoCliente, fechaApertura, saldo, claveAcceso
// los métodos son:
// Listar los datos de una cuenta.
// Crear una cuenta.
// Consignar dinero en la cuenta.
// Retirar dinero de la cuenta.
// Eliminar una cuenta.
// El número de la cuenta debe ser único y autoinvremental.
// No se pueden consignar valores negativos
// No se puede realizar un retiro si el monto a retirar supera el saldo de la cuenta.
// Solo se pueden eliminar cuentas en las que su saldo es igual a cero.
// La clave de acceso debe estar compuesta por 4 dígitos y debe quedar encriptada al
// momento de crear la cuenta.
// Al momento de realizar una transacción(consignar, retirar) el valor del saldo debe
// actualizarse.
// Desplegar la solución en git.
// Desplegar el proyecto funcional en render u otro servidor.
// Compartir los enlaces de git y render al email: dilopezz@sena.edu.co
// Sustentación: inmediatamente después de la entrega o en las sesiones de formación
// siguientes.
// Éxitos.

import Server from './models/server.js';

const server = new Server // Instanciar

// server.listen();
// server.dbConnection()