import React, { useState } from 'react';
import styled from 'styled-components';
import GoBackToHome from './GoBacktoHome';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin: 24px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const SelectAllButton = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  border-radius: 4px;
  background-color: #333;
  color: #fff;
  cursor: pointer;
  margin-top: 24px;

  &:hover {
    opacity: 0.8;
  }
`;

const CheckboxList = () => {
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, label: 'Dogs', checked: false },
    { id: 2, label: 'Cats', checked: false },
    { id: 3, label: 'Cows', checked: false },
    { id: 4, label: 'Deers', checked: false },
  ]);

  const handleSelectAll = (action: string) => {
    setCheckboxes(checkboxes.map(box => ({ ...box, checked: action === 'select' ? true : false })));
  }

  const handleCheckboxChange = (id: number) => {
    setCheckboxes(
      checkboxes.map(box => {
        if (box.id === id) return { ...box, checked: !box.checked }
        else return box;
      })
    );
  }

  return (
    <Container>
      <GoBackToHome />
      <CheckboxContainer data-testid="checkbox-container">
        {checkboxes.map((checkbox, index) => (
          <CheckboxLabel key={checkbox.id}>
            <input
              data-testid={`checkbox-${index + 1}`}
              type="checkbox"
              checked={checkbox.checked}
              onChange={() => handleCheckboxChange(checkbox.id)}
            />
            {checkbox.label}
          </CheckboxLabel>
        ))}
      </CheckboxContainer>
      <SelectAllButton data-testid="button" onClick={() => handleSelectAll('select')}>Select All</SelectAllButton>
      <SelectAllButton data-testid="button2" onClick={() => handleSelectAll('deselect')}>Deselect All</SelectAllButton>
    </Container>
  );
};



export default CheckboxList;
