const {Schema, model} = require('mongoose');

const ExportacionSchema = ({
    producto:{
        type:String,
        required:[true, 'El tipo de producto es requerido'],
        unique:true
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