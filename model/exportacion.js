const {Schema, model} = require('mongoose');

const ExportacionSchema = ({
    idExportacion:{
        type:Number,
        required:[true, 'El id de la exportacion es requerido'],
        unique:true
    },
    producto:{
        type:String,
        required:[true, 'El tipo de producto es requerido'],
    },
    kilos:{
        type:Number,
        required:[true, 'Los kilos son requeridos']
    },
    precioKiloDolar:{
        type:Number,
        required:[true, 'El precio por kilo en dolares es requerido']
    },
    precioActualDolar:{
        type:Number,
        required:[true, 'El precio actual del dolar es requerido'],
    }
});

module.exports = model('exportaciones', ExportacionSchema);