import express from "express";
import asyncHandler from "express-async-handler";
import protect from "../Middware/AuthMiddleware.js";
import Job from "../Models/JobModel.js";
import generateToken from "../utils/generateToken.js";
import User from "./../Models/UserModel.js";

const jobRoute = express.Router();
//Post job
jobRoute.post(
    "/",
    asyncHandler(async (req, res) => {

        const {user,jobField, jobTitle,detailRequirement,projectInfo : {
                    uploadDate,
                    limitTime,
                     workPlace,
                     budget,
                    workingForm,
                    salaryPaymentMethod,
                    skillsRequirement
        }, 
       
        
    } = req.body;
        const job = new Job({
            user,
            jobField,
            jobTitle,
            detailRequirement,
            projectInfo : {
                uploadDate,
              limitTime,
               workPlace,
               budget,
              workingForm,
              salaryPaymentMethod,
              skillsRequirement
            },
          
           
        });
        if(job){
            const createJob = await job.save();
            res.status(201).json(createJob)
        }
        else{
            res.status(400);
            throw new Error("Invalid job data");
        }
    
}));
jobRoute.get(
    "/",
    
    asyncHandler(async (req, res) => {
     
        const keyword = req.query.keyword ? {
            jobTitle:{
                $regex: req.query.keyword,
                $options: "i"
            }
        }
        :{
            
        };
      
        const jobs = await Job.find({ ...keyword })
        res.json(jobs)
    })
);

// lấy từng sản phẩm
jobRoute.get(
    "/:id",
    asyncHandler(async (req, res) => {
        const job = await Job.findById(req.params.id);
        if(job){
            res.json(job);
        }else{
            res.status(404);
            throw new Error("Không tìm thấy sản phẩm");
        }   
    })
);
        

 // Ung tuyen cong viec
 jobRoute.put(
    "/:id/apply",
    asyncHandler(async (req, res) => {
        
       
          
            const job = await Job.findById(req.params.id);
  
            if(job){
                
                 job.applyTime = Date.now();
                 job.offers.push({
            
                    users:req?.body?.users,
                    applyTime:req?.body?.applyTime,
                    moneyExpect : req?.body?.moneyExpect,
                    timeToComplete: req?.body?.timeToComplete,
                });

                 const updatedJob = await job.save()
                 res.json(updatedJob);

              }
              
        
            
            }
));
export default jobRoute;