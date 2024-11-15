import userModel from "../models/User.js";

export const createAdmin=async (req, res) => {
    try {

      const { name, email, password } = req.body;
  
      const user = new userModel({
        name,
        email,
        password,
        role: "Admin",
      });

      const savedUser=await user.save();
      res.json({
          user:savedUser,
          message:"Admin created successfully"
      })
  
    } catch (error) {
      res.json({
          message:"Server error"
      })
      console.log(error)
    }
  };
  export const createStudent=async (req, res) => {
    try {

      const { name, email, password } = req.body;
  
      const user = new userModel({
        name,
        email,
        password,
        role: "Student",
      });

      const savedUser=await user.save();
      res.json({
          user:savedUser,
          message:"Student created successfully"
      })
  
    } catch (error) {
      res.json({
          message:"Server error"
      })
      console.log(error)
    }
  };
  export const createAlumni=async (req, res) => {
    try {

      const { name, email, password } = req.body;
  
      const user = new userModel({
        name,
        email,
        password,
        role: "Alumni",
      });

      const savedUser=await user.save();
      res.json({
          user:savedUser,
          message:"Alumni created successfully"
      })
  
    } catch (error) {
      res.json({
          message:"Server error"
      })
      console.log(error)
    }
  };

export const getAllUsers=async(req,res)=>{
    try {
        const getusers=await userModel.find()
        res.json({
            getusers
        })
    } catch (error) {
        res.json({
            error:"Cannot Fetch Data"
        })
        console.log(error)
    }
}