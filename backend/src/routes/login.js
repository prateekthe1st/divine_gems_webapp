const express = require('express');
const db = require('../functions/db');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("welcome to login page");
})

router.get('/dbtest', (req, res) => {
    let stoneProperty = {
        lotNum: 2000035341,
        shape: "Round",
        color: "D",
        clarity: "VVS2",
        weight: 0.3,
        lab: "IGI",
        cutGrade: "Excellent",
        polish: "Excellent",
        symmetry: "Excellent",
        fluor: "None",
        rapPrice: 2800,
        percentOffRap: 83,
        pricePerCt: 476,
        certificateNum: "LG444015272",
        length: 4.28,
        width: 4.31,
        depth: 2.65,
        depthPercent: 61.8,
        tablePercent: 60,
        gridle: "Medium to slightlyt thick (Faceted)",
        cutlet: "Pointed",
        comments: "NONE",
        origin: "LAB CREATED",
        measurement: "4.28x4.31x2.65",
        certImage: "https://s3.amazonaws.com/lgdcertificates/LG444015272.pdf",
        vidLink: "https://s3.amazonaws.com/lgdvideos/LG444015272.html"
    }
    let sql = "INSERT INTO stones SET ?";
    let query = db.query(sql, stoneProperty, (err, result) => {
            if (err) {
                res.send(err)
            }
            console.log(result);
            res.send("Stone added");
    })
})

module.exports = router;
