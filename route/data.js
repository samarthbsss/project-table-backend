const express = require('express');
const router = express.Router();
const DataModel= require('../model/data.model');

router.get('/data', async (req, res) => {
    try {
      const data = await DataModel.find();
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });


router.post('/data', async (req, res) => {
    try {
      const newData = req.body;
      const createdData = await DataModel.create(newData);
      res.json(createdData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });
  
  router.put('/data/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const updatedItem = req.body;
      const updatedData = await DataModel.findByIdAndUpdate(id, updatedItem, { new: true });
      res.json(updatedData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });
  
 router.delete('/data/:id', async (req, res) => {
    try {
      const id = req.params.id;
      await DataModel.findByIdAndRemove(id);
      const data = await DataModel.find();
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });
  
  
module.exports = router;