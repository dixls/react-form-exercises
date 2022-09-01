import React, { useState } from "react";
import Box from "./Box";
import { v4 as uuidv4 } from "uuid";

function BoxList() {
    const [boxes, setBoxes] = useState([]);

    function addBox(backgroundColor, width, height) {
        const key = uuidv4();
        setBoxes([...boxes, { backgroundColor, width, height, key }]);
    }

    return (
        <div class="BoxList">
            {boxes.map(box => <Box backgroundColor={box.backgroundColor} width={box.width} height={box.height} />)}
        </div>
    )
}

export default BoxList;