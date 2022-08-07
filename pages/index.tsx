import {
  Box,
  Button,
  Container,
  createStyles,
  Overlay,
  Space,
  Text,
  Title,
} from "@mantine/core";
import type { NextPage } from "next";
import Features from "../components/Features";
import Navbar from "../components/Navbar";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    paddingTop: 200,
    paddingBottom: 150,

    "@media (max-width: 520px)": {
      paddingTop: 80,
      paddingBottom: 50,
    },

    scrollBehavior: "smooth",
  },

  background: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage:
      // "url(https://media.istockphoto.com/photos/roof-skylight-windows-series-picture-id463581137?k=20&m=463581137&s=170667a&w=0&h=SGLiD8A6dG5Xv4ABMfycOjpRnmgnLHWh90e_lPZ_cvU=)",
      "url(https://thumbs.dreamstime.com/z/skylight-window-modern-house-rooftop-150502670.jpg)",
    // "url(https://media.istockphoto.com/photos/installing-a-skylight-picture-id1033348994)",
    // "url(https://media.istockphoto.com/photos/plastic-or-skylight-window-on-attic-with-environmentally-friendly-and-picture-id1051099088)",
    // "url(https://media.istockphoto.com/id/1082357740/pt/foto/roofer-builder-worker-with-ruler-install-plastic-or-skylight-window-on-attic-with.webp?s=612x612&w=is&k=20&c=ARplSQAsg1XAklljrKvGWY06Pr-fEmVLKuwiQOy7S4k=)",
    // "url(https://media.istockphoto.com/photos/mansard-with-environmentally-friendly-and-energy-efficient-skylight-picture-id1082357842)",
    // "url(https://media.istockphoto.com/photos/builder-inspecting-skylight-in-unfinished-house-picture-id522476568)",
    // "url(https://media.istockphoto.com/photos/closeup-of-new-roof-with-skylight-and-natural-red-tile-picture-id520884394)",
    // "url(https://media.istockphoto.com/photos/open-skylight-on-a-roof-shingles-under-construction-picture-id812093972)",
    // "url(http://live-place.com/content/uploads/2017/06/GPL_IM.jpg)",
    // "url(https://www.isolamais.com/images/w700h473c/images/janela-sotao.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    zIndex: -1,
  },

  inner: {
    position: "relative",
    zIndex: 1,
  },

  title: {
    fontWeight: 800,
    fontSize: 48,
    letterSpacing: -1,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    color: theme.white,
    marginBottom: theme.spacing.xs,
    textAlign: "center",
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    "@media (max-width: 520px)": {
      fontSize: 28,
      textAlign: "left",
    },
  },

  highlight: {
    color: theme.colors[theme.primaryColor][4],
  },

  description: {
    color: theme.colors.gray[0],
    textAlign: "center",

    "@media (max-width: 520px)": {
      fontSize: theme.fontSizes.lg,
      textAlign: "left",
    },
  },

  controls: {
    marginTop: theme.spacing.xl,
    display: "flex",
    justifyContent: "center",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,

    "@media (max-width: 520px)": {
      flexDirection: "column",
    },
  },

  control: {
    height: 42,
    fontSize: theme.fontSizes.md,

    "&:not(:first-of-type)": {
      marginLeft: theme.spacing.md,
    },

    "@media (max-width: 520px)": {
      "&:not(:first-of-type)": {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },

  secondaryControl: {
    color: theme.white,
    backgroundColor: "rgba(255, 255, 255, .4)",

    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, .45) !important",
    },
  },
}));

const Home: NextPage = () => {
  const { classes, cx } = useStyles();
  /* 
  const parallax = useParallax<HTMLDivElement>({
    speed: 20,
  });
 */
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.background} /*  ref={parallax.ref}  */ />
        <Overlay color="#000" opacity={0.65} zIndex={1} />
        <Navbar
          links={[
            { label: "Home", link: "#" },
            { label: "Contactos", link: "#contact" },
          ]}
        />
        <div className={classes.inner}>
          <Title className={classes.title}>
            Serviço de{" "}
            <Text component="span" inherit className={classes.highlight}>
              Janelas de Sotão
            </Text>
          </Title>

          <Container size={640}>
            <Text size="xl" className={classes.description}>
              Serviços de instalação e reparação de janelas de sotão realizados
              por um profissional qualificado e com experiência.
            </Text>
          </Container>

          <div className={classes.controls}>
            <Button
              className={classes.control}
              variant="filled"
              size="lg"
              radius={"xl"}
            >
              Entrar em Contacto
            </Button>
          </div>
        </div>
      </div>
      <Box style={{ backgroundColor: "white" }}>
        <Space h={"xl"} />
        <Features />
        <Space h={"xl"} />
        <Space h={"xl"} />
        <Space h={"xl"} />
        <Space h={"xl"} />
        <Space h={"xl"} />
        <Space h={"xl"} />
        <Space h={"xl"} />
        <Space h={"xl"} />
        <Space h={"xl"} />
        <Space h={"xl"} />
        <Space h={"xl"} />
        <Space h={"xl"} />
        <Space h={"xl"} />
        <Space h={"xl"} />
        <Space h={"xl"} />
        <Space h={"xl"} />
        <Space h={"xl"} />
        <Space h={"xl"} />
        <Space h={"xl"} />
        <Space h={"xl"} />
        <Space h={"xl"} />
        <Space h={"xl"} />
        <Space h={"xl"} />
        <Space h={"xl"} />
        <Space h={"xl"} />
        <Space h={"xl"} />
        <Space h={"xl"} />
        <Space h={"xl"} />
        <Space h={"xl"} />
        <Space h={"xl"} />
        <Space h={"xl"} />
        <Space h={"xl"} />
        <Space h={"xl"} />
      </Box>
    </>
  );
};

export default Home;
