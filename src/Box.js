import React, { useState } from "react";

function Box({ backgroundColor, width, height, key }) {
    return (
        <div style={{ backgroundColor: backgroundColor, width: width, height: height }} key={key}>

        </div>
    )
}

export default Box;