const express = require('express');
const router = express.Router();

router.get('/', (request, response, next) => {
  response.status(200).send({ message: 'Get items' });
});

router.post('/', (request, response, next) => {
  response.status(201).send({ message: 'Post item' });
});

router.get('/:id', (request, response, next) => {
  const id = request.params.id;
  response.status(200).send({ message: 'Get by Id items', id: id });
});

router.patch('/:id', (request, response, next) => {
  const id = request.params.id;
  response.status(200).send({ message: 'Patch item', id: id });
});

router.delete('/:id', (request, response, next) => {
  const id = request.params.id;
  response.status(204).send({ message: 'Delete item', id: id });
});

module.exports = router;
