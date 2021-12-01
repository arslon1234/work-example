import "./journal.scss";
import journal from "../../assets/images/Rectangle (37).png";
export default function Journal() {
  return (
    <div className="journal">
      <div className="journalItem">
        <div className="journalLeft">
          <span>Refillable</span>
          <span>Discbound</span>
          <span>Journals</span>
          <span>Heirloom quality you'll be</span>
          <span>holding onto for life</span>
          <span>Shop the collection →</span>
          <span></span>
        </div>
        <div className="journalRight">
          <img src={journal} alt="" />
        </div>
      </div>
    </div>
  );
}
