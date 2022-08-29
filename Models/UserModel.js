import mongoose  from "mongoose";
import bcrpyt from "bcryptjs";
const userSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true,

    },
    password:{
        type:String,
        require:true,
    },
    dateOfBirth:{
        type:Date,
        require: false,
    },
    gender:{
        type:String,
        require: false
    },
    isActive:{
        type:Boolean,
        require: false
    },
    contactNumber:{
        type:String,
        require:false
    },
    userImage:{
        type:String,
        require: false
    },
    lastLoginDate:
    {
        type:Date,
        require: false
    },
    lastJobApply:{
        type: String,
        require: false
    },
    usersDetails : {
        type: Object,
        require: false
    },
    workDetails:{
        type: Object,
        require: false
    },
    workExperiences:{
        type: Array,
        require: false
    },
    isAdmin:{
        type:Boolean,
        require:true,
        default: false
    }

},
{
    timestamps:true
}
)

    //Login
    userSchema.methods.matchPassword = async function(enterPassword){
        return await bcrpyt.compare(enterPassword,this.password);
    };

    //Register
    userSchema.pre("save", async function(next){
        if(!this.isModified("password")){
            next();
        }
        const salt = await bcrpyt.genSalt(10)
        this.password = await bcrpyt.hash(this.password,salt);
    });

    const User = mongoose.model("User", userSchema);

    export default User