
const axios = require('axios');

const {db} = require('../util/admin');


exports.create = async (req, res, next) => {
  const cep = req.body.logradouro + ','+ req.body.numero;
  const response = await axios.get( `https://maps.googleapis.com/maps/api/geocode/json?address=${cep}&key=AIzaSyDxuVyRC66EnzwOziDGR0Q0DYMW89ATAOM`);

  const {lat, lng}= await response.data.results[0].geometry.location;

  const dadosCliente = {
    nome: req.body.nome,
    logradouro: req.body.logradouro,
    numero: req.body.numero,
    complemento: req.body.complemento,
    fone: req.body.fone,
    cep: req.body.cep,
    lat: lat,
    lng: lng,
  };

  try {
    db.collection('clientes').doc()
        .create(dadosCliente);
    return res.status(200).send({message: 'Cliente Criado com Sucesso'});
  } catch (error) {
    return res.status(500).send(error);
  }
};

exports.getAllClientes = async (req, res) => {
  const agendaRef = db.collection('clientes');

  try {
    agendaRef.get().then((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      console.log(data);
      return res.status(201).json(data);
    });
  } catch (error) {
    return res
        .status(500)
        .json({
          message: 'Algo deu errado',
        });
  }
};
