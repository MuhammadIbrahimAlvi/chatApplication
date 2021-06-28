import React from "react";
import "./PaymentComp.css";
import Button from "../atoms/Button/Button";
import coin from "../../assets/Coin.svg";
import { useDispatch, useSelector } from "react-redux";
import paymentBuyAction from "../../store/action/paymentBuyAction";
const PaymentCard = (props) => {
  const dispatch = useDispatch();
  //   const amount = useSelector((state) => state.accountCredit);
  const user = useSelector((state) => state.current_user);
  const obj = {
    userData: user,
    walletAmount: props.coins,
  };
  const details = useSelector((state) => state.accountCredit);
  console.log("useSelector Amount details=>", details);
  return (
    <div>
      <div className="carddiv">
        <div className="cardimg">
          <img src={props.img} height="200px" width="100%" />
        </div>
        <div className="cardcoins">
          <span>
            <p>Keemat</p>
          </span>
        </div>
        <div className="cardheadings">
          <Button onClick={() => dispatch(paymentBuyAction(obj))}>
            <img src={coin} />
            {props.coins}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
