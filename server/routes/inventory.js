const express = require('express');
const router = express.Router();

router.get('/', (request, response, next) => {
  response.status(200).send({ message: 'Get inventory' });
});

router.post('/', (request, response, next) => {
  response.status(201).send({ message: 'Post inventory' });
});

router.get('/:id', (request, response, next) => {
  const id = request.params.id;
  response.status(200).send({ message: 'Get by Id inventory', id: id });
});

router.patch('/:id', (request, response, next) => {
  const id = request.params.id;
  response.status(200).send({ message: 'Patch inventory', id: id });
});

router.delete('/:id', (request, response, next) => {
  const id = request.params.id;
  response.status(204).send({ message: 'Delete inventory', id: id });
});

module.exports = router;
