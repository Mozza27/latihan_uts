const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost:27017/latihan_uts'; // Ganti dengan URL MongoDB Anda jika diperlukan

mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));
