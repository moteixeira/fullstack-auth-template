import { Router } from "express"
import { ProductsController } from "@/controllers/products-controller"
import { ensureAuthenticated } from "@/middleware/ensureAuthenticated"
import { verifyUserAuthorization } from "@/middleware/verifyUserAuthorization"

const productsRoutes = Router()
const productsController = new ProductsController()

// Aplicar em todas as rotas:
// productsRoutes.use(verifyUserAuthorization(["sale"]))


productsRoutes.get("/", productsController.index)
productsRoutes.post("/", ensureAuthenticated, verifyUserAuthorization(["sale"]), productsController.create)

export { productsRoutes }
