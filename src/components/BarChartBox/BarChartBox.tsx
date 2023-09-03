import "./BarChartBox.scss";
import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";
type Props = {
  title: string;
  dataKey: string;
  color: string;
  chartData: object[];
};

const BarChartBox = (props: Props) => {
  return (
    <div className="barchartbox">
      <h1>{props.title}</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={150}>
          <BarChart width={150} height={40} data={props.chartData}>
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "none" }}
            />
            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartBox;