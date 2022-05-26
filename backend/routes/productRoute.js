import express from 'express'
import Product from '../models/productModels.js'
import asyncHandler from 'express-async-handler'

const router = express.Router()

// @ desc fetch all products
// @route GET /api/products
// @access public
router.get('/', asyncHandler(async (req, res, next) => {
    const products = await Product.find({})
    res.json(products)
}))

// @ desc fetch single product by id
// @route GET /api/products/:id
// @access public
router.get('/:id', asyncHandler(async (req, res) => {

    let product = await Product.findById(req.params.id)

    if (product) {

        res.json(product)
    } else {
        res.status(404)
        throw new Error(`product not found!`)
    }
}))

export default router;