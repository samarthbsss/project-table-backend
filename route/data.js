const express = require('express');
const router = express.Router();
const DataModel= require('../model/data.model');
const mongoose= require('mongoose');



router.get('/data', async (req, res) => {
    try {
      const data = await DataModel.find();
      const transformedData = dataFromDB.map((item) => ({
        ...item._doc,
        date: item.date.toISOString().slice(0, 10) // Convert to YYYY-MM-DD format
      }));
      res.json(transformedData);

      // res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });


// router.post('/data', async (req, res) => {
//     try {
//       const newData = req.body;
//       const createdData = await DataModel.create(newData);
//       res.json(createdData);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Server error' });
//     }
//   });
router.post('/data', async (req, res) => {
  try {
    const newData = req.body;
    const receivedDate = new Date(newData.date);

    // Create a new Date object with only the date part (set time to midnight)
    const dateToSave = new Date(receivedDate.getFullYear(), receivedDate.getMonth(), receivedDate.getDate());

    // Create a new document with the modified date
    const newDataToSave = {
      ...newData,
      date: dateToSave
    };

    const createdData = await DataModel.create(newDataToSave);
    res.json(createdData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});
  
  router.put('/data/:id', async (req, res) => {
    try {
      const{ id }= req.params;
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
      const { id } = req.params;
      await DataModel.findByIdAndRemove(id);
      // const data = await DataModel.find();
      res.json({ message: 'Employee deleted successfully' });
      // res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: `Server error ${error}` });
    }
  });
  
  
module.exports = router;