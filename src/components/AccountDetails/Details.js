import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Details.style.css";
import InputField from "../atoms/TextField/TextField";
import { Button } from "@material-ui/core";
import Img from "../../assets/moneyTransfer.png";
import coin from "../../assets/Coin.svg";
import firebase from "../../config/firebase";
import buy_coins_action from "../../store/action/buy_coins_action";

const Details = () => {
  const [transferDetail, settransferDetail] = useState({
    RecieverId: "",
    AmountTransfer: "",
  });

  const totalBalance = useSelector((state) => state.accountCredit);
  const current_user = useSelector((state) => state.current_user.user_id);
  const dispatch = useDispatch();

  const handleData = (e) => {
    settransferDetail({
      ...transferDetail,
      [e.target.name]: e.target.value,
    });
  };
  const clickData = () => {
    firebase
      .database()
      .ref("/")
      .child(`accountdetails/${current_user}`)
      .set(transferDetail)
      .then(() => {
        dispatch(buy_coins_action(transferDetail));
      });
  };

  const amountRendering =
    totalBalance !== undefined &&
    totalBalance.userWallet !== undefined &&
    totalBalance.userWallet.walletAmount !== undefined ? (
      <div className="amount-div">
        <img src={coin} />
        Total Amount={totalBalance.userWallet.walletAmount}
      </div>
    ) : (
      <div>Buy Some Coins First</div>
    );

  return (
    <>
      <div className="parent-div">
        {amountRendering}

        <div className="form-div">
          <form>
            <label htmlFor="RecieverId">Reciever ID</label>
            <input
              type="text"
              name="RecieverId"
              onChange={(e) => handleData(e)}
              value={transferDetail.RecieverId}
            />
            <br></br>
            <label htmlFor="AmountTransfer">Amount Transfer</label>
            <input
              type="number"
              min="1"
              max="100"
              name="AmountTransfer"
              onChange={(e) => handleData(e)}
              value={transferDetail.AmountTransfer}
            />
            <br></br>
            <Button
              onClick={() => {
                if (
                  totalBalance !== undefined &&
                  totalBalance.userWallet !== undefined &&
                  totalBalance.userWallet.walletAmount !== undefined
                ) {
                  dispatch();
                } else {
                  alert("Wallet is Empty");
                }
              }}
            >
              Transfer
            </Button>
          </form>
        </div>
        <img src={Img} width="350px" height="450px" />
      </div>
    </>
  );
};
export default Details;
