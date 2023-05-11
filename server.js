import express from "express";
import dotenv from "dotenv";
dotenv.config()

const app = express();
const port = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.get('/biodata', (req, res) => {
    const { nama, 'tempat-lahir': tempatLahir, 'tanggal-lahir': tanggalLahir, alamat } = req.query;
    res.send(`
        <h1 style="font-family: Arial;">
            nama: ${nama}<br/>
            tempat-lahir: ${tempatLahir}<br/>
            tanggal-lahir: ${tanggalLahir}<br/>
            alamat: ${alamat}
        <h1/>
    `)
})

app.post('/biodata', (req, res) => {
    res.send(req.body)
})

app.listen(port, () => {
    console.log(`app listening on port: ${port}`)
})