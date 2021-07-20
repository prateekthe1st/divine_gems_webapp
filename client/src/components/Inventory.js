import React, {useState, useEffect} from 'react'
import Bounds from './Inventory/form_mvp/Bounds'
import Checklist from './Inventory/form_mvp/Checklist'
import Table from './Inventory/display_entries/Table'
import PageManipulation from './Inventory/display_entries/PageManipulation'
import '../static/inventory.scss'

const Inventory = () => {
    const [indexIdentifier, setIndexIdentifier] = useState(0)
    const [totalPages, setTotalPages] = useState(0)

    useEffect(() => {
        if (totalPages !== 0) {fetchFromAPI()}
    }, [indexIdentifier])

    const [shape, setShape] = useState({
        Round: false,
        Princess: false,
        Emerald: false,
        Asscher: false,
        Radiant: false,
        Cushion: false,
        Oval: false,
        Heart: false,
        Pear: false,
        RectangleRadiant: false,
        Marquise: false
    })
    const [ct, setCt] = useState ({
        ctLower: 0.00,
        ctUpper: 7.00
    })
    const [perCt, setPerCt] = useState ({
        perCtsLower: 0,
        perCtsUpper: 10000
    })
    const [color, setColor] = useState ({
        D: false,
        E: false,
        F: false,
        G: false,
        H: false,
        I: false,
        J: false,
        K: false,
        KFB: false,
        L: false,
        LFB: false,
        M: false,
        N: false
    })
    const [clarity, setClarity] = useState ({
        IF: false,
        VVS1: false,
        VVS2: false,
        VS1: false,
        VS2: false,
        SI1: false,
        SI2: false,
        I1: false,
        I2: false
    })
    const [cut, setCut] = useState ({
        Ideal: false,
        Excellent: false,
        VeryGood: false,
        Good: false,
        Fair: false,
        NA: false
    })

    const [displayableData, setDisplayableData] = useState([])

    function resetData () {
        setIndexIdentifier(0)
        setDisplayableData([])
    }

    function updateCtParams (newValue) {
        if (newValue[0] === "" ) newValue[0] = 0
        if (newValue[1] === "") newValue[1] = 7
        if (Number.isNaN(parseInt(newValue[0])) || Number.isNaN(parseInt(newValue[1]))) {
            document.querySelector('.num-only').style.display = 'block'
        } else {
            document.querySelector('.num-only').style.display = 'none'
            setCt({
                ctLower: Math.round(newValue[0]*100)/100,
                ctUpper: Math.round(newValue[1]*100)/100
            })
        }

        
    }

    function updatePerCtsParams (newValue) {
        if (newValue[0] === "" ) newValue[0] = 0
        if (newValue[1] === "") newValue[1] = 10000
        if (Number.isNaN(parseInt(newValue[0])) || Number.isNaN(parseInt(newValue[1]))) {
            document.querySelector('.num-only').style.display = 'block'
        } else {
            document.querySelector('.num-only').style.display = 'none'
            setPerCt({
                perCtsLower: newValue[0],
                perCtsUpper: newValue[1]
            })
        }
    }

    function nameToStateMapper (stringName) {
        if (stringName === "Shape") { return shape }
        if (stringName === "Color") { return color }
        if (stringName === "Clarity") { return clarity }
        if (stringName === "Cut") { return cut }
    }

    function adaptStateValue (objectName, event, bool) {
        if (objectName === "Shape") {
            setShape({
                ...shape,
                [event.target.value]: bool
            })
        }       
        if (objectName === "Color") {
            setColor({
                ...color,
                [event.target.value]: bool
            })
            return;
        }
        if (objectName === "Clarity") {
            setClarity({
                ...clarity,
                [event.target.value]: bool
            })
        }
        if (objectName === "Cut") {
            setCut({
                ...cut,
                [event.target.value]: bool
            })
        }
    }

    function updateChecklistState (event, objectName) {
        const stateMatch = nameToStateMapper(objectName)
        if (stateMatch[event.target.value] === false) {
            adaptStateValue(objectName, event, true)
        } else {
            adaptStateValue(objectName, event, false)
        }
    }

    const middlewareReset = (e) => {
        e.preventDefault()
        resetData()
        fetchFromAPI()
    }

    const fetchFromAPI = () => {
        fetch('http://localhost:4000/api/queries', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                indexIdentifier,
                shape,
                ct,
                perCt,
                color,
                clarity,
                cut
            })
        })
            .then(res => res.json())
            .then(data => {
                setTotalPages(data.count[0]['COUNT(*)'])
                setDisplayableData(data.vals)
            })
    }

    const indexIdentifierUpdater = (event) => {
        setIndexIdentifier(indexIdentifier + event.target.getAttribute('change') * 50)
    }

    return (
        <div className = "inventory-page-container">
            <h1 className = "inventory-page-title" > Test. </h1> 

            <div className="inventory-params-container">
                <Checklist updateChecklistState = {updateChecklistState} title = "Shape" list = {["Round", "Princess", "Emerald", "Asscher", "Radiant", "Cushion", "Oval", "Heart", "Pear", "Rectangle Radiant", "Marquise"]} /> 
                
                <Checklist updateChecklistState = {updateChecklistState} title = "Color" list = {["D", "E", "F", "G", "H", "I", "J", "K", "KFB", "L", "LFB", "M", "N"]} />

                <Checklist updateChecklistState = {updateChecklistState} title = "Clarity" list = {["IF", "VVS1", "VVS2", "VS1", "VS2", "SI1", "SI2", "I1", "I2"]} />

                <Checklist updateChecklistState = {updateChecklistState} title = "Cut" list = {["Ideal", "Excellent", "VeryGood", "Good", "Fair", "NA"]} />

                <Bounds stateUpdater = {updateCtParams} title = "Weight" lowerDefault = {0} upperDefault = {7} unit = "Carats" maxLengthForField = {4}/>

                <Bounds stateUpdater = {updatePerCtsParams} title = "Price / Ct" lowerDefault = {0} upperDefault = {10000} unit = {"per Ct"} maxLengthForField = {5} />

                <button onClick = {middlewareReset} className = "sendQuery"> Search </button>
            </div>
            
            <div className="num-only">
                <p className = "num-only-text"> Please enter a number </p>
            </div>

            <Table data = {displayableData} />

            <PageManipulation callback = {indexIdentifierUpdater} current = {indexIdentifier} total = {totalPages} />
        </div>
    )
}

export default Inventory;
