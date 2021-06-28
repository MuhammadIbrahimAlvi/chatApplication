const paymentBuyAction = (coins) => {
  const amount = coins.walletAmount.replace(/\D/g, "");
  const newObj = {
    userData: { data: coins.userData.user_id },
    userWallet: { walletAmount: amount },
  };

  return (dispatch) => {
    dispatch({ type: "Buy Coins", payload: newObj });
  };
};

export default paymentBuyAction;
