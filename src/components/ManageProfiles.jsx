import { useNavigate } from "react-router-dom";
import "./ManageProfiles.scss";

const ManageProfiles = () => {
  const navigate = useNavigate();

  const selectProfileHandler = () => {
    navigate("/browse");
  };
  return (
    <div className="profilesContainer">
      <h1
        onMouseOver={(event) => {
          console.log(event);
        }}
      >
        Who is this ?
      </h1>
      <ul className="profilesList">
        <li onClick={selectProfileHandler}>
          <div className="profileItemContainer">
            <img alt="avatar" src="profile-blue.png" />
            <span>User One</span>
          </div>
        </li>
        <li onClick={selectProfileHandler}>
          <div className="profileItemContainer">
            <img alt="avatar" src="profile-yellow.png" />
            <span>User Two</span>
          </div>
        </li>
        <li onClick={selectProfileHandler}>
          <div className="profileItemContainer">
            <img alt="avatar" src="profile-purple.png" />
            <span>User Three</span>
          </div>
        </li>
        <li onClick={selectProfileHandler}>
          <div className="profileItemContainer">
            <img alt="avatar" src="profile-red.png" />
            <span>User Four</span>
          </div>
        </li>
        <li onClick={selectProfileHandler}>
          <div className="profileItemContainer">
            <img alt="avatar" src="profile-kids.png" />
            <span>Kids</span>
          </div>
        </li>
      </ul>

      <button>Manage profiles</button>
    </div>
  );
};

export default ManageProfiles;
