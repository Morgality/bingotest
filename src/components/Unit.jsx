import { useState } from "react"
import './BoardUnit.css'

function Unit({
    textValue, 
    setItem, 
    // setCountCheck
}) 
{

    const [isChecked, check] = useState(false);
    
    return (
        <div
            className={`board--unit ${!isChecked ? "board--unit--unchecked" : "board--unit--checked"}`}
            onClick={()  => {                
                check(!isChecked);

                setItem(textValue)
            }}
        >
            {textValue}
        </div>
    )
}

export default Unit