const express = require('express');
const router = express.Router();

//Item Model
const Item = require('../../models/Item');

//@route GET api/items
//@description Get all items
//@access public
router.get('/', (req,res) => {
    Item.find()
    .sort({date: -1})
    .then(items => res.json(items));
});

//@route POST api/items
//@description Create an item
//@access public
router.post('/', (req,res) => {
    let newItem = new Item(
        {
        skill: req.body.skill
    });
    
    newItem.save().then(item => res.json(item));
});

//@route DELETE api/items
//@description Delete an item
//@access public
router.delete('/:id', (req,res) => {
   Item.findById(req.params.id)
   .then(item => item.remove().then(() => res.json({nocap: true})))
   .catch(err => res.status(404).json({nocap: false}));
})
  


module.exports = router;