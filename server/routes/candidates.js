const express=require('express');
const mongoose=require('mongoose');

const customerRouter=express.Router();
const {Candidates}=require('../model/candidates');

customerRouter.route('/').post(async(req,res)=>{
    let candidate=new Candidates({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        mobileNumber:req.body.mobileNumber,
        currentCTC:req.body.currentCTC,
        expectedCTC:req.body.expectedCTC,
        experience:req.body.experience,
        skills:req.body.skills,
        address:req.body.address
    })
    candidate=await candidate.save()
    .then(candidate=>{
        return res.status(200).json({
            status:"200",
            message:"candidate data added Successfully",
            data:candidate
        })
    }).catch(error=>{
        return res.status(400).json({
            Response:error            
        })
    })
})

module.exports=customerRouter;
