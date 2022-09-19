import express from 'express';
import User from './Models/UserModel.js';
import users from './data/users.js'
import asyncHandler from 'express-async-handler';
import Job from './Models/JobModel.js';
import jobs from './data/jobs.js';
// them du lieu vao database
const ImportData = express.Router()

ImportData.post("/user", asyncHandler(
    async (req,res) => {
        await User.remove({})
        const importUser = await User.insertMany(users)
        res.send({importUser});
    }
)

);
ImportData.post("/job", asyncHandler(
    async (req,res) => {
        await Job.remove({})
        const importJobs = await Job.insertMany(jobs)
        res.send({importJobs});
    }
)
);

export default ImportData