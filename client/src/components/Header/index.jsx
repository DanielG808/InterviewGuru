// INCLUDE NAVIGATION THAT INCLUDES: Stats, Home, Form(New Interview)
import { Link } from "react-router-dom";
import { Button, ButtonGroup } from "@chakra-ui/react";

import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-light" to="/">
            <h1 className="m-0">InterviewGuru</h1>
          </Link>
          <p className="m-0">
            AI generated interview questions to land your next gig.
          </p>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              {/* <span>Hey there, {Auth.getProfile().data.username}!</span> */}
              <Link to="/login">
                <button className="btn btn-lg btn-light m-2" onClick={logout}>
                  Logout
                </button>
              </Link>
            </>
          ) : (
            <>
              <ButtonGroup variant="outline" spacing="6">
                <Button colorScheme="6B818C">
                  <Link to="/login">Login</Link>
                </Button>
                <Button colorScheme="6B818C">
                  <Link to="/signup">Signup</Link>
                </Button>
              </ButtonGroup>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
