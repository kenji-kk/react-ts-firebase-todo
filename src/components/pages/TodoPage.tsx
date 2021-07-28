import React, { useEffect } from "react";
import { auth } from "../../firebase";
import { useHistory } from "react-router-dom";
import { selectUser, login, logout } from "../../features/userSlice";
import { useSelector, useDispatch } from "react-redux";

export const TodoPage = () => {
  const history = useHistory();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
          })
        );
      } else {
        dispatch(logout());
        history.push("/");
      }
    });
  }, []);
  if (!user.uid) {
    return null;
  }

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
