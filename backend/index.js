const express = require("express");
const mysql = require("mysql2");

const app = express();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect(err => {
    if (err) {
        console.error("Lỗi kết nối MySQL:", err.message);
        return;
    }
    console.log("Kết nối MySQL thành công");
});

app.get("/", (req, res) => {
    res.send("Backend NodeJS chạy trong Docker");
});

app.listen(3000, () => {
    console.log("Backend running on port 3000");
});