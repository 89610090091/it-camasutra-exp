import { type } from "os";
import React from "react";

type AccordionPropsType = {
    title: string
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
    debugger
    console.log('Accordion rendering');

    // return (
    //     <div>
    //         <AccordionTitle title={props.title} />
    //         <AccordionBody />
    //     </div>
    // )
    if (props.collapsed === true) {
        return (
            <div>
                <AccordionTitle title={props.title} />
            </div>
        );
    } else {
        return (
            <div>
                <AccordionTitle title={props.title} />
                <AccordionBody />
            </div>
        )
    }
}

type AccordionTitlePropsType = {
    title: string
}
function AccordionTitle(props: any) {
    debugger
    console.log('Accordion rendering');
    return (
        <div>
            <h3>{props.title}</h3>
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