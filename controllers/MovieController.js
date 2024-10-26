import prisma from "../DB/db.config.js";

export const index = async (req, res) => {
  const movies = await prisma.movie.findMany({
    select: {
     name:true
   }
 })
 res.status(200).json({success:true,movies})
}



export const sotre = async (req,res) => {
  const {name } = req.body;
  const movie = await prisma.movie.create({
    data: {
      name
    } 
  })

  return res.json({status:200,movie,message:"Movie added successfully"})
}