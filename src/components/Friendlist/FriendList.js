import PropTypes, { shape } from "prop-types";
import s from './FriendList.module.scss';
import {KoloisOnline} from './KoloisOnline.styled';


export default function FriendList({ friends }) {
  return (
    <ul className={s["friend-list"]}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id} className={s["item"]}>
          <KoloisOnline isOnline={isOnline}></KoloisOnline>
          <span className={s["status"]}>{isOnline}</span>
          <img className={s["avatar"]} src={avatar} alt="User avatar" width="48" />
          <p className={s["name"]}>{name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  })) 
};
