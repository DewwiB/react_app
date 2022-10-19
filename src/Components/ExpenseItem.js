
import './ExpenseItem.css';
import './ExpenseData';
import ExpenseDate from './ExpenseData';

export default function ExpenseItem(props) {
  
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}/>   
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">£{props.amount}</div>
      </div>
    </div>
  );
}


