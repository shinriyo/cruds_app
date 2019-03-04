import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      siteName: "",
      siteURL: "",
      sites: [],
      updateId: "",
      updateName: "",
      updateURL: "",
      deleteId: "",
    };
  }

  handleNewNameInput(e) {
    this.setState({ siteName: e.target.value });
  }

  handleNewURLInput(e) {
    this.setState({ updateId: e.target.value });
  }

  handleUpdateNameInput(e) {
    this.setState({ updateName: e.target.value });
  }

  handleUpdateURLInput(e) {
    this.setState({ updateURL: e.target.value });
  }

  handleDeleteIdInput(e) {
    this.setState({ deleteId: e.target.value });
  }

  createData(e) {
    if (this.state.siteName === "" || this.state.siteName === "") return;

    const siteInfo = {
      name: this.state.siteName,
      url: this.state.siteURL,
    };

    const site = this.site.sites;
    site.push(siteInfo);
    this.setState({ sites: sites });
    this.setState({ sites: sites });
  }

  updateData() {
    if (this.state.siteName === "" || this.state.updateName === "" || this.state.upateURL === "") return;

    const sites = this.sites;
    sites[Number(this.state.updateId)] = {
      name: this.state.updateName,
      url: this.state.updateURL,
    };

    this.setState({ site: sites });

    this.setState({ updateId: "" });
    this.setState({ updateName: "" });
    this.setState({ updateURL: "" });
  }

  deleteData() {
    if (this.state.deleteId === "") return;

    const sites = this.sites;
    sites.splice(Number(this.state.deleteId), 1);
    this.setState({ sites: sites });

    this.setState({ deleteId: "" });
  }

  render() {
    return (
      <div>
        <h3>Create Data</h3>
        <div>
          <input value={this.state.siteName} onChange={this.handleNewNameInput.bind(this)} placeholder="Site Name" />
        </div>
        <div>
          <input value={this.state.siteURL} onChange={this.handleNewURLInput.bind(this)} placeholder="Site Name" />
        </div>
        <button onClick={this.createData.bind(this)}>Create</button>
        <hr />
        <h3>Read data</h3>
          
        <ul>
          {this.state.sites.map(site => {
            return (
              <li key={site.id}>
                {site.id}
                {site.name}
                {site.url}
              </li>
            );
          })}
                  
        </ul>
               
        <hr />
        <h3>Update data</h3>
        <div>
          <input value={this.state.updateId} onChange={this.handleUpdateIdInput.bind(this)} placeholder="ID" />
        </div>
        <div>
          <input
            value={this.state.updateName}
            onChange={this.handleUpdateNameInput.bind(this)}
            placeholder="SiteName"
          />
        </div>
        <div>
          <input value={this.state.updateURL} onChange={this.handleUpdateURLInput.bind(this)} placeholder="SiteURL" />
        </div>
        <button onClick={this.updateData.bind(this)}>Update</button>
        <hr />
         <h3>Delete data</h3>       
        <div>
          <input value={this.state.deleteId} onChange={this.handleDeleteIdInput.bind(this)} placeholder="ID" />
        </div>
        <button onClick={this.deleteData.bind(this)}>Delete</button>
      </div>
    );
  }
}

export default App;
