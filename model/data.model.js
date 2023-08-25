const mongoose= require('mongoose');

const dataSchema= mongoose.Schema({
    itemdesc:{
        type:String
    },
    ttlreference:{
        type:String
    },
    hydtest:{
        type:String
    },
    date:{
        type:Date
    },
    project:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"project"
    }

});

const data= mongoose.model('data', dataSchema);

module.exports= data ;
