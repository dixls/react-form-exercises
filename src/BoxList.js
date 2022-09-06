import React, { useState } from "react";
import Box from "./Box";
import { v4 as uuidv4 } from "uuid";
import NewBoxForm from "./NewBoxForm";

function BoxList() {
    const INITIAL_STATE = [
     
    ]
    const [boxes, setBoxes] = useState(INITIAL_STATE);

    function addBox({backgroundColor, width, height}) {
        const key = uuidv4();
        setBoxes(boxes => [...boxes, { backgroundColor, width, height, key }]);
    }

    return (
        <div className="BoxList">
            <NewBoxForm addBox={addBox} />
            {boxes.map(box => <Box backgroundColor={box.backgroundColor} width={box.width} height={box.height} key={box.key} />)}
        </div>
    )
}

export default BoxList;