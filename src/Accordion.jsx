import { useState } from "react";

function AccordionAnswer({ answer, isActive }) {
    return (
        <>
            {isActive && <p>{answer}</p>}
        </>
    )
}

function AccordionQuestion({ subject, question, onToggle, isActive}) {
    return (
        <div className="header">
                <h2>{subject}</h2>
            <div className="subtitle" onClick={onToggle}>
                <p>{question}</p>
                <span>{ isActive ? '-' : '+'}</span>
            </div>
        </div>
    )
}

function Heading() {
    return (
        <h1 className="heading">Accordion</h1>
    )
  }

function AccordionItem({ item, isActive, onToggle}) {

    const {subject, question, answer} = item

    return (
        <div>
           <div className="container">
                <AccordionQuestion
                    subject={subject}
                    question={question}
                    onToggle={onToggle}
                    isActive={isActive}
                />
                <AccordionAnswer
                    answer={answer}
                    isActive={isActive}
                />
           </div>
        </div>
    )
}

function Accordion({ items }) {
    const [activeIndex, setActiveIndex] = useState(null)

    function handleClick(index) {
        setActiveIndex(activeIndex === index ? null : index)
    }

    return(
        <div>
            <Heading />

            {items.map((item, index) => (
                <AccordionItem 
                    key={index}
                    item={item}
                    isActive={index === activeIndex}
                    onToggle={() => handleClick(index)}
                />
            ))}
        </div>
    )
}

export default Accordion