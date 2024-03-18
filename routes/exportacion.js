const {Router} = require('express');

const route = Router();

const{getExportacion, postExportacion, putExportacion, deleteExportacion} = require('../controller/exportacion');

route.get('/', getExportacion)
route.post('/', postExportacion)
route.put('/:idProducto', putExportacion)
route.delete('/:idProducto', deleteExportacion)

module.exports = route