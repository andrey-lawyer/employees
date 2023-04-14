export interface IUser {
  email: string;
  id: number;
  name: string;
  phone: string;
  photo: string;
  position: string;
  position_id: number;
  registration_timestamp: number;
}

export interface IData {
  users: IUser[];
  [x: string]: any;
  links: {
    next_url: string | null;
    prev_url: string | null;
  };
}
