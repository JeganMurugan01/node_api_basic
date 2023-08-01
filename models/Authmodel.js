const { dbcon } = require("../config/dbconfig");
const jwt = require("jsonwebtoken");

const Login = {
  Loginuser(userdata, response) {
    console.log(userdata, "userdata");
    dbcon.query(
      'SELECT * FROM User WHERE Emailid=? AND Password=?',
      [userdata?.Emailid, userdata?.Password],
      (err, result) => {
        if (err) {
          throw err;
        }
        if (result.length > 0) {
          const token = jwt.sign({ Emailid: userdata.Email }, 'AUTH_001', {
            expiresIn: '1h',
          });
          const reftoken = jwt.sign({ Emailid: userdata.Email }, 'ref_secret_key', {
            expiresIn: '1d', 
          });
          response({ token ,reftoken});
        } else {
            response({ message: 'Invalid email or password' });
        }
      }
    );
  },
  reftoken(body,response) {
    console.log(body?.Token,"Body");
    jwt.verify(body?.Token, 'ref_secret_key', (err, decoded) => {
        if (err) {
          response({ message: 'Invalid access token' });
        } else {
            const token = jwt.sign({ Emailid: body.Email }, 'AUTH_001', {
                expiresIn: '1h',
              });
          const reftoken = jwt.sign({ Emailid: decoded.Emailid }, 'ref_secret_key', {
            expiresIn: '1d', 
          });
          response({ token ,reftoken});
        }
      });
    },
}


module.exports = Login;
