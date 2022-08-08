import { Stack } from "@mantine/core";
import type { NextPage } from "next";
import { useRef } from "react";
import Companies from "../components/Companies";
import Contact from "../components/Contact";
import Features from "../components/Features";
import Header from "../components/Header";

const Home: NextPage = () => {
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Header contactRef={contactRef} />
      <Stack
        align={"center"}
        justify="space-between"
        py={50}
        spacing={50}
        style={{ backgroundColor: "white", overflow: "hidden" }}
      >
        <Features />
        <Companies />
        <Contact ref={contactRef} />
      </Stack>
    </>
  );
};

export default Home;
