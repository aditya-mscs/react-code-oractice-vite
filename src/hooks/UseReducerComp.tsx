import { useReducer } from 'react';
import GoBackToHome from '../components/GoBacktoHome';

// 1️⃣ Define the shape of the state
type State = {
  name: string;
  email: string;
  age: number | '';
  isSubscribed: boolean;
  message: string;
};

// 2️⃣ Define actions
type Action =
  | { type: 'SET_NAME'; payload: string }
  | { type: 'SET_EMAIL'; payload: string }
  | { type: 'SET_AGE'; payload: number | '' }
  | { type: 'TOGGLE_SUBSCRIPTION' }
  | { type: 'SET_MESSAGE'; payload: string };

// 3️⃣ Reducer function
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_AGE':
      return { ...state, age: action.payload };
    case 'TOGGLE_SUBSCRIPTION':
      return { ...state, isSubscribed: !state.isSubscribed };
    case 'SET_MESSAGE':
      return { ...state, message: action.payload };
    default:
      return state;
  }
};

const UseReducerComp = () => {
  // 4️⃣ useReducer hook
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    email: '',
    age: '',
    isSubscribed: false,
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({
      type: 'SET_MESSAGE',
      payload: `User ${state.name} (${state.email}, age ${state.age}) has been ${state.isSubscribed ? 'subscribed' : 'not subscribed'}.`,
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
      <GoBackToHome />
      <h2>User Profile (with useReducer)</h2>

      <label>
        Name:
        <input type="text"
          value={state.name}
          onChange={(e) => dispatch({ type: 'SET_NAME', payload: e.target.value })}
        />
      </label>

      <br />

      <label>
        Email:
        <input type="text"
          value={state.email}
          onChange={(e) => dispatch({ type: 'SET_EMAIL', payload: e.target.value })}
        />
      </label>

      <br />

      <label>
        Age:
        <input
          type="number"
          value={state.age}
          onChange={(e) =>
            dispatch({
              type: 'SET_AGE',
              payload: e.target.value === '' ? '' : parseInt(e.target.value),
            })
          }
        />
      </label>

      <br />

      <label>
        Subscribe:
        <input
          type="checkbox"
          checked={state.isSubscribed}
          onChange={() => dispatch({ type: 'TOGGLE_SUBSCRIPTION' })}
        />
      </label>

      <br />

      <button type="submit">Submit</button>

      <p>{state.message}</p>
    </form>
  );
};

export default UseReducerComp;