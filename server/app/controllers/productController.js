//model
const modelProduct = require("../models/modelProduct");
class productController {
    //product/api/addProduct [POST]
    async addProduct(req, res, next) {
        const data = { ...req.body };
        if (!data.nameProduct)
            return res
                .status(400)
                .json({ success: false, message: "name product is invalid" });
        if (!data.price)
            return res
                .status(400)
                .json({ success: false, message: "price is invalid" });
        if (!data.kind)
            return res
                .status(400)
                .json({ success: false, message: "kind is required" });
        if (!data.material)
            return res
                .status(400)
                .json({ success: false, message: "material is required" });

        try {
            const newProduct = new modelProduct(data);
            await newProduct.save();
            res.json({ success: true, message: "saved" });
        } catch (error) {}
    }

    //product/api/getProduct [GET]
    getProducts(req, res, next) {
        const idProduct = req.params.id;
        if (!idProduct)
            return res
                .status(404)
                .json({ success: false, message: "missing product id" });
        try {
            const product = await models.getProduct(idProduct).exec();
            if (!product)
                return res
                    .status(404)
                    .json({
                        success: false,
                        message: "this product is not existing"
                    });
            res.json({
                success: true,
                message: "successful",
                product: product
            });
        } catch (error) {
            return res
                .status(500)
                .json({ success: false, message: "something wrong" });
        }
    }
}

module.exports = new productController();
