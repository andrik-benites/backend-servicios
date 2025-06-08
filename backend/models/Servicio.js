const mongoose = require('mongoose');
const {Schema} = mongoose;


const ServicioSchema = new Schema({
nombreServicio: { type: String, required: true },
   descripcion: { type: String, required: true },
   duracion: { type: String, required: true },
});


module.exports = mongoose.model('Servicio', ServicioSchema);


