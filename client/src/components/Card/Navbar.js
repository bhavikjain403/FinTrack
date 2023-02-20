import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import { Container, Grid, Paper, Text, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import MainOne from "./MainOne";
import MainTwo from "./MainTwo";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";

export default function Navbar() {
  const [value, setValue] = React.useState("1");
  const midScreen = useMediaQuery("(min-width: 1300px)");
  const largeScreen = useMediaQuery("(min-width: 1750px)");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const userName = useSelector((state) => state.user.user.username);

  return (
    <Container
      ml={largeScreen ? 600 : midScreen ? 320 : 280}
      mt={60} mb={60}>
      <Paper radius="md" p={10} shadow={"lg"}>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Low Risk" value="1" />
              <Tab label="Medium Risk" value="2" />
              <Tab label="High Risk" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <h2>Fixed Deposits</h2>
            <MainOne />
          </TabPanel>
          <TabPanel value="2">
          <h2>Governement Scheme and Bonds</h2>
            <MainTwo />
          </TabPanel>
          <TabPanel value="3">
            Investing in Future and Options involves high risk but can also give high returns. It is necessary to gain enough knowledge before investing in them.
            <hr style={{ width:"100%" }}/>
            <div className="d-flex flex-column buttons-3-width">
              <Button>
                <Link to={"/learn/" + userName}>Learn about Trading</Link>
              </Button>
              <Button>
                <Link to={"/widgets/tradingview/" + userName}>
                  Check Stock Trends
                </Link>
              </Button>
              <Button>
                <Link to={"/portfolio/" + userName}>View your Portfolio</Link>
              </Button>
            </div>
          </TabPanel>
        </TabContext>
      </Box>
      </Paper>
    </Container>
  );
}
