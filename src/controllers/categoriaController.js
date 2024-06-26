import { createCategoria, findCategoria, findCategoriaById,updateCategoria,deleteCategoria } from "../models/categoria.js";

export const addCategoria = async (req, res) => {
    try {
        const { nome,preco, modelo } = req.body;
        const Categoria = await createCategoria(nome,preco, modelo);
        res.status(201).json({ Categoria });
    } catch (error) {
        res
            .status(500)
            .json({ error: "Failed to add categoria", message: error.message });
    }
};

export const findAllCategoria = async (req, res) => {
    try {
        const categoria = await findCategoria();
        res.status(200).json({ categoria });
    } catch (error) {
        res
            .status(500)
            .json({ error: "Failed to find categoria", message: error.message });
    }
};


export const getCategoriaById = async (req, res) => {
    try {
        const categoria = await findCategoriaById(req.params.id);
        res.status(200).json({ categoria });
    } catch (error) {
        res
            .status(500)
            .json({ error: "Failed to find categoria by id", message: error.message });
    }
};

export const update = async (req, res) => {
    try {
        const { id } = req.params.id;
        const CategoriaData = req.body;
        const Categoria = await updateCategoria(id, CategoriaData);
        res.status(200).json({ Categoria });
    } catch (error) {
        res
            .status(500)
            .json({ error: "Failed to update categoria", message: error.message });
    }
};

export const delCategoria= async (req, res) => {
    try {
        const { id } = req.params.id;
        const Categoria = await deleteCategoria(id);
        res.status(200).json({ Categoria });
    } catch (error) {
        res
            .status(500)
            .json({ error: "Failed to delete Categoria", message: error.message });
    }
};
