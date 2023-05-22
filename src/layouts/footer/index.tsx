import React from "react";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import s from "./index.module.scss";

function Footer() {
  return (
    <footer className={s.footer}>
      <Container>
        <Row>
          <Col xs={6} md={3}>
            <Image
              src="/@/../../public/images/Logo.png"
              alt="Logo"
              width={94}
              height={48}
            />
          </Col>
          <Col xs={6} md={3}>
            <nav>
              <ul className="list-inline">
                <li>
                  <Image
                    src="/@/../../public/images/footer/Location.png"
                    alt="Logo"
                    width={23}
                    height={24}
                  ></Image>
                  <a href="location1.html">Location 1</a>
                </li>
                <li>
                  <Image
                    src="/@/../../public/images/footer/Location.png"
                    alt="Logo"
                    width={24}
                    height={24}
                  ></Image>
                  <a href="location1.html">Location 1</a>
                </li>
                <li>
                  <Image
                    src="/@/../../public/images/footer/Location.png"
                    alt="Logo"
                    width={24}
                    height={24}
                  ></Image>
                  <a href="location1.html">Location 1</a>
                </li>
              </ul>
            </nav>
          </Col>
          <Col xs={6} md={3}>
            <div>
              <address>
                <ul className="list-inline">
                  <li>Address: 123 Main Street, City, Country</li>
                  <li>Phone: (123) 456-7890</li>
                  <li>
                    <Image
                      src="/@/../../public/images/footer/Mail.png"
                      alt="Logo"
                      width={17}
                      height={17}
                    ></Image>
                    <a href="mailto:logo@firma.com"></a>
                  </li>
                </ul>
              </address>
            </div>
          </Col>
          <Col xs={6} md={3}>
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
