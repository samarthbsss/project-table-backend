const express = require('express');
const router = express.Router();
const ProjectModel =require('../model/project.model.js');

router.get('/project', async(req, res)=>{
    try {
        const project =await ProjectModel.find();
        res.json(project)
    } catch (error) {
        console.error(error);
        res.status(500).json({error :'Server error'});
    }
});

router.post('/project', async(req, res)=>{
    try {
        const newData= req.body;
        const createdData =await ProjectModel.create(newData);
        res.json(createdData);
    } catch (error) {
        console.error(error);
        res.status(500).json({error :'Server error'});
    }
});

router.delete('/project/:id', async(req, res)=>{
    try {
        const {id} = req.params
        await ProjectModel.findByIdAndRemove(id);
        res.json({ message: 'Employee deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: `Could not delete project ${error}` });
    }
})

module.exports =router;