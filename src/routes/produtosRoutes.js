import express from 'express'
import ProdutosController from '../controllers/produtoController'

const router = express.Router();

router.post('/produtos', ProdutosController.novoProduto)

export default router;