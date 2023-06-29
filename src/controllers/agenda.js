const {db} = require('../util/admin');

exports.getAll = async (req, res) => {
  const agendaRef = db.collection('agenda');

  try {
    agendaRef.get().then((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

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

// create
exports.create = (req, res, next) => {
  try {
    db.collection('agenda').doc()
        .create(req.body);
    return res.status(200).send({message: 'Agenda Criada com Sucesso'});
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};


exports.put = async (req, res, next) => {
  const id = req.params.id;
  console.log(id, req.body);
  try {
    console.log(id);
    await db.collection('agenda').doc(id)
        .update(req.body );
    return res.status(200).send({message: 'Agenda Atualizada com Sucesso'});
  } catch (error) {
    console.log('aqui', error);
    return res.status(500).send(error);
  }
};

exports.delete = (req, res, next) => {
  const id = req.params.id;
  res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};
