import { IActions, IValue } from "../types/typesForForm";
import { postUser } from "./api";

export const onSubmitUser = (
  values: IValue,
  toggleUser: () => void,
  setPage: (value: number) => void,
  setNameImage: (value: string) => void,
  setSuccessSignUp: (value: boolean) => void,
  actions: IActions,
  setLoading: (value: boolean) => void
) => {
  const body = new FormData();
  values.photo && body.append("photo", values.photo);
  values.name && body.append("name", values.name);
  values.email && body.append("email", values.email);
  values.phone && body.append("phone", values.phone);
  body.append("position_id", values.position_id);

  const newUser = async (body: FormData) => {
    try {
      setLoading(true);
      const data = await postUser(body);
      if (data) {
        actions.resetForm();
        setSuccessSignUp(true);
        setNameImage("");
        setPage(1);
        toggleUser();
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  };
  newUser(body);
};
