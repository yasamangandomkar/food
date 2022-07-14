import logo from "../../assets/images/res-logo.png";
import { AiOutlineUser } from "react-icons/ai";
import { RiShoppingBasketLine } from "react-icons/ri";
import { Navbar, Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import styles from "./style.module.css";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  const navItems = [
    { title: "Home", path: "/" },
    { title: "Foods", path: "/foods" },
    { title: "Cart", path: "/cart" },
    { title: "Contact", path: "/contact" },
  ];
  return (
    <Navbar className="shadow-sm" fixed>
      <Container>
        {/* left navbar */}
        <Navbar.Brand className={styles.logo}>
          <img src={logo} alt="" style={{ width: "40px" }} />
          Tasty Treat
        </Navbar.Brand>
        {/* center navbar */}
        <Nav className={styles.navbar}>
          {navItems.map((item, index) => (
            <Nav.Item key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? styles.active : styles.navLink
                }
              >
                {item.title}
              </NavLink>
            </Nav.Item>
          ))}
        </Nav>
        {/* right navbar */}
        <Nav>
          <Nav.Link>
            <RiShoppingBasketLine size={20} />
          </Nav.Link>
          <Nav.Link>
            <AiOutlineUser size={20} />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
