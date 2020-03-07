const express=require('express');
const mongoose=require('mongoose');

const customerRouter=express.Router();
const {Customers}=require('../model/customers');

customerRouter.route('/').post(async(req,res)=>{
    let customer=new Customers({
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
    customer=await customer.save()
    .then(customer=>{
        return res.status(200).json({
            status:"200",
            message:"Customers data added Successfully",
            data:customer
        })
    }).catch(error=>{
        return res.status(400).json({
            Response:error            
        })
    })
})

module.exports=customerRouter;
