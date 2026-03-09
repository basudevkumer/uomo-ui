import React from "react";
import Container from "./Container";
import Images from "./Images";

const Navbar = () => {
  return (
    <nav>
      <Container>
        <div>
          <div>
            <Images />
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
