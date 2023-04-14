import { useEffect, useState } from "react";

import { IData, IUser } from "../types/typesUsers";
import { getUsers } from "../services/api";

export function useShowUsers() {
  const [newUser, setNewUser] = useState(false);
  const [page, setPage] = useState(1);
  const [employees, setEmployees] = useState<IUser[]>([]);
  const [showButton, setShowButton] = useState(true);
  const [loading, setLoading] = useState(false);
  const toggleUser = () => setNewUser(!newUser);

  useEffect(() => {
    const allUsers = async () => {
      try {
        setShowButton(true);
        setLoading(true);
        const data: IData = await getUsers(page);
        const {
          users,
          links: { next_url },
        } = data;
        users.sort(
          (a: IUser, b: IUser) =>
            b.registration_timestamp - a.registration_timestamp
        );
        if (page !== 1)
          return setEmployees((prevState) => [...prevState, ...users]);
        setEmployees(users);
        !next_url && setShowButton(false);
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      } finally {
        setLoading(false);
      }
    };
    allUsers();
  }, [newUser, page]);
  return { showButton, setPage, employees, loading, setLoading, toggleUser };
}
