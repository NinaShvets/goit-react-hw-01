import css from "./Profile.module.css";
export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.container}>
      <div>
        <img src={avatar} className={css.img} alt="User avatar" />
        <p className={css.titleName}>{username}</p>
        <p className={css.textTag}>@{tag}</p>
        <p className={css.textTag}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.listItem}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={css.listItem}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={css.listItem}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
