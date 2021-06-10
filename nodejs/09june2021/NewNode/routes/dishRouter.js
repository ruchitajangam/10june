// const express = require('express')
// const bodyParser = require('body-parser')

// const dishRouter = express.Router()

// dishRouter.use(bodyParser.json())
// //REST - path and the method combination

dishRouter.route('/')
dishRouter.get((req, res, next) => {
    res.end("Here are the available dishes....")
  })
//   /**
//    * json
//    * {
//    * "name":"AamPapad",
//    * "description":"prepared by alphanso mangoes"
//    * "pic": ""
//    * }
//    */
//   dishRouter.post( (req, res, next) => {
//     res.end(`The new dish name:${req.body.name}, description:${req.body.description} will be added soon`)
//   })
  
//   dishRouter.put((req, res, next) => {
//     res.statusCode = 403;
//     res.end('PUT operation not supported on /dishes');
//   })
   
//   dishRouter.delete((req, res, next) => {
//       res.end('Deleting all dishes');
//   })

//   module.exports = dishRouter


const  express = require('express')
const bodyParser = require('body-parser')



const dishRouter= express.Router()
dishRouter.use(bodyParser.json()) 


dishRouter.route('/')

dishRouter.get((req , res , next) =>{
    res.end("The data is ,,,,,,,,,,,,")
})


