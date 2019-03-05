import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { siteName: "", siteURL: "", sites: [], updateId: "", updateName: "", updateURL: "", deleteId: "" };
  }

  handleNewNameInput(e) {
    this.setState({ siteName: e.target.value });
  }

  handleNewURLInput(e) {
    this.setState({ siteURL: e.target.value });
  }

  handleUpdateIdInput(e) {
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

  componentDidMount() {
    fetch("http://localhost:3000/sites")
      .then(res => res.json())
      .then(data => {
        this.setState({ sites: data });
      })
      .catch(err => console.log(err));
  }

  createData() {
    if (this.state.siteName === "" || this.state.siteURL === "") return;
    constsiteInfo = {
      name: this.state.siteName,
      url: this.state.siteURL,
    };

    fetch("http://localhost:3000/sites", {
      method: "POST",
      headers: {
        Contenttype: "application/json",
      },
      body: JSON.stringify(siteInfo),
    })
      .then(res => res.json())
      .then(data => {
        constsites = this.state.sites;
        sites.push(data);
        this.setState({ sites: sites });
        this.setState({ siteName: "" });
        this.setState({ siteURL: "" });
      })
      .catch(err => console.log(err));
  }

  updateData() {
    if (this.state.updateId === "" || this.state.updateName === "" || this.state.updateURL === "") return;
    constsiteInfo = {
      name: this.state.updateName,
      url: this.state.updateURL,
    };
    fetch(`http://localhost:3000/sites/${this.state.updateId}`, {
      method: "PUT",
      headers: {
        Contenttype: "application/json",
      },
      body: JSON.stringify(siteInfo),
    })
      .then(res => res.json())
      .then(data => {
        constsites = this.state.sites;
        constindex = sites.findIndex(site => site.id === data.id);
        sites[index] = { id: data.id, name: data.name, url: data.url };
        this.setState({ sites: sites });
        this.setState({ updateId: "" });
        this.setState({ updateName: "" });
        this.setState({ updateURL: "" });
      })
      .catch(err => console.log(err));
  }

  deleteData() {
    if (this.state.deleteId === "") return;
    fetch(`http://localhost:3000/sites/${this.state.deleteId}`, { method: "DELETE" })
      .then(() => {
        constsites = this.state.sites;
        constindex = sites.findIndex(site => site.id === Number(this.state.deleteId));
        sites.splice(index, 1);
        this.setState({ sites: sites });
        this.setState({ deleteId: "" });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h3>Createdata</h3>     
        <div>
          <input value={this.state.siteName} onChange={this.handleNewNameInput.bind(this)} placeholder="SiteName" />
        </div>
         
        <div>
          <input value={this.state.siteURL} onChange={this.handleNewURLInput.bind(this)} placeholder="SiteURL" />
        </div>
          <button onClick={this.createData.bind(this)}>Create</button>       
        <hr /> <h3>Read data</h3>       
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
