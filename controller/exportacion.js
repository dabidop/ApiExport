const { response } = require('express')

const exportacion = require('../model/exportacion');

const getExportacion = async (req, res) => {
    const exportaciones = await exportacion.find();//Obtener todos los documentos de una coleccion
    res.json({
        Exportaciones: exportaciones
    })
};

const postExportacion = async (req, res) => {
    const datos = req.body //capturar datos de la postman
    console.log('Acá se van a imprimir los datos', datos)
    let mensaje = 'Inserción exitosa'
    try {

        const usuarios = new exportacion(datos)
        await usuarios.save()

    } catch (error) {

        mensaje = error
        console.log(error)

    }

    //guarda en la base de datos
    res.json({
        Exportaciones: mensaje
    })
}
const putExportacion = async (req, res) => {
    const {
        idProducto,
        producto,
        kilos,
        precioKiloDolar,
        precioActualDolar
    } = req.body; //desestructurar
    try {
        const exportante = await exportacion.findOneAndUpdate(
            { idProducto: idProducto },
            {
                producto: producto,
                kilos: kilos,
                precioKiloDolar: precioKiloDolar,
                precioActualDolar: precioActualDolar
            }
        ) //las primeras llaves son el valor por el cual voy a hacer la modificacion el segundo hace referencia a lo que el usuario envio
        mensaje = "actualizacion exitosa"
    } catch (error) {
        mensaje = error
    }
    res.json({
        Exportaciones: mensaje
    });
};

const deleteExportacion = async (req, res) => {
    const { idProducto } = req.params; // Accede al ID de producto desde los parámetros de la URL
    let mensaje = 'Eliminación exitosa';
    try {
        const exportaciones = await exportacion.findOneAndDelete({ idProducto: idProducto });
    } catch (error) {
        mensaje = error;
    }
    res.json({
        Exportaciones: mensaje
    });
};

module.exports = {
    getExportacion,
    postExportacion,
    putExportacion,
    deleteExportacion
}