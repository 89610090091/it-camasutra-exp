// import React from "react";


type AccordionPropsType = {
    title: string
}

function Accordion(props: AccordionPropsType) {
    debugger
    console.log('Accordion rendering');
    return (
        <div>
            {/* <AccordionTitle title={props.title} /> */}
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

function AccordionBody(props: any) {
    console.log('Accordion rendering');
    return (
        <div>
            <h1>{props.title}</h1>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

export default Accordion