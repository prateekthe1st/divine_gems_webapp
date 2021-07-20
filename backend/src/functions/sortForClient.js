const sortForClient = (result, startingPoint) => {
    list = []
    let count = startingPoint + 1
    result.forEach(entry => {
        let framework = {
            count: count,
            idNum: "DG" + entry.lotNum.substring(entry.lotNum.length-5),
            certificateNum: entry.certificateNum,
            shape: entry.shape,
            '360video': entry.vidLink,
            certificateImage: entry.certImage,
            weight: entry.weight,
            color: entry.color,
            clarity: entry.clarity,
            cut: entry.cutGrade,
            polish: entry.polish,
            symmetry: entry.symmetry,
            rap: entry.rapPrice,
            discount: entry.percentOffRap,
            pricePerCarat: entry.pricePerCt,
            totalPrice: Math.round((entry.pricePerCt * entry.weight)*100)/100,
            lab: entry.lab,
            depthPercentage: entry.depthPercent,
            tablePercentage: entry.tablePercent,
            measurement: entry.measurement
        }
        count += 1
        list.push(framework)
    })

    return list
}

module.exports = sortForClient;