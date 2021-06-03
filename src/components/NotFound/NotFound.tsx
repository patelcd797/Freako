import React from "react";
import { Container, H1, H2 } from "./NotFound-style";

const NotFound: React.FC = () => {
  return (
    <Container>
      <H1>404</H1>
      <H2>Page Not Found</H2>
      <p>The page you are looking for doesn't exist or an another error occurred.</p>
      <p>Go back, or head over to freako.com to choose new direction.</p>
    </Container>
  );
};

export default NotFound;
