import "./user.scss";
import { nanoid } from "nanoid";
import { IUserProps } from "../../types/typesProps";
export const Users: React.FC<IUserProps> = ({
  showButton,
  setPage,
  employees,
  loading,
}) => {
  const classButton = "button-show-more";
  return (
    <section id="users" className="section-task users">
      <h2 className="title users_title">Working with GET request</h2>
      <ul className="users_list">
        {employees &&
          employees.map(({ email, name, phone, photo, position }) => (
            <li className="users_item" key={nanoid()}>
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
          disabled={loading}
          className={
            loading ? classButton + " disable" : classButton + " enable"
          }
          type="button"
          onClick={() => setPage((prevPage: number) => prevPage + 1)}
        >
          Show more
        </button>
      )}
    </section>
  );
};
