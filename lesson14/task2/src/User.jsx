import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const [userData, setUserData] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    fetch(`https://api.github.com/users/${userId}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error();
      })
      .then((userData) => {
        setUserData(userData);
      });
  }, [userId]);

  if (!userData) {
    return null;
  }

  const { avatar_url, name, location } = userData;

  return (
    <div className="user">
      <img alt="User Avatar" src={avatar_url} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  );
};

// class User extends Component {
//   state = {
//     userData: null,
//   };

//   componentDidMount() {
//     this.fetchUserData();
//   }

//   componentDidUpdate(prevProps) {
//     const prevUser = prevProps.match.params.userId;
//     const currentUser = this.props.match.params.userId;
//     if (prevUser !== currentUser) {
//       this.fetchUserData();
//     }
//   }

//   fetchUserData = () => {
//     const { match } = this.props;
//     fetch(`https://api.github.com/users/${match.params.userId}`)
//       .then((res) => {
//         if (res.ok) {
//           return res.json();
//         }
//         throw new Error();
//       })
//       .then((userData) => {
//         this.setState({
//           userData,
//         });
//       });
//   };

//   render() {
//     const { userData } = this.state;
//     if (!userData) {
//       return null;
//     }

//     const { avatar_url, name, location } = useData;

//     return (
//       <div className="user">
//         <img alt="User Avatar" src={avatar_url} className="user__avatar" />
//         <div className="user__info">
//           <span className="user__name">{name}</span>
//           <span className="user__location">{location}</span>
//         </div>
//       </div>
//     );
//   }
// }

export default User;
