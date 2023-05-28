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
            xs={12}
            md={3}
            sm={12}
            className="d-flex align-items-center justify-content-center my-4"
          >
            <Link href="/">
              {" "}
              <Image
                src="/@/../../public/images/Logo.png"
                alt="Logo"
                width={94}
                height={48}
              />
            </Link>
          </Col>
          <Col
            xs={{ order: 3, span: 12 }}
            md={3}
            className="d-flex align-items-center justify-content-md-start
             justify-content-center mb-4"
          >
            <nav className={s.location}>
                <h5 className="align-self-md-start align-self-center mb-2 ">Location</h5>
              <ul className="list-inline d-flex flex-column gap-2">
                <li>
                  <a
                    className="d-flex gap-3 align-items-center"
                    href="https://www.google.com/maps/place/Metro+Offices+2+Wisconsin+Circle,+7th+Floor,+Chevy+Chase,+MD+20815/@38.9615881,-77.0878639,17z/data=!3m2!4b1!5s0x89b7c094cedab3fd:0xc3f876bafdfbd567!4m6!3m5!1s0x89b7c990b57a706d:0x54317c70cccf5eff!8m2!3d38.961584!4d-77.085289!16s%2Fg%2F1tp0fkhj?authuser=0"
                  >
                    <Image
                      src="/@/../../public/images/footer/Location.png"
                      alt="Logo"
                      width={23}
                      height={24}
                    ></Image>
                    Wisconsin Ave, Suite 700 Chevy Chase, Maryland 20815
                  </a>
                </li>
                <li>
                  <a
                    className="d-flex gap-3 align-items-center"
                    href="https://www.google.com/maps/place/Metro+Offices+2+Wisconsin+Circle,+7th+Floor,+Chevy+Chase,+MD+20815/@38.9615881,-77.0878639,17z/data=!3m2!4b1!5s0x89b7c094cedab3fd:0xc3f876bafdfbd567!4m6!3m5!1s0x89b7c990b57a706d:0x54317c70cccf5eff!8m2!3d38.961584!4d-77.085289!16s%2Fg%2F1tp0fkhj?authuser=0"
                  >
                    <Image
                      src="/@/../../public/images/footer/Location.png"
                      alt="Logo"
                      width={23}
                      height={24}
                    ></Image>
                    Wisconsin Ave, Suite 700 Chevy Chase, Maryland 20815
                  </a>
                </li>
                <li>
                  <a
                    className="d-flex gap-3 align-items-center"
                    href="https://www.google.com/maps/place/Metro+Offices+2+Wisconsin+Circle,+7th+Floor,+Chevy+Chase,+MD+20815/@38.9615881,-77.0878639,17z/data=!3m2!4b1!5s0x89b7c094cedab3fd:0xc3f876bafdfbd567!4m6!3m5!1s0x89b7c990b57a706d:0x54317c70cccf5eff!8m2!3d38.961584!4d-77.085289!16s%2Fg%2F1tp0fkhj?authuser=0"
                  >
                    <Image
                      src="/@/../../public/images/footer/Location.png"
                      alt="Logo"
                      width={23}
                      height={24}
                    ></Image>
                    Wisconsin Ave, Suite 700 Chevy Chase, Maryland 20815
                  </a>
                </li>
              </ul>
            </nav>
          </Col>
          <Col
            xs={{ order: 2, span: 12 }}
            md={3}
            className="d-flex align-items-center justify-content-center mb-4"
          >
            <Nav ulClassName={s.ul} liClassName={s.li} aClassName={s.a} />
          </Col>
          <Col
            xs={{ order: 4, span: 12 }}
            md={3}
            className="d-flex flex-column align-items-md-start
             align-items-center justify-content-center gap-4"
          >
            <div className={s.contact_social}>
              <div>
                <ul className="list-inline d-flex flex-column align-items-start gap-2">
                  <h5>Contact US</h5>
                  <li>
                    <a href="mailto:logo@firma.com">
                      <Image
                        className="me-2"
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
                      <Image
                        className="me-2"
                        src="/@/../../public/images/footer/Phone.png"
                        alt="Logo"
                        width={24}
                        height={24}
                      ></Image>
                      +3800065628
                    </a>
                  </li>
                </ul>
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
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
