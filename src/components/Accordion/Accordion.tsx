import { type } from "os";
import React from "react";

type AccordionPropsType = {
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering');
    debugger
    if (props.collapsed === true) {
        return (
            <div>
                <AccordionTitle />
            </div>
        );
    } else {
        return (
            <div>
                <AccordionTitle />
                <AccordionBody />
            </div>
        )

    }
    // return (
    //     <div>
    //         <AccordionTitle />
    //         <AccordionBody />
    //     </div>
    // )
}

function AccordionTitle() {
    debugger
    console.log('Accordion rendering');
    return (
        <div>
            <h3>Menu</h3>
        </div>
    )
}

function AccordionBody() {
    debugger
    console.log('Accordion rendering');
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

export default Accordion