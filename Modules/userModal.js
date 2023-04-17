const { default: mongoose } = require("mongoose");
mongoose.connect('mongodb+srv://aryansgnr2003:Arora2345@cluster0.0t1lfp8.mongodb.net/?retryWrites=true&w=majority');
const userSchema = new mongoose.Schema({
    userName: { type: String, unique: true },
    password: String,
    email: String,
    loginHistory: [
        {
            dateTime: Date,
            userAgent: String
        }
    ]
});
const userMode = mongoose.model('User', userSchema)
export default userMode;