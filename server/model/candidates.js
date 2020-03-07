const express=require('express');
const mongoose=require('mongoose');

const Candidates=mongoose.model('Candidates',new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
       
    },
    mobileNumber:{
        type:Number,
        required:true,
       
    },
    currentCTC:{
        type:Number,
        required:true
    },
    expectedCTC:{
        type:Number,
        required:true
    },
    experience:{
        type:Number,
        required:true
    },
    skills:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }
       
}))

exports.Candidates=Candidates;

