import React, { useEffect } from "react";
import { auth } from "../../firebase";
import { useHistory } from "react-router-dom";
import { selectUser, login, logout } from "../../features/userSlice";
import { useSelector, useDispatch } from "react-redux";

export const TodoPage = () => {
  const history = useHistory();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (!user.uid) {
      history.push("/");
    }
  }, []);
  return (
    <>
      <div>aaaa</div>
      <button
        onClick={() => {
          auth.signOut();
          history.push("/");
        }}
      >
        サインアウト
      </button>
    </>
  );
};
