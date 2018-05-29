// @flow

import React, { Component } from "react";

import "./User.css";

type Props = {
  username: string,
  firstname: string,
  lastname: string,
  isSubscriber: boolean,
  id: number,
  favoriteMovies: Array<string>,
  favoriteThings: Array<string | number>,
  userType: "beginner" | "intermediate" | "expert",
  litNum: 2,
  litBool: true,
  userData: {
    thing1: number,
    thing2: {
      nested: string,
      nested2: number,
    },
  },
  getSomething: (name: string, isSubscriber: boolean) => number,
};

class User extends Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    const userFavoriteNumbers = this.props.userFavoriteNumbers
      ? this.props.userFavoriteNumbers
      : [];

    return (
      <div className="User">
        <div>User</div>
        <div>user name: {this.props.username}</div>
        <div>user id: {this.props.userId}</div>
        <div>
          user favorite numbers: {userFavoriteNumbers.map(i => <div>{i}</div>)}
        </div>
      </div>
    );
  }
}

export default User;
