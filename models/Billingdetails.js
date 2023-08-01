const { dbcon } = require("../config/dbconfig.js");

const User = {
    getuser(data) {
        dbcon.query("SELECT * FROM `User` u", (err, res) => {
            if (err) throw err;
            else data(res);
        });
    },
    createuser(userdata, data) {
        dbcon.query("select * from User where Emailid = ?", userdata?.Emailid, (err, res) => {
            if (err) throw err;
            if (res.length > 0) {
                data({ Error: "User already exists" });
            } else {
                const emailRegexp =
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
                if (emailRegexp.test(userdata?.Emailid)) {
                    dbcon.query("INSERT INTO User SET ?", userdata, (err, res) => {
                        if (err) throw err;
                        if (res) data({ Data: "User Created Successfully" });
                    });
                } else {
                    data({ Error: "Email id must be valid" });
                }
            }
        });
    },
    finduser(userid, res) {
        dbcon.query("SELECT * FROM User WHERE ?", userid, (err,response) => {
            if (err) throw err;
            
            res(response);
        });
    },
};

module.exports = User;
