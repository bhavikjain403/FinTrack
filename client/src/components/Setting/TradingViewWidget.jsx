import React, { useEffect, useRef, memo } from "react";
import { Button, Container, Modal, Paper } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

function TradingViewWidget() {
  const contariner = useRef();
  const midScreen = useMediaQuery("(min-width: 1300px)");
  const largeScreen = useMediaQuery("(min-width: 1750px)");

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "symbols": [
            [
              "Google",
              "GOOGL|1D"
            ],
            [
              "Reliance",
              "RELIANCE|1D"
            ],
            [
              "HDFC",
              "HDFCBANK|1D"
            ],
            [
              "Radico",
              "RADICO|1D"
            ]
          ],
          "chartOnly": false,
          "width": 850,
          "height": 500,
          "locale": "in",
          "colorTheme": "light",
          "autosize": true,
          "showVolume": false,
          "hideDateRanges": false,
          "hideMarketStatus": false,
          "hideSymbolLogo": false,
          "scalePosition": "right",
          "scaleMode": "Normal",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "fontSize": "10",
          "noTimeScale": false,
          "valuesTracking": "1",
          "changeMode": "price-and-percent",
          "chartType": "line"
        }`;
    contariner.current.appendChild(script);
  }, []);

  return (
      <Paper radius="md" p={largeScreen ? 100 : 20} shadow="lg">
        <div className="tradingview-widget-container" ref={contariner}>
        </div>
      </Paper>
    
  );
}

export default memo(TradingViewWidget);

// style={{ color:"#1c7ed6", fontSize:"25px" }}