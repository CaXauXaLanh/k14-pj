const mongoose = require('mongoose');


async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/news-Web' , {
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log('Connect thanh cong')
    } catch (error) {
        console.log('That bai')
    }
    

}

module.exports = {connect}