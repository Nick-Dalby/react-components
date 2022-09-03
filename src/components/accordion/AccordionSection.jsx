import { useState } from 'react'

const AccordionSection = ({
  question,
  answer,
  active,
  onTitleClick,
  index,
}) => {


  return (
    <section className={active} onClick={() => onTitleClick(index)}>
      <div className="status"></div>
      <div className="container">
        <h3>{question}</h3>
        <div className="info">
          <p>{answer}</p>
        </div>
        <div className="hr" />
      </div>
    </section>
  )
}
export default AccordionSection
