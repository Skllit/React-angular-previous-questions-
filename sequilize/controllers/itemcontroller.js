const item=require('../models/item');

exports.createitem=async(req,res)=>{
    try{
        const newitem= await item.create(req.body);
        res.status(200).json(newitem);
    }catch{
        res.status(500).json({message:"not created"});
    }
}

exports.getallitems=async(req,res)=>{
    try{
        const items=await item.findAll();
        res.json(items)
    }catch(error){
        res.status(400).json({message:"not found"});
    }
}

exports.findbyiditems=async(req,res)=>{
    try{
        const items=await item.findByPk(req.params.id);
        if(!items){
           return  res.status(400).json({message:"not found"});
        }
        res.json(item);
    }catch{
        res.status(400).json({message:"not found"});
    }
}

exports.updateitem=async(req,res)=>{
    try{
        const items=await item.findByPk(req.params.id);
        if(items){
            const updatedRows = await item.update(req.body);
            res.json(updatedRows);
        }}catch(error){
            res.status(400).json({message:"not found"});
        }

    }

exports.deletebyit=async(req,res)=>{
    try{
        const del=await item.destroy({
            where:{id:req.params.id},
        });
        if(del===0){
            res.status(400).json({message:"not found"});
        }
        res.json({message:"deleted sucess"});

    
    }catch{
        res.status(400).json({message:"not found"});

    }
};
