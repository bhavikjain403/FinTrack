import { Container, Paper, SimpleGrid } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

// const Main = () => {
//   const midScreen = useMediaQuery("(min-width: 1300px)");
//   const largeScreen = useMediaQuery("(min-width: 1750px)");

//   return (
//     <></>
//     // <Container
//     //   ml={largeScreen ? 600 : midScreen ? 450 : 250}
//     //   mt={largeScreen ? 60 : 20}
//     // >
//     // <Paper radius="md" p={30}>
//     //     <h1>fwewe</h1>
//     // </Paper>
//     // </Container>
//   );
// };

import CardComponent from "./CardComponentOne";

const Main = () => {
  const midScreen = useMediaQuery("(min-width: 1300px)");
  const largeScreen = useMediaQuery("(min-width: 1750px)");
  const chapters = [
    {
      "Bank FD Names": "State Bank of India FD",
      "For General Citizens (p.a.)": "3.00% to 7.10%",
      "For Senior Citizens (p.a)": "3.50% to 7.60%"
    },
    {
      "Bank FD Names": "HDFC Bank FD",
      "For General Citizens (p.a.)": "3.00% to 7.00%",
      "For Senior Citizens (p.a)": "3.50% to 7.75%"
    },
    {
      "Bank FD Names": "ICICI Bank FD",
      "For General Citizens (p.a.)": "3.00% to 7.90%",
      "For Senior Citizens (p.a)": "3.50% to 7.50%"
    },
    {
      "Bank FD Names": "IDBI Bank FD",
      "For General Citizens (p.a.)": "3.00% to 6.75%",
      "For Senior Citizens (p.a)": "3.50% to 7.50%"
    },
    {
      "Bank FD Names": "Kotak Mahindra Bank FD",
      "For General Citizens (p.a.)": "2.75% to 7.10%",
      "For Senior Citizens (p.a)": "3.25% to 7.60%"
    },
    {
      "Bank FD Names": "RBL Bank FD",
      "For General Citizens (p.a.)": "3.25% to 7.80%",
      "For Senior Citizens (p.a)": "3.75% to 8.30%"
    },
    {
      "Bank FD Names": "KVB Bank FD",
      "For General Citizens (p.a.)": "4.00% to 7.25%",
      "For Senior Citizens (p.a)": "5.90% to 7.65%"
    },
    {
      "Bank FD Names": "Punjab National Bank FD",
      "For General Citizens (p.a.)": "3.50% to 7.25%",
      "For Senior Citizens (p.a)": "4.00% to 7.75%"
    },
    {
      "Bank FD Names": "Canara Bank FD",
      "For General Citizens (p.a.)": "3.25% to 7.00%",
      "For Senior Citizens (p.a)": "3.25% to 7.50%"
    },
    {
      "Bank FD Names": "Axis Bank FD",
      "For General Citizens (p.a.)": "3.50% to 7.26%",
      "For Senior Citizens (p.a)": "3.50% to 8.01%"
    },
    {
      "Bank FD Names": "Bank of Baroda FD",
      "For General Citizens (p.a.)": "3.00% to 7.05%",
      "For Senior Citizens (p.a)": "3.50% to 7.55%"
    },
    {
      "Bank FD Names": "IDFC First Bank FD",
      "For General Citizens (p.a.)": "3.50% to 7.50%",
      "For Senior Citizens (p.a)": "4.00% to 8.00%"
    }
  ];
  return (
    <>
        {chapters.map((item) => {
          return <CardComponent info={item} />;
        })}
    </>
  );
};

export default Main;