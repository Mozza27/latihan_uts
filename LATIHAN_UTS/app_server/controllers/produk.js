const Produk = require('../models/produk');

// Menampilkan semua produk
exports.index = async (req, res) => {
    const produk = await Produk.find();
    res.render('produk/index', { produk });
};

// Menambahkan produk baru
exports.create = async (req, res) => {
    const { nama, deskripsi, harga, stok, kategori_id } = req.body;
    const produk = new Produk({ nama, deskripsi, harga, stok, kategori_id });
    await produk.save();
    res.redirect('/produk');
};

// Mengedit produk
exports.edit = async (req, res) => {
    const produk = await Produk.findById(req.params.id);
    res.render('produk/edit', { produk });
};

// Mengupdate produk
exports.update = async (req, res) => {
    const { nama, deskripsi, harga, stok, kategori_id } = req.body;
    await Produk.findByIdAndUpdate(req.params.id, { nama, deskripsi, harga, stok, kategori_id });
    res.redirect('/produk');
};

// Menghapus produk
exports.delete = async (req, res) => {
    await Produk.findByIdAndDelete(req.params.id);
    res.redirect('/produk');
};
