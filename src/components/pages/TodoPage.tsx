import React, { useEffect, memo } from "react";
import { auth } from "../../firebase";
import { useHistory } from "react-router-dom";
import { selectUser, login, logout } from "../../features/userSlice";
import { useSelector, useDispatch } from "react-redux";

export const TodoPage: React.VFC = memo(() => {
  const history = useHistory();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        return;
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
});
