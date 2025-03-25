/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  return (
    <div id="wd-account-navigation">
      {links.map((link) => {
        return (
          <>
            <Link to={`/Kambaz/Account/${link}`}>{link}</Link>
            <br />
          </>
        );
      })}
    </div>
  );
}
