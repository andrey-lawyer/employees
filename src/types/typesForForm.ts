export interface IValue {
  name: string;
  email: string;
  phone: string;
  position_id: string;
  photo: null | Blob;
}

export interface IActions {
  resetForm: Function;
}
