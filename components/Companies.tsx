import { Box, Container, createStyles, Grid, Text } from "@mantine/core";
import { NextLink } from "@mantine/next";
import Image from "next/image";
import Velux from "../assets/Velux_logo.png";

const useStyles = createStyles((theme) => ({
  image: {
    filter: "grayscale(1)",
    opacity: "0.25",
    "&:hover": {
      filter: "none",
      opacity: "1",
    },
  },
}));

export default function Companies() {
  const { classes } = useStyles();
  return (
    <Box
      component="section"
      style={{ width: "100%" }}
      py="lg"
      sx={(theme) => ({
        backgroundColor: theme.colors.gray[2],
      })}
    >
      <Text style={{ textAlign: "center" }}>Aplicador autorizado de:</Text>
      <Container mt={30} mb={30} size="lg">
        <Grid justify="space-between" align="center">
          {[0, 1, 2, 3].map((i) => (
            <Grid.Col key={i} sm={3} md={2} lg={2}>
              <NextLink href="https://velux.com" target={"_blank"}>
                <Image
                  src={Velux}
                  layout="responsive"
                  alt="Velux Logo"
                  className={classes.image}
                />
              </NextLink>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
