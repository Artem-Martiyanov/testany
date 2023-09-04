import * as React from 'react';
import {useState} from "react";
import {StyledSelect} from "./styles";


type Element = {
  title: string,
  value: string,
  isDisabled?: boolean
}


type Props = {
  title: string,
  elements: Element[],
  defaultValue?: string
  onSelect: (selectedElement: Element) => void
}

const Dropdown = ({title, elements, defaultValue, onSelect}: Props) => {
  const [filterType, setFilterType] = useState(defaultValue)

  return (
    <StyledSelect
      defaultValue={filterType || 'disabled'}
      onChange={(evt) => {
        setFilterType(elements[evt.target.options["selectedIndex"] - 1].value)
        onSelect(elements[evt.target.options["selectedIndex"] - 1])
      }}
    >
      <option value='disabled' disabled={true}>{title}</option>
      {elements.map(element => <option
        value={element.value}
        disabled={element.isDisabled || false}
        key={element.title}
      >{element.title}</option>)}
    </StyledSelect>
  );
};

export enum FilterType {
  NAME = 'name',
  PRICE = 'price',
  RATING = 'rating'
}

export default Dropdown;
