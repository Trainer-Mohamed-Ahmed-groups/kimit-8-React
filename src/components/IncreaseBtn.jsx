import React from "react";
// eslint-disable-next-line react/prop-types
function IncreaseBtn({ clickEv }) {
    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    return (
        <button style={{ background: randomColor }} onClick={clickEv}>IncreaseBtn</button>
    )
}
export default React.memo(IncreaseBtn)