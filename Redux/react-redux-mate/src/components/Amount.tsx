import { useDispatch } from 'react-redux';
import { useAppSelector } from '../app/hooks';
import { actions as amountActions } from '../features/amount';

export const Amount = () => {
  // const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();//хук повертає посилання на метод dispatch зі store
  const amount = useAppSelector(state => state.amount);//хук, який отримує callback, передає в нього поточний state зі store і повертатий потрібний нас slice, тобто частину state

  const add = (value: number) => dispatch(amountActions.add(value));

  const take = (value: number) => dispatch(amountActions.take(value));

  const clear = () => dispatch(amountActions.clear());

  return (
    <h2 className="amount">
      <span>Amount: {amount}</span>

      <button onClick={() => take(50)}>-50</button>
      <button onClick={() => take(10)}>-10</button>
      <button onClick={clear}>❌</button>
      <button onClick={() => add(10)}>+10</button>
      <button onClick={() => add(50)}>+50</button>
    </h2>
  );
};
