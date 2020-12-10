import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Moviecard from "./Moviecard";

const NavBar = () => {
  const [input, setinput] = useState();
  const [searched, setsearched] = useState();
  const [pages, setpages] = useState(1);
  const findmovies = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=e58c9e58347cd4b8b603c47e71603365&language=en-US&query=${input}&page=${pages}&include_adult=false`
    );
    if (input !== undefined) setsearched(response.data);
  };
  const Handlechange = (e) => setinput(e.target.value);
  const pagesuiv = () => {
    setpages(pages + 1);
  };
  const pageprev = () => {
    if (pages > 1) setpages(pages - 1);
  };
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          <Link to="TopRated">Netflix</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/TopRated">TopRated</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/Popular">Popular</Link>
            </Nav.Link>
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Chercher un film"
              className="mr-sm-2"
              onChange={(e) => Handlechange(e)}
            />
            <Button variant="outline-success" onClick={findmovies}>
              Rechercher
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      {searched && (
        <div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              marginTop: "1em",
            }}
          >
            {searched.results.map((elem) => {
              return <Moviecard elem={elem} />;
            })}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1em",
              marginBottom: "1em",
            }}
          >
            <button onClick={pageprev}>
              <i class="fas fa-arrow-circle-left"></i>
            </button>
            <p
              style={{
                margin: "1em",
              }}
            >
              {pages}
            </p>
            <button onClick={pagesuiv}>
              <i class="fas fa-arrow-circle-right"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
