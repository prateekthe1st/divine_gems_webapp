const express = require('express')
const router = express.Router()
const db = require('../functions/db')
const fs = require('file-system')
const csvParser = require('csv-parser')
const db_init = require('../functions/db_init')
const queries = require('./queries')

router.get('/', (req, res) => {
    res.send("hello, world")
})

router.post('/', (req, res) => {
    res.json({
        code: 100
    })
})

router.get('/updatingAll', (req, res) => {
    /*let sql = "DELETE FROM stones WHERE shape = 'round'";
    let query = db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        }
        console.log(result);
    }) */
    res.send("here is where we will have the entire db updated with all the stones")
    const filepath = './src/records/full_list.csv'
    fs.createReadStream(filepath)
        .pipe(csvParser())
        .on('data', (row) => {
            let tempArr = []
            for (const entries in row) {
                tempArr.push(row[entries]);
            }
            let dbReady = {
                lotNum: tempArr[0],
                shape: tempArr[1],
                color: tempArr[2],
                clarity: tempArr[3],
                weight: tempArr[4],
                lab: tempArr[5],
                cutGrade: tempArr[6],
                polish: tempArr[8],
                symmetry: tempArr[8],
                fluor: tempArr[9],
                rapPrice: tempArr[10],
                percentOffRap: tempArr[11],
                pricePerCt: tempArr[12],
                certificateNum: tempArr[13],
                length: tempArr[14],
                width: tempArr[15],
                depth: tempArr[16],
                depthPercent: tempArr[17],
                tablePercent: tempArr[18],
                gridle: tempArr[19],
                cutlet: tempArr[20],
                comments: tempArr[21],
                origin: tempArr[22],
                measurement: tempArr[23],
                certImage: tempArr[24],
                vidLink: tempArr[25],
            }
            let sql = "INSERT INTO stones SET ?";
            let query = db.query(sql, dbReady, (err, result) => {
                if (err) {
                    console.log(err)
                }
                console.log(result)
            })
        })
        .on('end', () => {
            console.log("Finished parsing CSV file")
        })
})

router.use('/data/reset', db_init)
router.use('/queries', queries)

const login = require('./login')
const { route } = require('./login')
router.use('/login', login)

module.exports = router