import { useState } from 'react'
import Dropdown from '../components/dropdown/Dropdown'
import Title from '../components/title/Title'

const options = [
  {
    label: 'Dogs',
    value: 'dogs',
  },
  {
    label: 'Cats',
    value: 'cats',
  },
  {
    label: 'Manatees',
    value: 'manatees',
  },
]

export const DropdownPage = () => {
  const [selected, setSelected] = useState(options[0])

  console.log(selected);
  return (
    <>
    <Title title={'Dropdown'} />
    <Dropdown
      label="Pick your favorite animal:"
      options={options}
      selected={selected}
      onSelectedChange={setSelected}
      />
      </>
  )
}
export default DropdownPage
