import { useState, useCallback, useMemo } from "react";

const useToggle = (initialState: boolean | null) => {
  const [active, setStateActive] = useState<boolean>(initialState !== null ? initialState : false);

  const setActive = useCallback(() => {
    setStateActive(true);
  }, []);

  const setInActive = useCallback(() => {
    setStateActive(false);
  }, []);

  const toggle = useCallback(() => {
    setStateActive(!active);
  }, [active]);

  return useMemo(() => {
    return {
      active,
      setActive,
      setInActive,
      toggle
    };
  }, [active, setActive, setInActive, toggle]);
};

export default useToggle;
