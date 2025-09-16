        import cors from "cors";
import express from "express";
import model from "./model.js";
import mongooseConnect from "./mongo.js";

        const server=express()
        server.use(express.json())

        server.use(cors())
        mongooseConnect()

        server.get("/",async(req,res)=>{
            const fin=await model.find()
            res.send(fin)
        })
        server.post("/",async(req,res)=>{
            const {username,password}=await req.body
            const exist=await model.findOne({username})
            if(exist){
                if(exist.password!=password){
                    return res.send("WRONG PASSWORD")
    
                }
                return res.send("exist") 
            }
            if(!exist){
                return res.send("USER NOT FOUND,PLEASE SIGNUP")
            }
            
        })
        server.post("/signup",async(req,res)=>{
            const {username,password}=await req.body

        
            const exist=await model.findOne({username})
            

            if(exist){
                return res.send("exist") 
            }

            const dd=new model({username,password})
            dd.save()
            res.send("SUCESS")
        
            
        })
        server.post("/home",async(req,res)=>{
            const {username,item}=req.body
            const find=await model.findOne({username});
            await find.todo.push(item)
            await find.save()

        })
        server.get("/home",async(req,res)=>{
            const {username}=req.query
            const t=await model.findOne({username})
            res.send(t.todo)
           

        })
        server.delete("/home",async(req,res)=>{
            const {username,wanttodelete}=req.query
            const del=await model.updateOne({username},{$pull:{todo:wanttodelete}})
            res.send("deleted")
            
            
           

        })

        server.listen(2222,()=>{console.log("SERVER IS RUNNING....");})