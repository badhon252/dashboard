const ActivityHeader = () => {
  return (
    <div className="activity_header d-flex">
      <h4 className="mx-5">30 Days DNS Activity Trend</h4>
      <div className="activity_header_right">
        <form action="">
          <select id="months" name="months">
            <option value="January">This Months</option>
            <option value="Februery">Februery</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default ActivityHeader;
