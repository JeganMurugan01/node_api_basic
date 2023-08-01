const usermodel = require("../models/Billingdetails");
const usercontroller = {
    getallusers(req, res) {
        usermodel.getuser((users) => {
            res.json(users);
        });
    },
    postnewuser(req, res) {
        const userdata = {
            Emailid: req.body.Email,
            Password: req.body.Password,
            Firstname: req.body.FirstName,
            Lastname:req.body.LastName
        };
        usermodel.createuser(userdata, (response) => {
            res.send(response);
        });
    },
    finduser(req,response)
    {
        const userid ={Emailid:req.body.Emailid}
        usermodel.finduser(userid,(res)=>{
            response.send(res)
        })
    }
};
module.exports = usercontroller;
