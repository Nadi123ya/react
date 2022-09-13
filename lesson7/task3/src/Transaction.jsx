import React from "react";
import moment from "moment";

const formatDate = (date) => moment(date).format("MMM Do");
const formatTime = (date) => moment(date).format("hh:mm");
const formatAmount = (amount) => new Intl.NumberFormat("en-GB").format(amount);

// const formatter = new Intl.DateTimeFormat("en", {
//   hour: "2-digit",
//   minute: "2-digit",
//   hour12: false,
// });

// const getTime = (date) => formatter.format(date);

const Transaction = ({ from, to, amount, rate, time }) => {
  return (
    <li className="transaction">
      <span className="transaction__date">{formatDate(time)}</span>
      <span className="transaction__time">{formatTime(time)}</span>
      <span className="transaction__assets">
        {from} → {to}
      </span>
      <span className="transaction__rate">{rate}</span>
      <span className="transaction__amount">{formatAmount(amount)}</span>
    </li>
  );
};

export default Transaction;
