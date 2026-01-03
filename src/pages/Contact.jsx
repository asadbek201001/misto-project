import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import EmailImage from "../image/emailImage.png";
import PhoneImage from "../image/phoneImage.png";
import Footer from "../components/Footer"

const BigContainer = styled.div`
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
`;

const SectionTitle = styled.h1`
  text-align: center;
  margin-top: 30px;
  color: #333;
`;

const SectionSubtitle = styled.p`
  text-align: center;
  margin-bottom: 40px;
  color: #666;
`;

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  max-width: 1100px;
  padding: 40px;
  margin: 50px auto;
  border-radius: 20px;
  padding-top: 113px;
  background-color: white;
`;

const ContactBoxes = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  /* flex-wrap: wrap; */

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const ContactCard = styled.div`
  width: 100%;
  max-width: 500px;
  height: 200px;
  background-color: ${(props) => props.bg || "#ccc"};
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  cursor: pointer;
  font-weight: 200;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }
`;

const Icon = styled.img`
  width:80px;
  height:auto;
  margin-bottom: 15px;
  color: white;
`;

const ContactInfo = styled.p`
  color: #000000;
  font-size: 20px;
  text-align: center;
  margin-top:25px;
  opacity: 0.9;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  h1 {
    font-size: 20px;
    letter-spacing: 2px;
    font-weight: 600;
  }
`;

const Input = styled.input`
  padding: 12px 16px;
  border: 1px solid #ccc;
  font-size: 14px;
  width: 100%;
`;


const TextArea = styled.textarea`
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 14px;
  resize: vertical;
  min-height: 120px;
  width: 100%;
`;

const SendButton = styled.button`
  padding: 12px 20px;
  background-color: #4A90E2;
  color: white;
  border: none;
  border-radius: 8px;
  width: 200px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #357ABD;
  }
`;

export default function Contact() {
  return (
    <>
      <Header />

      <ContactWrapper>
        <ContactBoxes>
          <ContactCard bg="#ffffff">
            <Icon src={EmailImage}/>
            <ContactInfo>Email Me</ContactInfo>
          </ContactCard>

          <ContactCard bg="#ffffff">
            <Icon src={PhoneImage}/>
            <ContactInfo>Phone</ContactInfo>
          </ContactCard>

        </ContactBoxes>

        <Form>
          
            <h1>Contact Form</h1>
          <Input type="text" placeholder="Your Name *" required />
          <Input type="email" placeholder="Your Email *" required />
          <Input type="text" placeholder="Subject *" required />
          <TextArea placeholder="Your Message *" required />
          <SendButton type="submit">SEND</SendButton>
        </Form>
      </ContactWrapper>

      <Footer/>
  </>
  );
}
