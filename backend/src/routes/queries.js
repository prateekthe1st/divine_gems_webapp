const express = require('express')
const router = express.Router()
const db = require('../functions/db')
const queryCompactor = require('../functions/queryCompactor')
const priceAdjustment = require('../functions/priceAdjustment')
const sortForClient = require('../functions/sortForClient')

router.get('/', (req, res) => {
    res.send("test")
})

router.post('/', (req, res) => {
    let info = {
        vals: [],
        count: 0
    }
    let sql = `SELECT * FROM stones WHERE shape in (${queryCompactor(req.body.shape)}) AND weight <= ${req.body.ct.ctUpper} AND weight >= ${req.body.ct.ctLower} AND pricePerCt <= ${req.body.perCt.perCtsUpper} AND pricePerCt >= ${req.body.perCt.perCtsLower} AND color in (${queryCompactor(req.body.color)}) AND clarity in (${queryCompactor(req.body.clarity)}) AND cutGrade in (${queryCompactor(req.body.cut)}) LIMIT ${req.body.indexIdentifier},${50};`
    db.query(sql, (err, result) => {
        if (err) { res.send("An error occurred") }
        info.vals = sortForClient(priceAdjustment(result), req.body.indexIdentifier);
    })

    sql = `SELECT COUNT(*) FROM stones WHERE shape in (${queryCompactor(req.body.shape)}) AND weight <= ${req.body.ct.ctUpper} AND weight >= ${req.body.ct.ctLower} AND pricePerCt <= ${req.body.perCt.perCtsUpper} AND pricePerCt >= ${req.body.perCt.perCtsLower} AND color in (${queryCompactor(req.body.color)}) AND clarity in (${queryCompactor(req.body.clarity)}) AND cutGrade in (${queryCompactor(req.body.cut)});`
    db.query(sql, (err, result) => {
        if (err) { res.send("An error occurred") }
        info.count = result
        res.send(info) 
    })
})

module.exports = router