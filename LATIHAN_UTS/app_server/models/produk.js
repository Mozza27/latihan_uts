const mongoose = require('mongoose');

const produkSchema = new mongoose.Schema({
    nama: { type: String, required: true },
    deskripsi: { type: String, required: true },
    harga: { type: Number, required: true },
    stok: { type: Number, required: true },
    kategori_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Kategori' } // Asumsikan ada model Kategori
});

module.exports = mongoose.model('Produk', produkSchema);
