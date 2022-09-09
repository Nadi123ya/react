import React from "react";
import moment from "moment";

const formatDate = (date) => moment(date).format("DD MMM YYYY");

function Profile(props) {
  return (
    <>
      <div className="profile">
        <div className="profile__name">
          {props.userData.firstName} {props.userData.lastName}
        </div>
        <div className="profile__birth">
          Was born in {formatDate(props.userData.birthDate)} in {props.userData.birthPlace}
        </div>
      </div>
    </>
  );
}

export default Profile;
