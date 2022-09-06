import React, { useState } from "react";

function Box({ backgroundColor, width, height, deleteBox, listId}) {
    const clickHandler = (e) => {
        e.preventDefault();
        deleteBox(listId);
    }
    return (
    <>
        <div style={{ backgroundColor: backgroundColor, width: width, height: height }}>

        </div>
        <button onClick={clickHandler}>X</button>
    </>
    )
}

export default Box;