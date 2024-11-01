
import { Router } from 'express';
import { listProducts, getProductById, createProducts, UpdateProduct, DeleteProduct  } from './productsController';

const router = Router();

router.get('/', listProducts )


router.get('/:id', getProductById ) 


router.post('/', createProducts )

router.delete('/:id', DeleteProduct )
router.put('/:id', UpdateProduct )


  


  export default router;
  
  


