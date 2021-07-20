const express = require('express')
const router = express.Router();
const db = require('./db');

router.get('/table', (req, res) => {
    let sql = 'CREATE TABLE `divine`.`stones` ( `id` INT(6) NOT NULL AUTO_INCREMENT , `lotNum` VARCHAR(15) NOT NULL , `shape` VARCHAR(10) NOT NULL , `color` VARCHAR(20) NOT NULL , `clarity` VARCHAR(8) NOT NULL , `weight` DECIMAL(3,2) NOT NULL , `lab` VARCHAR(7) NOT NULL , `cutGrade` VARCHAR(16) NOT NULL , `polish` VARCHAR(16) NOT NULL , `symmetry` VARCHAR(16) NOT NULL , `fluor` VARCHAR(16) NOT NULL , `rapPrice` INT(6) NOT NULL , `percentOffRap` DECIMAL(4,2) NOT NULL , `pricePerCt` DECIMAL(6,2) NOT NULL , `certificateNum` VARCHAR(32) NOT NULL , `length` DECIMAL(3,2) NOT NULL , `width` DECIMAL(3,2) NOT NULL , `depth` DECIMAL(3,2) NOT NULL , `depthPercent` DECIMAL(4,2) NOT NULL , `tablePercent` DECIMAL(4,2) NOT NULL , `gridle` VARCHAR(64) NOT NULL , `cutlet` VARCHAR(16) NOT NULL , `comments` VARCHAR(256) NOT NULL , `origin` VARCHAR(16) NOT NULL , `measurement` VARCHAR(32) NOT NULL , `certImage` VARCHAR(128) NOT NULL , `vidLink` VARCHAR(128) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;'
    let query = db.query(sql, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send("created stones table")
    })

})

module.exports = router;