const jwt = require('jsonwebtoken');

const createToken =async()=>{
    const token = await jwt.sign({_id:'65912c61e7f122a1f7e06494'}, "mynameissanjivkumar5@gmail.comdev",{
        expiresIn:"2 seconds"
    });
    console.log(token);

    const userVer=jwt.verify(token,"mynameissanjivkumar5@gmail.comdev");
    console.log(userVer);
}
createToken();