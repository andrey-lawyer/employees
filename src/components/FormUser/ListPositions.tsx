import "./formUser.scss";

import { Field } from "formik";

import { IListPositionsProps } from "../../types/typesProps";
import { Positions } from "../../types/typePositions";
import { usePosition } from "../../hooks/usePosition";

export const ListPositions: React.FC<IListPositionsProps> = ({
  setLoading,
}) => {
  const { positions } = usePosition(setLoading);
  return (
    <>
      <p className="paragraph paragraph-position">Select your position</p>
      {positions &&
        positions.map((el: Positions, index) => (
          <label className="radio-label paragraph" key={index}>
            <Field
              className="radio-input"
              type="radio"
              name="position_id"
              value={String(el.id)}
            />
            {el.name}
          </label>
        ))}
    </>
  );
};
