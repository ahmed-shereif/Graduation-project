import express from 'express'
import Product from '../models/productModels.js'

export const getProducts = asyncHandler(async (req, res, next) => {
    const products = await Product.find({})
    res.json(products)
})


export const getProductById = asyncHandler(async (req, res) => {

    let product = await Product.findById(req.params.id)

    if (product) {

        res.json(product)
    } else {
        res.status(404)
        throw new Error(`product not found!`)
    }
})