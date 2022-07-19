import { useEffect, useRef, useState } from "react";
import logo from "../../assets/images/res-logo.png";
import { AiOutlineUser } from "react-icons/ai";
import { RiShoppingBasketLine } from "react-icons/ri";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Navbar, Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../../features/cartSlice";
import styles from "./style.module.css";

const Navigation = () => {
  const count = useSelector((state) => state.cart.count);
  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 300;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navItems = [
    { title: "Home", path: "/" },
    { title: "Foods", path: "/foods" },
    { title: "Cart", path: "/cart" },
    { title: "Contact", path: "/contact" },
  ];
  const dispatch = useDispatch();
  const menuRef = useRef(null);
  // const toggleMenu = () => menuRef.current.classList.toggle("show");
  const toggleCart = () => {
    dispatch(toggle());
  };
  return (
    <Navbar
      className="shadow-sm"
      bg="white"
      style={{
        left: "0",
        top: "0",
        transition: "1s ease",
        position: navBackground ? "fixed" : "",
        width: "100%",
        zIndex: "999",
      }}
    >
      <Container>
        {/* left navbar */}

        <Navbar.Brand className={styles.logo}>
          <img src={logo} alt="" style={{ width: "40px" }} />
          Tasty Treat
        </Navbar.Brand>

        {/* center navbar */}

        <Nav className={styles.navItems} ref={menuRef}>
          {navItems.map((item, index) => (
            <Nav.Item key={index} className={styles.navMenu}>
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
          <div className={styles.overlay}></div>
        </Nav>

        {/* right navbar */}
        <Nav>
          <Nav.Item className={styles.badge} gap={3}>
            <RiShoppingBasketLine size={20} onClick={toggleCart} />
            <span>{count}</span>
          </Nav.Item>
          <Nav.Item className={styles.navItem}>
            <AiOutlineUser size={20} />
          </Nav.Item>
          <Nav.Item className={styles.navItem}>
            <HiOutlineMenuAlt3 className={styles.menuMobile} size={20} />
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
