import { useState } from "react"
import data from "./data"
import './styles.css'

export default function Accordian() {
    const [selected, setSelected] = useState(null)
    const [enableMultiSelection, setEnableMultiSelection] = useState(false)
    const [multiple, setMultiple] = useState([])

    function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId)
    }

    function handleMultiSelection(getCurrentId) {
        let copyMulitple = [...multiple]
        const findIndexOfCurrentId = copyMulitple.indexOf(getCurrentId)

        if(findIndexOfCurrentId === -1) copyMulitple.push(getCurrentId)
        else copyMulitple.splice(findIndexOfCurrentId, 1)

        setMultiple(copyMulitple)
    }
    console.log(selected, multiple);

    return (
        <div className="acc-wrapper">
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
                Enable Multi Selection
            </button>
            <div className="accordian">
                {
                    data && data.length > 0 
                    ? data.map(dataItem => 
                        <div className="item" key={dataItem.id}>
                            <div 
                                className="title" 
                                onClick={enableMultiSelection ? 
                                () => handleMultiSelection(dataItem.id) : 
                                () => handleSingleSelection(dataItem.id)}
                            >
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {
                                enableMultiSelection
                                    ? multiple.indexOf(dataItem.id) !== -1 && (
                                        <div className="content">{dataItem.answer}</div>
                                    )
                                    : selected === dataItem.id && (
                                        <div className="content">{dataItem.answer}</div>
                                    )
                            }
                        </div>
                    )
                    : <div>No data found</div>
                }
            </div>
        </div>
    )
}