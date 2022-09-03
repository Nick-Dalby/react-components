import { useState } from 'react'
import './accordion.css'
import AccordionSection from './AccordionSection'

const data = [
  {
    question: 'This is a question?',
    answer:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur quibusdam deleniti soluta ex autem ipsum molestias minima debitis nihil dolores consequuntur, sequi quo repudiandae obcaecati ducimus tenetur saepe dolor ea!',
  },
  {
    question: 'This is another question?',
    answer:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur quibusdam deleniti soluta ex autem ipsum molestias minima debitis nihil dolores consequuntur, sequi quo repudiandae obcaecati ducimus tenetur saepe dolor ea!',
  },
  {
    question: 'This is yet another question?',
    answer:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur quibusdam deleniti soluta ex autem ipsum molestias minima debitis nihil dolores consequuntur, sequi quo repudiandae obcaecati ducimus tenetur saepe dolor ea!',
  },
]

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const onTitleClick = (index) => {
    if (activeIndex !== index) {
      setActiveIndex(index)
    } else {
      setActiveIndex(null)
    }
  }

  return (
    <>
      {data.map((item, index) => {
        const active = index === activeIndex ? 'opened' : ' '

        return (
          <AccordionSection
            onTitleClick={onTitleClick}
            index={index}
            active={active}
            question={item.question}
            answer={item.answer}
            key={index}
          />
        )
      })}
    </>
  )
}
export default Accordion
