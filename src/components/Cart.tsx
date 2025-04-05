
import React, { useState } from 'react';
import GoBackToHome from './GoBacktoHome';

interface CartItem {
  id: number;
  name: string;
  quantity: number;
}

const initialItems: CartItem[] = [
  { id: 1, name: 'T-Shirt', quantity: 0 },
  { id: 2, name: 'Jeans', quantity: 0 },
  { id: 3, name: 'Shoes', quantity: 0 }
];

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([...initialItems]);
  // console.log(cart);

  const updateCart = (action: string, itemId: number) => {
    const updatedCart = cart.map(item => {
      if(item.id === itemId) {
        return {
          ...item,
          quantity: action === 'add' ? item.quantity + 1: item.quantity === 0? 0 : item.quantity - 1
        }
      } else {
        return item;
      }
    });
    return updatedCart;
  }

  const addItem = (e: React.MouseEvent<HTMLButtonElement>) => { //Remeber  React.MouseEvent<HTMLButtonElement>
    const elm = (e.target as HTMLButtonElement)                 //(e.target as HTMLButtonElement) same as above
    const itemId = Number(elm.dataset?.testid?.split('-')[1]); //__dataset  :  data-testid --> elm.dataset?.testid
    console.log('elm, itemId:', elm, itemId);
    setCart( updateCart('add', itemId));
  }
  const removeItem = (e: React.MouseEvent<HTMLButtonElement>) => {
    const elm = (e.target as HTMLButtonElement)
    const itemId = Number(elm.dataset?.testid?.split('-')[1]);
    console.log('elm, itemId:', elm, itemId);
    setCart( updateCart('remove', itemId));
  }

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div>
      <GoBackToHome />
      <h2 data-testid="total">Total Items: {getTotalItems()}</h2>
      <div>
        {cart.map(item => (
          <div key={item.id} data-testid={`item-${item.id}`}>
            <span>{item.name}</span>
            <span>Quantity: {item.quantity}</span>
            <button
              type="button"
              data-testid={`remove-${item.id}`}
              onClick={removeItem}
              disabled={item.quantity === 0}
            >
              -
            </button>
            <button
              type="button"
              data-testid={`add-${item.id}`}
              onClick={addItem}
            >
              +
            </button>
          </div>
        ))}
      </div>
      <div>
      Common Event Types in React:
      <ul>
        <li><b>React.MouseEvent</b>: Mouse interactions (click, hover, move). Examples: <b>onClick</b>, <b>onMouseEnter</b>, <b>onMouseMove</b>.</li>
        <li>React.KeyboardEvent: Keyboard interactions. Examples: onKeyDown, onKeyPress, onKeyUp.</li>
        <li>React.ChangeEvent: Change events for input elements. Examples: onChange in "input, textarea, select".</li>
        <li>React.FormEvent: Form submission and input events. Examples: onSubmit, onInput.</li>
        <li>React.FocusEvent: Focus/blur events. Examples: onFocus, onBlur.</li>
        <li>React.DragEvent: Drag and drop interactions. Examples: onDragStart, onDragOver, onDrop.</li>
        <li>React.WheelEvent: Scroll wheel interactions. Example: onWheel.</li>
        <li>React.TouchEvent: Touch interactions (mobile devices). Examples: onTouchStart, onTouchMove, onTouchEnd.</li>
        <li>React.ClipboardEvent: Clipboard interactions (copy, paste). Examples: onCopy, onCut, onPaste.</li>
        <li>React.SyntheticEvent: Base event for all React events. Used when the event type is not specified.</li>
      </ul>
      </div>
    </div>
  );
}