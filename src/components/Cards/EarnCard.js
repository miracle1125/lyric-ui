import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from '@material-ui/core/Typography';

// @material-ui/icons components
// import ArrowDownward from "@material-ui/icons/ArrowDownward";

// core components
import {
    ResponsiveContainer,
    ComposedChart,
    Line,
    Area,
} from "recharts";
import componentStyles from "../../assets/theme/components/Cards/EarnCard";


const useStyles = makeStyles(componentStyles);

export default function EarnCard({ amount }) {
  const classes = useStyles();
  // const theme = useTheme();

  return (
    <Box className={classes.bgSecondary} height={180} borderRadius="4px">
      <Typography className={classes.earnTitle}>Project Earnings</Typography>
      <Typography className={classes.earnAmount}>${amount}</Typography>
      <ResponsiveContainer height={110} width="100%">
        <ComposedChart data={getRandomData(10)}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#5E5CE6" stopOpacity={0.4}/>
              <stop offset="95%" stopColor="#000000" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <Line type="monotone" unit="M" strokeLinecap="round" strokeWidth={4}
            dataKey="value"
            stroke="#5E5CE6"
            dot={false}
            legendType="none"
          />
          <Area type="monotone" dataKey="value" strokeWidth={2} fillOpacity={1} fill="url(#colorUv)" />
        </ComposedChart>
      </ResponsiveContainer>
    </Box>
  );
}

function getRandomData(length, min, max, multiplier = 10, maxDiff = 10) {
  var array = new Array(length).fill();
  let lastValue;

  return array.map((item, index) => {
    let randomValue = Math.floor(Math.random() * multiplier + 1);

    while (
      randomValue <= min ||
      randomValue >= max ||
      (lastValue && randomValue - lastValue > maxDiff)
    ) {
      randomValue = Math.floor(Math.random() * multiplier + 1);
    }

    lastValue = randomValue;

    return { value: randomValue };
  });
}