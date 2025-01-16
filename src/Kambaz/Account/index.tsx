import Signup from "./Signup";
import Signin from "./Signin";
import Profile from "./Profile";
export default function Account() {
  return (
    <div id="wd-account-screen">
      <h2>Account</h2>
      <Signup />
      <Signin />
      <Profile />
    </div>
  );
}
