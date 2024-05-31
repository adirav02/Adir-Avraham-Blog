import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface ConfirmationEmailProps {
  userFirstname: string;
}

export const ConfirmationEmail = ({
  userFirstname,
}: ConfirmationEmailProps) => (
  <Html>
    <Head />
    <Preview>
      Get ready to level up your fitness journey! Dive into exclusive fitness
      tips and killer workouts to crush your goals.
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src="https://i.imgur.com/KjshcEv.png"
          width="150"
          height="150"
          alt="Logo"
          style={logo}
        />
        <Text style={paragraph}>
          Hi
          {userFirstname && userFirstname.trim()
            ? `! ${userFirstname.trim()}`
            : "!"}
        </Text>
        <Text style={paragraph}>
          Thanks for joining my newsletter! I'm thrilled to have you on board.
          In this newsletter, you'll receive exclusive fitness tips, workout
          routines, healthy recipes, and much more to help you reach your
          fitness goals.
        </Text>
        <Text style={paragraph}>
          This downloadable spreadsheet is designed to help you stay motivated
          and organized throughout your fitness journey.
        </Text>
        <Text style={paragraphBold}>
          Click the link below to download your FREE Workout Log!
        </Text>
        <Section style={btnContainer}>
          {/* TODO: Link and Add to DataBase */}
          <Button
            style={button}
            href="https://docs.google.com/spreadsheets/d/1Fd543Ue34tQkiXVEKQlJHdqs3XX8j2fdkCBlBtbxSug/copy"
          >
            Download Your Free Workout Log
          </Button>
        </Section>
        <Text style={paragraph}>
          Best,
          <br />
          Adir Avraham
        </Text>
        <Hr style={hr} />
        <Section style={footer}>
          <Img
            src="https://i.imgur.com/KjshcEv.png"
            width="75"
            height="75"
            alt="Adir"
            style={logo}
          />
          <Text style={footerName}>Adir Avraham</Text>
          <Link style={footerLink} href="mailto:adir@adiravraham.com">
            Email
          </Link>
          ・{" "}
          <Link style={footerLink} href="www.adiravraham.com">
            Website
          </Link>
        </Section>
      </Container>
    </Body>
  </Html>
);

ConfirmationEmail.PreviewProps = {
  userFirstname: "Alan",
} as ConfirmationEmailProps;

export default ConfirmationEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const paragraphBold = {
  fontSize: "18px",
  lineHeight: "26px",
  fontWeight: "600",
};

const footerName = {
  fontWeight: "600",
  fontSize: "18px",
  margin: "6px 0 8px 0",
};

const footerLink = {
  color: "#4263eb",
  fontSize: "12px",
  cursor: "pointer",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#4263eb",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  textAlign: "center" as const,
};
