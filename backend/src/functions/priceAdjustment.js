const priceAdjustment = (results) => {
    results.forEach(entry => {
        entry.percentOffRap -= 4.00
        entry.pricePerCt = ((100.00 - entry.percentOffRap) * entry.rapPrice) / 100;
    })

    return results;
}

module.exports = priceAdjustment