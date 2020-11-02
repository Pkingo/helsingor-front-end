import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const StyledMenu = styled.nav`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  background-color: var(--gold);
  padding: 2rem;
  a {
    color: var(--white);
    text-decoration: none;
    text-transform: uppercase;
  }
  ul {
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    justify-items: end;
    width: fit-content;
    grid-column-gap: 2rem;
    margin: 0 0 0 auto;
  }
  .brand {
    z-index: 12;
    h2 {
      color: var(--white);
      font-weight: normal;
    }
  }
  @media (max-width: 1280px) {
    ul {
      z-index: 10;
      display: flex;
      flex-direction: column;
      justify-content: start;
      background-color: var(--gold);
      transform: ${({ open }) =>
        open ? "translateX(0)" : "translateX(-100%)"};
      text-align: left;
      padding-top: 12rem;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      transition: transform 0.3s ease-in-out;

      a {
        padding: 2rem 0;
      }

      @media (max-width: 576px) {
        width: 100%;
      }
    }
  }
`;

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <div className="brand">
        <Link to="/">
          <h2>
            <strong>Helsingør</strong> Domkirke
          </h2>
        </Link>
      </div>
      <ul>
        <Link onClick={() => setOpen(false)} to="/kontakt">
          Kontakt
        </Link>
        <Link onClick={() => setOpen(false)} to="/kirken">
          Kirken
        </Link>
        <Link onClick={() => setOpen(false)} to="/kirkelige-handlinger">
          Kirkelige handlinger
        </Link>
        <Link onClick={() => setOpen(false)} to="/arrangementer">
          Arrangementer
        </Link>
        <Link onClick={() => setOpen(false)} to="/meninghedsråd">
          Meninghedsråd
        </Link>
      </ul>
      <Burger open={open} setOpen={setOpen} />
    </StyledMenu>
  );
};

const StyledBurger = styled.button`
  display: none;
  @media (max-width: 1280px) {
    justify-self: end;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 12;

    &:focus {
      outline: none;
    }

    div {
      width: 2rem;
      height: 0.25rem;
      background-color: var(--white);
      border-radius: 10px;
      transition: all 0.3s linear;
      position: relative;
      transform-origin: 1px;

      :first-child {
        transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      }

      :nth-child(2) {
        opacity: ${({ open }) => (open ? "0" : "1")};
        transform: ${({ open }) =>
          open ? "translateX(20px)" : "translateX(0)"};
      }

      :nth-child(3) {
        transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      }
    }
  }
`;

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger
      open={open}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setOpen(false);
        }
      }}
      onClick={() => setOpen(!open)}
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    <div>
      <div ref={node}>
        <Menu open={open} setOpen={setOpen} />
      </div>
    </div>
  );
}

const useOnClickOutside = (ref, handler) => {
  React.useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      if (event.type === "keydown" && event.key !== "Escape") {
        return;
      }
      console.log(event);
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("keydown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.addEventListener("keydown", listener);
    };
  }, [ref, handler]);
};
