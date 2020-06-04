import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";
import { Helmet } from "react-helmet";

class UsersListPage extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map((user) => {
      return <li key={user.id}>{user.name}</li>;
    });
  }

  header() {
    return (
      <Helmet>
        <title>{`${this.props.users.length} Users App`}</title>
        <meta property="og:title" content="Users App" />
        <meta
          property="og:discription"
          content="This is react ssr practice app"
        />
        <meta property="og:image" content="" />
        <meta property="og:url" content="" />
      </Helmet>
    );
  }

  render() {
    return (
      <div>
        {this.header()}
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users };
}

function loadData(store) {
  return store.dispatch(fetchUsers());
}

export default {
  loadData,
  component: connect(mapStateToProps, { fetchUsers })(UsersListPage),
};
