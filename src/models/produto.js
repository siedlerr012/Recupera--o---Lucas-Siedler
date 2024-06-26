import { prisma } from "../../config/prisma.js";

export const createProduto= async (nome, descricao, preco, quantidade,categoria,fornecedor) => {
    try {
        return await prisma.produto.create({
            data: {
                nome,
                descricao,
                preco,
                quantidade,
                categoria,
                fornecedor,
            },
        });
    } catch (error) {
        throw new Error(`Failed to create produto: ${error.message}`);
    }
};

export const findproduto = async () => {
    try {
        return await prisma.produto.findMany();
    } catch (error) {
        throw new Error(`Failed to get all produto: ${error.message}`);
    }

}

export const findprodutoById = async (id) => {
    return await prisma.produto.findUnique({
        where: {
            id,
        },
    });
};

export const updateproduto = async (nome, descricao, preco, quantidade,categoria,fornecedor) => {
    return await prisma.produto.update({
        where: {
            id: id
        },
        data: {
            nome: nome,
            descricao: descricao,
            preco: preco,
            quantidade: quantidade,
            categoria: categoria,
            fornecedor: fornecedor,

        },
    });
};

export const deleteproduto = async (id) => {
    return await prisma.produto.delete({
        where: {
            id,
        },
    });
};
