import React from "react";
import { useSelector } from "react-redux";
import "./Details.style.css";
import InputField from "../atoms/TextField/TextField";
import { Button } from "@material-ui/core";
import Img from "../../assets/moneyTransfer.png";
import coin from "../../assets/Coin.svg";
const Details = () => {
  const totalBalance = useSelector((state) => state.accountCredit);
  console.log(totalBalance);
  return (
    <>
      <div className="parent-div">
        <div className="amount-div">
          <img src={coin} />
          {/* Total Amount={totalBalance.userWallet.walletAmount} */}
        </div>
        <div className="form-div">
          <form>
            <label htmlFor="Reciever Id">Reciever ID</label>
            <input type="text" name="Reciever Id" />
            <br></br>
            <label htmlFor="Amount Transfer">Amount Transfer</label>
            <input type="text" name="Amount Transfer" />
            <br></br>
            <Button>Transfer</Button>
          </form>
        </div>
        <img src={Img} width="350px" height="450px" />
      </div>
    </>
  );
};
export default Details;
