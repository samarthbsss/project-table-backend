const mongoose= require('mongoose');

const projectSchema= mongoose.Schema({
    customer:{
        type:String
    },
    contactno:{
        type:Number
    },
    turbineframesr:{
        type:Number
    }
    // project:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"data"
    // }

});

const project= mongoose.model('project', projectSchema);

module.exports= project ;