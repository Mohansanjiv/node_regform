//install npm i bcryptjs
// after getting data and before saving the data i will use it  in shcema section

const bcrypt = require("bcryptjs");

visitorSchema.pre('save', async function(next){
    if (this.isModified('password')) {
        
        this.password = await bcrypt.hash(this.password, 10);
        
        // Ensure repassword is set to a valid value
        this.repassword = ''; 
    }
    next();
});


