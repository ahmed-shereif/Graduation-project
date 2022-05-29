import express from 'express'
import Product from '../models/productModels.js'
import asyncHandler from 'express-async-handler'
import { getProductById, getProducts } from '../controllers'
const router = express.Router()

// @ desc fetch all products
// @route GET /api/products
// @access public
router.route('/').get(getProducts)

// @ desc fetch single product by id
// @route GET /api/products/:id
// @access public
router.route('/:id').get(getProductById)

export default router;