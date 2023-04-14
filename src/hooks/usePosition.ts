import { useEffect, useState } from "react";
import { Positions } from "../types/typePositions";
import { getPositions } from "../services/api";

type Loading = (value: boolean) => void;

export function usePosition(setLoading: Loading) {
  const [positions, setPositions] = useState<Positions[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await getPositions();
        setPositions(data);
      } catch (error) {
        alert(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [setLoading]);
  return { positions };
}
