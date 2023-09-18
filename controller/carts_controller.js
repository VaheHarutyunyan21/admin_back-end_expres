const { Cart } = require('../models')
const { Product } = require('../models')


exports.all=(req,res)=>{
    Cart.findAll().then((prod)=>{
        res.json(prod)
    }).catch((err)=>{
        res.status(500).json({error: err.message})
    })
};


exports.dataID=async(req,res)=>{
    try {
      const cart = await Cart.findAll({
          where: {
              userId: req.params.id,
          },
          include: [
              {
                model: Product,
                as: 'productData',
                attributes: ['id', 'name', 'price', 'description',],
              },
            ],
      });

      if (cart) {
          res.json(cart);
          console.log(cart);
      } else {
          res.status(404).json({ error: 'No basket items found' });
      }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};





exports.posts=async(req,res)=>{
    const { userId, productId, quantity } = req.body;
    try {
      let cart = await Cart.findOne({
        where: { userId, productId },
      });
      if (!cart) {
        cart = await Cart.create({
          userId,
          productId,
          quantity,
        });
      } else {
        cart.quantity += quantity;
        await cart.save();
      }
  
      res.json({ cart });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};


exports.changId=(req,res)=>{
    // const {id} = req.params;
    // const { categoryId,productId} = req.body;
    // Cart.update({categoryId,productId}, {where: {id}} )
    // .then((prod)=>{
    //     res.status(201).json(prod)
    // }).catch((err)=>{
    //     res.status(500).json({error: err.message})
    // });

};

exports.deleteId= (req, res) => {
    const { id } = req.params;
    Cart.destroy ({ where: {id}})
    .then((prod)=>{
        res.status(201).json(prod)
    }).catch((err)=>{
        res.status(500).json({error: err.message})
    })
}