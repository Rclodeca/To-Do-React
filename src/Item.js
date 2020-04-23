import React from 'react';

const Item = ({value, index, removeItem}) => {
    return (
        <div>
            <p style={{display: "inline-block"}}>{value}</p>
            <button onClick={() => removeItem(index)}>delete</button>
        </div>
    );
}

export default Item;