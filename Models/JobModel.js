import mongoose  from "mongoose";

const jobSchema = mongoose.Schema({
    user:{
        type:Object,
        required: false,
        ref: "User",
    },
    jobField:{
        type: String,

    },
    
    jobTitle:{
        type:String,
        require:true
    },
    detailRequirement:{
        type:String,
        require:true, 
    },
    projectInfo:{
    
       uploadDate:{type:Date},
       limitTime:{type:String},
       workPlace:{type:String},
       budget:{type:String},
       workingForm:{type:String},
       salaryPaymentMethod:{type:String},
       skillsRequirement:{type:String}
      
    },
    offers:[{
        users:{
            type:mongoose.Schema.Types.Object,
            required: true,
            ref: "User",
        },
        moneyExpect:{type:String},
        timeToComplete:{type:String}
    }]

    
   

},
{
    timestamps:true
}
)

    

    const Job = mongoose.model("Job", jobSchema);

    export default Job