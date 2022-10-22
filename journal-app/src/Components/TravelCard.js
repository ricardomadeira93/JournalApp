import React from "react";

export default function TravelCard(props) {
  return (
    <div className="travelCard--info">
      <div className="card--location--info">
        <span className="card--country">{props.location}</span>
        <a className="card--link" href={props.googleMapsUrl}>View on Google Maps</a>
      </div>
      <h1 className="card--title">{props.title}</h1>
      <span className="card--date">{props.startDate} - {props.endDate}</span>
      <p className="card--description">{props.description}</p>
    </div>
  );
}
