import { useRef, useState } from "react";
import styled from "styled-components";

import vectorOne from "./assets/contact/VectorOne.png";
import vectorTwo from "./assets/contact/VectorTwo.png";
import MouseBunny from "./assets/contact/MouseBunny.png";

const ContactForm = () => {
  const fullName = useRef();
  const email = useRef();
  const message = useRef();
  
  // TO DO: function to send email
  const sendEmail = () => {

  }

  return (
    <Background>
      <div>
        <VectorOne src={vectorOne}></VectorOne>
        <VectorTwo src={vectorTwo}></VectorTwo>
      </div>
      <Contents>
        <DescLeft>
          <Title>Contact Us</Title>
          <Illustration src={MouseBunny}></Illustration>
        </DescLeft>
        <DescRight onSubmit={(e) => sendEmail(e)}>
          <div>
            <Input
              ref={fullName}
              type="text"
              placeholder="Full Name"
              name="user_name"
              required
            />
          </div>
          <div>
            <Input
              ref={email}
              type="email"
              placeholder="Email"
              name="user_email"
              required
            />
          </div>
          <div>
            <TextArea
              ref={message}
              name="message"
              placeholder="Your message"
              required
            ></TextArea>
          </div>
          <Button>Submit Query</Button>
        </DescRight>
      </Contents>
    </Background>
  );
};

// CONTAINER STYLE
const Background = styled.div`
  height: 100vh;
  width: 100vw;
`;
const Contents = styled.div`
  padding: 250px 0px;
  height: 100vh;
  display: flex;
  overflow: hidden;
  font-family: "Inter", sans-serif;
`;
const DescRight = styled.form`
  padding-left: 150px;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;

  div {
    padding-bottom: 50px;
  }
`;
const DescLeft = styled.div`
  padding-left: 150px;
  height: 100%;
  width: 50%;
`;
// FORM STYLE
const Input = styled.input`
  border: 1px solid var(--blue-light);
  border-radius: 10px;
  width: 500px;
  height: 50px;
  color: var(--blue-light);
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 1.5em;
`;
const TextArea = styled.textarea`
  border: 1px solid var(--blue-light);
  border-radius: 10px;
  width: 500px;
  height: 200px;
  color: var(--blue-light);
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 1.5em;
`;
// BUTTON STYLE
const Button = styled.button`
  border-radius: 20px;
  padding: 10px 40px;
  color: white;
  background-color: var(--blue-mid);
  box-shadow: inset 1px 0px 10px grey;
  text-decoration: none;
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 1.5em;
`;

// TEXT STYLE
const Title = styled.h1`
  font-size: 4em;
  color: white;

  span {
    font-weight: bold;
  }
`;

// VECTOR BACKGROUND
const VectorOne = styled.img`
  position: absolute;
  z-index: -1;
  left: 30%;
  overflow: hidden;
`;
const VectorTwo = styled.img`
  position: absolute;
  z-index: -1;
  top: 15%;
  width: 40%;
  height: 85%;
  overflow: hidden;
`;
const Illustration = styled.img`
  position: relative;
  bottom: 0px;
  width: 50em;
`;

export default ContactForm;
