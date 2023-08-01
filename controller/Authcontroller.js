const Loginmodel = require("../models/Authmodel");

const Authlogin = {
    Login(req, res) {
        console.log(req.body);
        const body = {
            Emailid: req.body.Emailid,
            Password: req.body.Password,
        };
        Loginmodel.Loginuser(body, (response) => {
            res.send(response);
        });
    },
    refreshtoken(req,res)
    {
        const body={
            Token: req.body.Token,
        }
            Loginmodel.reftoken(body,(response) => {
                res.send(response);
            })
    }
};
module.exports = Authlogin;
