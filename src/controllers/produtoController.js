import Produtos from "../models/produto";

class ProdutosController{
    static async novoProduto (req, res){
        const {nome, preco, imagem, link_produto, categoria, frete_gratis} = req.body;

        if(!nome || !preco || !imagem || !link_produto || !categoria || !frete_gratis){
            return res.status(400).json({message: 'nome, preco, imagem, link_produto, categoria e frete_gratis são obrigatorios'})
        }
        try{
            const produtos = await Produtos.novoProduto(nome, preco, imagem, link_produto, categoria, frete_gratis);
            res.status(201).json(produtos)
        }catch(error){
            console.error('Erro ao criar o produto', error);
            res.status(500).json({message: 'Erro ao criar produto', error: error.message})
        }
    }
}

export default ProdutosController;