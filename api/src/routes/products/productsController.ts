import { Request, Response } from "express"

export function listProducts  (req: Request, res: Response) {
    res.send('listProducts')
  } 


  export function getProductById (req: Request, res: Response) {
    res.send('getProductById')
  } 


  export function createProducts  (req: Request, res: Response) {
    console.log(req.body)
    res.send('createProducts!')
  } 



  export function UpdateProduct  (req: Request, res: Response) {
    res.send('updateProducts!')
  } 


  export function DeleteProduct  (req: Request, res: Response ) {
    res.send('deleteProducts!')
  } 