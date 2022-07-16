import express from 'express';


const server = express();


server.delete('/teste', (_, res) => {
  return res.send('Olá, DEV!');
});


export { server };
