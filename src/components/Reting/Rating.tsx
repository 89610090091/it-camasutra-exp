import React from "react";

// function sum(a: number, b: number) {
//     alert(a + b);
// }

// sum(23, 34);

export function Rating() {
    console.log('Rating rendering');
    return (
        <div>
            <Star selected={true} />
            <Star selected={true} />
            <Star selected={false} />
            <Star selected={false} />
            <Star selected={false} />
        </div>
    )
}

function Star(props: any) {
    console.log('Star rendering');
    return <span><b>Star </b></span>
}

// export default Rating