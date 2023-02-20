import CardComponent from "./CardComponent";

const Data = () => {
  const chapters = [
    {
      title: "1. Introduction",
      subtitle: "15 chapters",
      url: "https://zerodha-common.s3.ap-south-1.amazonaws.com/Varsity/Modules/Module%201_Introduction%20to%20Stock%20Markets.pdf",
      content:
        "Investing ensures financial security, and the Stock market plays a pivotal role in this domain, it is a place where people buy/sell shares of publicly listed companies. In this module, you will learn about the fundamentals of the stock market, how to get started, how it functions and the various intermediaries that appertain it.",
    },
    {
      title: "2. Technical Analysis",
      subtitle: "22 chapters",
      url: "https://zerodha-common.s3.ap-south-1.amazonaws.com/Varsity/Modules/Module%202_Technical%20Analysis.pdf",
      content:
        "Technical Analysis (TA) plays an important role in developing a point of view. Like every other research, TA also has its own attributes. In this module, we will discover all those complex attributes of TA, study various patterns, indicators and theories that will help you as a trader to find upright trading opportunities in the market. ",
    },
    {
      title: "3. Fundamental Analysis",
      subtitle: "16 chapters",
      url: "https://zerodha-common.s3.ap-south-1.amazonaws.com/Varsity/Modules/Module%203_Fundamental%20Analysis.pdf",
      content:
        "Fundamental Analysis (FA) is a holistic approach to study a business. This module will help you understand Equity research, read financial statements, annual reports, calculation of Financial Ratio, Analysis and most importantly evaluate the intrinsic value of a stock to find long-term investing opportunities.",
    },
    {
      title: "4. Futures Trading",
      subtitle: "13 chapters",
      url: "https://zerodha-common.s3.ap-south-1.amazonaws.com/Varsity/Modules/Module%204_Futures%20Trading.pdf",
      content:
        "Futures Trading involves trading in contracts in the derivatives markets. This module covers the various intricacies involved in undergoing a futures trade including margins, leverages, pricing, etc",
    },
    {
      title: "5. Options Theory for Professional Trading",
      subtitle: "25 chapters",
      url: "https://zerodha-common.s3.ap-south-1.amazonaws.com/Varsity/Modules/Module%205_Options-Theory-for-Professional-Trading.pdf",
      content:
        "An option is a contract where the price of the options is based on an underlying. Options contracts grant the buyer the right to buy the underlying without a compulsory obligation.",
    },
    {
      title: "6. Option Strategies",
      subtitle: "14 chapters",
      url: "https://zerodha-common.s3.ap-south-1.amazonaws.com/Varsity/Modules/Module%206_Option%20Strategies.pdf",
      content:
        "The module covers various options strategies that can be built with a multi-dimensional approach based on Market trend involving Option Greeks, Risk-Return, etc.",
    },
    {
      title: "7. Markets and Taxation",
      subtitle: "7 chapters",
      url: "https://zerodha-common.s3.ap-south-1.amazonaws.com/Varsity/Modules/Module%207_Markets%20%26%20Taxation.pdf",
      content:
        "As a trader in India, you should be informed of all the taxes that are levied on your investments and account. This module overlays the taxation countenance of Investing/Trading in the Markets. It also outlines the various essential topics like calculation of your turnover, how to prepare a balance sheet and the P&L statement, and further about how you can file your Income Tax Returns.",
    },
  ];
  return (
    <>
      <div className="d-flex">
        {chapters.map((props) => {
          return <CardComponent props={props} />;
        })}
      </div>
    </>
  );
};

export default Data;