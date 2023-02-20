import { useSelector } from "react-redux";
import {
  Dashboard,
  ZoomMoney,
  ChartBar,
  Settings,
  Cash,
  ReportMoney,
  ArrowCurveRight,
  BuildingWarehouse,
  Calculator,
  Book,
} from "tabler-icons-react";

import { RootState } from "../Redux/store";

export function NavigationLinkData() {
  const username = useSelector((state: RootState) => state.user.user.username);

  const navLinkData = [
    { link: `/dashboard/${username}`, label: "Dashboard", icon: Dashboard },
    { link: `/expense/${username}`, label: "Expense", icon: ZoomMoney },
    { link: `/portfolio/${username}`, label: "Portfolio", icon: ChartBar },
    { link: `/budget/${username}`, label: "Budget", icon: Cash },
    { link: `/learn/${username}`, label: "Learn", icon: Book },
    { link: `/widgets/tradingview/${username}`, label: "Stock trends", icon: ArrowCurveRight },
    // { link: `/widgets/economiccalendar/${username}`, label: "Economic Calendar", icon: Settings },
    // { link: `/widgets/stockmarket/${username}`, label: "Stock Market", icon: Settings },
    { link: `/investments/${username}`, label: "Investments", icon: ReportMoney },
    { link: `/widgets/stockmarket/${username}`, label: "Stock Market", icon: BuildingWarehouse },
    { link: `/emicalculator/${username}`, label: "EMI Calculator", icon: Calculator },
  ];

  return {
    navLinkData,
  };
}
