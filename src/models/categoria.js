import { prisma } from "../../config/prisma.js";

export const createCategoria = async (nome, preco, modelo) => {
    try {
        return await prisma.categoria.create({
            data: {
                nome,
                preco,
                modelo,
            },
        });
    } catch (error) {
        if (error.code == 'P2002') {
            throw new Error("ID already exists.");
        }

        throw new Error(`Failed to create categoria: ${error.message}`);
    }
};

export const findCategoria = async () => {
    try {
        return await prisma.categoria.findMany();
    } catch (error) {
        throw new Error(`Failed to get all categoria: ${error.message}`);
    }

}

export const findCategoriaById = async (id) => {
    return await prisma.categoria.findUnique({
        where: {
            id,
        },
    });
};

export const updateCategoria = async (id, categoriaData) => {
    return await prisma.categoria.update({
        where: {
            id: id
        },
        data: {
            nome: categoriaData.nome,
        },
    });
};

export const deleteCategoria = async (id) => {
    return await prisma.categoria.delete({
        where: {
            id,
        },
    });
};
