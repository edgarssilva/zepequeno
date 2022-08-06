import { Title } from "@mantine/core";
import type { NextPage } from "next";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Navbar
        links={[
          { label: "Home", link: "#" },
          { label: "Contactos", link: "#contact" },
        ]}
      />
      <Title>Hi</Title>
    </>
  );
};

export default Home;
