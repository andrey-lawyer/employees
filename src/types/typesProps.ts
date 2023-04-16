import { IUser } from "./typesUsers";

export interface IListPositionsProps {
  setLoading: (value: boolean) => void;
}

interface IPage<T> {
  setPage: T;
}
type page = (value: number) => void;
type pageFunction = (e: (e: number) => number) => void;

export interface IFormProps extends IListPositionsProps, IPage<page> {
  toggleUser: () => void;
}

export interface IUserProps extends IPage<pageFunction> {
  showButton: boolean;
  employees: IUser[];
  loading: boolean;
}
