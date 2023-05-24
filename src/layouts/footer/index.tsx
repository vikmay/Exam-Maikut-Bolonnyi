import React from "react";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "@/components/nav";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import s from "./index.module.scss";

function Footer() {
  return (
    <footer className={s.footer}>
      <Container>
        <Row>
          <Col
            xs={6}
            md={3}
            className="d-flex align-items-center justify-content-start"
          >
            <Image
              src="/@/../../public/images/Logo.png"
              alt="Logo"
              width={94}
              height={48}
            />
          </Col>
          <Col
            xs={6}
            md={3}
            className="d-flex align-items-center justify-content-start"
          >
            <nav className={s.location}>
              <ul className="list-inline d-flex flex-column gap-3">
                <h5>Location</h5>

                <li>
                  <div className="d-flex">
                    <Image
                      src="/@/../../public/images/footer/Location.png"
                      alt="Logo"
                      width={23}
                      height={24}
                    ></Image>
                    <a href="location1.html">
                      Wisconsin Ave, Suite 700
                      <br /> Chevy Chase, Maryland 20815
                    </a>
                  </div>
                </li>
                <li>
                  <div className="d-flex">
                    <Image
                      src="/@/../../public/images/footer/Location.png"
                      alt="Logo"
                      width={23}
                      height={24}
                    ></Image>
                    <a href="location1.html">
                      Wisconsin Ave, Suite 700
                      <br /> Chevy Chase, Maryland 20815
                    </a>
                  </div>
                </li>
                <li>
                  <div className="d-flex">
                    <Image
                      src="/@/../../public/images/footer/Location.png"
                      alt="Logo"
                      width={23}
                      height={24}
                    ></Image>
                    <a href="location1.html">
                      Wisconsin Ave, Suite 700
                      <br /> Chevy Chase, Maryland 20815
                    </a>
                  </div>
                </li>
              </ul>
            </nav>
          </Col>
          <Col
            xs={6}
            md={3}
            className="d-flex align-items-center justify-content-center"
          >
            <Nav ulClassName={s.ul} liClassName={s.li} aClassName={s.a} />
          </Col>
          <Col
            xs={6}
            md={3}
            className="d-flex flex-column align-items-start justify-content-center gap-4"
          >
            <div>
              <address>
                <ul className="list-inline d-flex flex-column align-items-start gap-2">
                  <h5>Contact US</h5>
                  <li>
                    <a href="mailto:logo@firma.com">
                      <Image className="me-2"
                        src="/@/../../public/images/footer/Mail.png"
                        alt="Logo"
                        width={24}
                        height={24}
                      ></Image>
                      logo@figma.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+3800065628">
                      <Image className="me-2"
                        src="/@/../../public/images/footer/Phone.png"
                        alt="Logo"
                        width={24}
                        height={24}
                      ></Image>
                      +3800065628
                    </a>
                  </li>
                </ul>
              </address>
            </div>
            <div className={s.social}>
              <h4 className="d-inline">Follow Us</h4>
              <ul className="list-inline d-flex justify-content-between">
                <li>
                  <a
                    href="https://www.example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/@/../../public/images/Footer/Facebook.png"
                      alt="Logo"
                      width={24}
                      height={24}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/@/../../public/images/Footer/Telegram.png"
                      alt="Logo"
                      width={24}
                      height={24}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/@/../../public/images/Footer/Instagram.png"
                      alt="Logo"
                      width={24}
                      height={24}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
