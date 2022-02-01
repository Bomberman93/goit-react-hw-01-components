import PropTypes, { shape } from "prop-types";
import s from './Profile.module.scss';

export default function Profile({avatar, username, tag, location, stats}) {
    return (
      <div className={s["profile"]}>
        <div className={s["description"]}>
          <img src={avatar} alt="User avatar" className={s["avatar"]} />
          <p className={s["name"]}>{username}</p>
          <p className={s["tag"]}>{tag}</p>
          <p className={s["location"]}>{location}</p>
        </div>
  
        <ul className={s["stats"]}>
          <li className={s["profileItem"]}>
            <span className={s["label"]}>Followers</span>
            <span className={s["quantity"]}>{stats.followers}</span>
          </li>
          <li className={s["profileItem"]}>
            <span className={s["label"]}>Views</span>
            <span className={s["quantity"]}>{stats.views}</span>
          </li>
          <li className={s["profileItem"]}>
            <span className={s["label"]}>Likes</span>
            <span className={s["quantity"]}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    );
  }
  Profile.propTypes = {
    stats: PropTypes.shape({
        id: PropTypes.string,
        lable: PropTypes.string,
        percentage: PropTypes.number,
      })
  };