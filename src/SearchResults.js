import React from "react";
import moment from "moment";
const SearchResults = props => {
  const results = props.results;
  return (
    <div>
      <table className="table">
        <tr>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Sure Name</th>
          <th scope="col">Email</th>
          <th scope="col">Room ID</th>
          <th scope="col">Chech in date</th>
          <th scope="col">Check out date</th>
          <th scope="col">Duration</th>
        </tr>
        {results.map(result => {
          const checkIn = result.checkInDate;
          const checkOut = result.checkOutDate;
          const duration = moment(checkOut).diff(moment(checkIn));
          const durationInDays = Math.round(duration / 1000 / 60 / 60 / 24);
          return (
            <tr>
              <td>{result.title}</td>
              <td>{result.firstName} </td>
              <td>{result.surname}</td>
              <td>{result.email}</td>
              <td>{result.roomId}</td>
              <td>{checkIn}</td>
              <td>{checkOut}</td>
              <td>{durationInDays}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default SearchResults;
