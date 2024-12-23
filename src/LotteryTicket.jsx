import LotteryNumber from "./LotteryNumber";
import "./LotteryTicket.css"
export default function LotteryTicket({ ticket }) {
  return (
    <>
      <div className="LotteryTicket">
        <p>Lottery Ticket</p>
        {ticket.map((each, idx) => (
          <LotteryNumber num={each} key={idx} />
        ))}
      </div>
    </>
  );
}
