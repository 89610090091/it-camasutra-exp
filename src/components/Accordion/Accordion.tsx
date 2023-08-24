// import React from "react";

type AccordionPropsType = {
    title: string
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
    debugger
    console.log('Accordion rendering');
    return (
        <div>
            <AccordionTitle title={props.title} />
            <AccordionBody />
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    debugger
    console.log('Accordion rendering');
    return (
        <div>
            <h3>{props.title}</h3>
        </div>
    )
}

type AccordionBodyPropsType = {

} // дописать protoType AccordionBody

function AccordionBody(props: any) {
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