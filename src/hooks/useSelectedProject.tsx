import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { projectSelected } from "../redux/slices/projectSelectedSlice";


const useSelectedProject = (): [string, (value: string) => void] => {
  const dispatch = useDispatch();
  const projectSelectedValue = useSelector((state: RootState) => state.projectSelected.value);
  const [state, setState] = useState<string>(projectSelectedValue);

  useEffect(() => {
    setState(projectSelectedValue);
  }, [projectSelectedValue]);

  useEffect(() => {
    localStorage.setItem("projectSelectedValue", state);
  }, [state]);

  const setProjectSelectedValue = (value: string) => {
    dispatch(projectSelected(value));
  };

  return [state, setProjectSelectedValue];
};

export  {useSelectedProject};
