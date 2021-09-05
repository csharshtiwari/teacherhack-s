import React from "react";
import ReactDOM from "react-dom";
import Chart from "react-google-charts";

const data = [
    ["Skills", "Review", { role: "style" }],
    ["Punctuality", 20, "color: gray"],
    ["Sincerity", 14, "color: #76A7FA"],
    ["Subject Knowledge", 16, "color: blue"],
    ["Presentation Skills", 22, "stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF"],
    ["Communication SKills", 28, "color: #871B47"]
];
class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                <Chart chartType="BarChart" width="100%" height="400px" data={data} />
            </div>
        );
    }
}

export default Home
