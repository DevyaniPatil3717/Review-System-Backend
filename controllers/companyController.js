import companyModel from "../models/Company.js";


export const createCompany=async (req, res) => {
    try {

      const { name, location, industry,email } = req.body;
  
      const companyobj = new companyModel({
        name,
        location,
        industry,
        email
      });

      const savedcompanyobj=await companyobj.save();
      res.json({
          savedcompanyobj,
          message:"Company created successfully"
      })
  
    } catch (error) {
      res.json({
          message:"Server error"
      })
      console.log(error)
    }
  };

  export const getCompany=async(req,res)=>{
    try {
        const getcompany=await companyModel.find()
        res.json({
            getcompany
        })
    } catch (error) {
        res.json({
            error:"Cannot Fetch Data"
        })
        console.log(error)
    }
}