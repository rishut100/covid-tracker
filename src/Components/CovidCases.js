import React, { Component } from "react";
import Axios from "axios";

import Corona_confirmed from "../assests/corona-confirmed.webp";
import Corona_recovered from "../assests/corona-recovered.jpg";
import Corona_deaths from "../assests/corona-death.jpg";
import "./CovidCases.css";

export default class CovidCases extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmed: 0,
      recovered: 0,
      deaths: 0,
      countryname: "WorldWide",
      countries: [],
    };
    this.getCountryData = this.getCountryData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const resApi = await Axios.get("https://covid19.mathdro.id/api");
    const resCountries = await Axios.get(
      "https://covid19.mathdro.id/api/countries"
    );
    const countries = resCountries.data.countries;
    this.setState({
      confirmed: resApi.data.confirmed.value,
      recovered: resApi.data.recovered.value,
      deaths: resApi.data.deaths.value,
      lastUpdate: resApi.data.lastUpdate.value,
      countries,
    });
  }

  async getCountryData(e) {
    this.setState({
      countryname: e.target.value,
    });
    if (e.target.value === "Worldwide") {
      return this.getData();
    }
    try {
      const res = await Axios.get(
        `https://covid19.mathdro.id/api/countries/${e.target.value}`
      );
      this.setState({
        confirmed: res.data.confirmed.value,
        recovered: res.data.recovered.value,
        deaths: res.data.deaths.value,
      });
    } catch (err) {
      if (err.response.status === 404) {
        this.setState({
          confirmed: "No Data Available",
          recovered: "No Data Available",
          deaths: "No Data Available",
        });
      }
    }
  }

  renderCountryOptions() {
    return this.state.countries.map((country, i) => {
      return <option key={i}>{country.name}</option>;
    });
  }

  render() {
    return (
      <div className="container-fluid p2 my-3">
        <div className="jumbotron jumbotron-fluid text-center justify-content-center bg-dark text-white pt-3 pb-3 px-2 mt-2">
          <h1>Coronavirus Tracker</h1>
          <select
            onChange={this.getCountryData}
            className="select"
            data-style="btn-dark"
            data-live-search="true"
            style={{ width: "200px" }}
          >
            <option>Worldwide</option>
            {this.renderCountryOptions()}
          </select>
          <h2 className="text-centre">
            Country Selected : {this.state.countryname}
          </h2>
        </div>
        <div className="card-deck container-fluid">
          <div
            className="card card-inverse bg-info border border-dark text-center"
            // style={{ width: "300px" }}
          >
            <img
              className="card-img-top"
              src={Corona_confirmed}
              alt="Card image"
            />
            <div className="card-body">
              <h3 className="card-title">Confirmed Cases</h3>
              <p className="card-text">
                <strong>{this.state.confirmed}</strong>
              </p>
              <a
                href="https://www.worldometers.info/coronavirus/"
                className="btn btn-outline-dark"
                target="_blank"
              >
                Live Tracking
              </a>
            </div>
          </div>
          <div
            className="card bg-secondary border border-dark text-center"
            // style={{ width: "300px" }}
          >
            <img
              className="card-img-top"
              src={Corona_recovered}
              alt="Card image"
            />
            <div className="card-body">
              <h3 className="card-title">Total Recovered</h3>
              <p className="card-text">
                <strong>{this.state.recovered}</strong>
              </p>
              <a
                href="https://www.worldometers.info/coronavirus/"
                className="btn btn-outline-light"
                target="_blank"
              >
                Live Tracking
              </a>
            </div>
          </div>
          <div
            className="card bg-danger border border-dark text-center"
            // style={{ width: "300px" }}
          >
            <img
              className="card-img-top"
              src={Corona_deaths}
              alt="Card image"
            />
            <div className="card-body">
              <h3 className="card-title">Total Deceased</h3>
              <p className="card-text">
                <strong>{this.state.deaths}</strong>
              </p>
              <a
                href="https://www.worldometers.info/coronavirus/"
                className="btn btn-outline-success"
                target="_blank"
              >
                Live Tracking
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
