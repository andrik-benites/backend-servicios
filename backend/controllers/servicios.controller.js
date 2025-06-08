const Servicio = require('../models/Servicio');
const servicioCtrl = {};




servicioCtrl.getServicios = async (req, res) => {
        const servicios = await Servicio.find();
        res.json(servicios);
};


servicioCtrl.createServicios = async (req, res) => {
   const servicio = new Servicio(req.body);
  await servicio.save();
  res.json({ 'status': 'Servicio guardado' });
}


servicioCtrl.getUnicoServicio = async (req, res) => {
        const servicioUnico = await Servicio.findById(req.params.id);
        res.json(servicioUnico);
};


servicioCtrl.editarServicio = async (req, res) => {
  const mongoose = require('mongoose');
  const id = new mongoose.Types.ObjectId(req.params.id);
  const ServicioEdit = {
    nombreServicio: req.body.nombre,
    descripcion: req.body.descripcion,
    duracion: req.body.duracion,
  };
  await Servicio.findByIdAndUpdate(id, { $set: ServicioEdit }, { new: true });
  res.json({ status: 'Servicio Actualizado' });
}


servicioCtrl.eliminarServicio = async (req, res) => {
        await Servicio.findByIdAndDelete(req.params.id);
        res.json({status: 'Servicio Eliminado'});
};


module.exports =  servicioCtrl;
