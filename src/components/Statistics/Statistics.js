import PropTypes from "prop-types";
import s from "./Statistics.module.scss";

export default function Statistics({ title, stats }) {
  return (
    <section className={s["statistics"]}>
      {title && <h2 className={s["title"]}>{title}</h2>}
      <ul className={s["stat-list"]}>
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className={s["item"]}
            style={{
              backgroundColor: `#${Math.floor(
                Math.random() * 16777215
              ).toString(16)}`,
            }}
          >
            <span className={s["label"]}>{label}</span>
            <span className={s["percentage"]}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      lable: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
