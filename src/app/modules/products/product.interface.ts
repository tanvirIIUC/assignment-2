import { Schema, model, connect } from 'mongoose';

export type Guardian ={
    
    fatherName:string;
    fatherContactNo:string;
    motherName:string;
    motherContactNo:string;
}
export type UserName ={
    
    firstName:string;
    middleName:string;
    lastName:string;
   
}

export type Student = {
  id:string
  name:UserName;
  contactNo : string;
  guardianNo:string;
  gender: 'male'| 'female';
  dateOfBirth : string;
  email: string;
  presentAddress:string;
  permanentAddress:string;
  bloodGroup?: '+A' | '+B' | '+AB' | '+O'|'-A' | '-B' | '-AB' | '-O';
  guardian:Guardian;
  isActive:'active'|'blocked'
}