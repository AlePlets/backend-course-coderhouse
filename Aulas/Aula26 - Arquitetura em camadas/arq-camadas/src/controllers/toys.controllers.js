let toys = [];

// Função para listar todos os brinquedos
exports.listToys = (req, res) => {
  res.json(toys);
};

// Função para adicionar um novo brinquedo
exports.addToy = (req, res) => {
  const newToy = req.body;
  toys.push(newToy);
  res.status(201).json(newToy);
};

