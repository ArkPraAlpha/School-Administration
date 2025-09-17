import { ResponsiveLine } from "@nivo/line";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";

// 1. New mock data for college statistics over time.
const collegeStatsData = [
  {
    id: "Registered",
    color: tokens("dark").greenAccent[500],
    data: [
      { x: "Jan", y: 150 },
      { x: "Feb", y: 165 },
      { x: "Mar", y: 180 },
      { x: "Apr", y: 210 },
      { x: "May", y: 230 },
      { x: "Jun", y: 245 },
    ],
  },
  {
    id: "Active",
    color: tokens("dark").blueAccent[300],
    data: [
      { x: "Jan", y: 130 },
      { x: "Feb", y: 140 },
      { x: "Mar", y: 155 },
      { x: "Apr", y: 180 },
      { x: "May", y: 195 },
      { x: "Jun", y: 215 },
    ],
  },
  {
    id: "Inactive",
    color: tokens("dark").redAccent[200],
    data: [
      { x: "Jan", y: 20 },
      { x: "Feb", y: 25 },
      { x: "Mar", y: 25 },
      { x: "Apr", y: 30 },
      { x: "May", y: 35 },
      { x: "Jun", y: 30 },
    ],
  },
];

const LineChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveLine
      data={collegeStatsData} // 2. Use the new data
      theme={{
        axis: {
          domain: { line: { stroke: colors.grey[100] } },
          legend: { text: { fill: colors.grey[100] } },
          ticks: {
            line: { stroke: colors.grey[100], strokeWidth: 1 },
            text: { fill: colors.grey[100] },
          },
        },
        legends: { text: { fill: colors.grey[100] } },
        tooltip: { container: { color: colors.primary[500] } },
      }}
      colors={{ datum: "color" }}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: false, // 3. Set stacked to false to compare trends
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="catmullRom"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 0,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "Month", // 4. Updated legend
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickValues: 5,
        tickSize: 3,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "Number of Colleges", // 5. Updated legend
        legendOffset: -40,
        legendPosition: "middle",
      }}
      enableGridX={false}
      enableGridY={false}
      pointSize={8}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default LineChart;