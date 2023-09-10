import Post from "@/models/post" 
import connect from "@/utils/db" 

import { NextResponse } from "next/server";



export const GET = async (request)=>{


    try{
         await connect()
     const Posts = await Post.find();
         return new NextResponse ("worked", {status:200});



 return new NextResponse (Posts, {status:200});

    }catch(err){
        return new NextResponse ("eroor", {status:500});

    }
}