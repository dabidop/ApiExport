const { response } = require('express')

const exportacion = require('../model/exportacion');

const getExportacion = async (req, res) => {
    const exportaciones = await exportacion.find();//Obtener todos los documentos de una coleccion
    res.json({
        msg: exportaciones
    })
};

const postExportacion = async (req, res) => {
    const datos = req.body //capturar datos de la postman

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
        msg: mensaje
    })
}
const putExportacion = async (req, res) => {
    const {
        producto,
        kilos,
        precioKiloDolar,
        precioActualDolar
    } = req.body; //desestructurar
    try {
      const exportante = await exportacion.findOneAndUpdate(
        { producto : producto  },
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
      msg: mensaje
    });
  };

const deleteExportacion = async (req, res) => {
    const {} = req.body
    let mensaje = 'Eliminación exitosa'
    try {
        const exportaciones = await exportacion.findOneAndDelete({ producto : producto })
    } catch (error) {
        mensaje = error;
    }
    res.json({
        msg:mensaje
    });
};

module.exports = {
    getExportacion,
    postExportacion,
    putExportacion,
    deleteExportacion
}