import React, {useState} from 'react'
import Entry from './Entry';
import './table.scss'

const Table = ({ data }) => {
    const [count, setCount] = useState(1);
    console.log(data);
    if (data.length !== 0){
        return (
            <div className = "table-output-container">
                <table className = "table-main">
                    <thead>
                        <tr>
                            <th> # </th>
                            <th> ID </th>
                            <th> Cert # </th>
                            <th> Shape </th>
                            <th> 360 Video </th>
                            <th> Cert Image </th>
                            <th> Cts </th>
                            <th> Color </th>
                            <th> Clarity </th>
                            <th> Cut </th>
                            <th> Polish </th>
                            <th> Symmetry </th>
                            <th> Rap Price </th>
                            <th> Discount </th>
                            <th> Price / Ct </th>
                            <th> Total Price </th>
                            <th> Lab </th>
                            <th> Depth % </th>
                            <th> Table % </th>
                            <th> Measurement </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(each => (
                            <tr key = {each.count}>
                                <td> {each.count} </td>
                                <td> {each.idNum} </td>
                                <td> {each.certificateNum} </td>
                                <td> {each.shape} </td>
                                <td> <a target = "_blank" href={each['360video']}> 360 </a> </td>
                                <td> <a target = "_blank" href={each.certificateImage}> Certificate </a> </td>
                                <td> {each.weight} </td>
                                <td> {each.color} </td>
                                <td> {each.clarity} </td>
                                <td> {each.cut} </td>
                                <td> {each.polish} </td>
                                <td> {each.symmetry} </td>
                                <td> {each.rap} </td>
                                <td> {each.discount}% </td>
                                <td> $ {each.pricePerCarat} </td>
                                <td> $ {each.totalPrice} </td>
                                <td> {each.lab} </td>
                                <td> {each.depthPercentage}% </td>
                                <td> {each.tablePercentage}% </td>
                                <td> {each.measurement} </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    } else {
        return (
            <div className="no-data-return">
                <h1> No Results. Adjust your parameters. </h1>
            </div>
        )
    }

    
}

export default Table
