import "./user.scss";
import { IUserProps } from "../../types/typesProps";

export const Users: React.FC<IUserProps> = ({
  showButton,
  setPage,
  employees,
}) => {
  return (
    <section id="users" className="section-task users">
      <h2 className="title users_title">Working with GET request</h2>
      <ul className="users_list">
        {employees &&
          employees.map(({ id, email, name, phone, photo, position }) => (
            <li className="users_item" key={id}>
              <img
                className="users_img"
                src={photo}
                alt={`${name},${position}`}
                width="70"
                height="70"
              />
              <p className="paragraph users_name">{name}</p>
              <p className="paragraph users_other">{position}</p>
              <p className="paragraph users_other ">{email}</p>
              <p className="paragraph users_other">{phone}</p>
            </li>
          ))}
      </ul>
      {showButton && (
        <button
          className="button-show-more"
          type="button"
          onClick={() => setPage((prevPage: number) => prevPage + 1)}
        >
          Show more
        </button>
      )}
    </section>
  );
};
