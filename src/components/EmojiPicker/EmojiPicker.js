import React, { useState } from "react";

const EmojiData = ({ chosenEmoji }) => (
  <div style={{ textAlign: "center", marginRight: "810px" }}>
    <br></br>
    <br></br>
    <hr></hr>
    <strong>Names:</strong> {chosenEmoji.names.join(", ")}
    <br />
    <strong>Symbol:</strong> {chosenEmoji.emoji}
    <br />
  </div>
);
export default EmojiData;
