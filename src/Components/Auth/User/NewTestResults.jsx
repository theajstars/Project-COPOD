import React, { useState } from "react";
import { Container } from "@mui/material";
import { PieChart, Pie, Cell } from "recharts";

import { Select } from "antd";

export default function NewTestResults() {
  const { Option } = Select;
  const [verdictValue, setVerdictValue] = useState("Negative");
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
  ];
  const COLORS = ["#89E3A8", "#F15757"];

  const changeTestResult = (e) => {
    console.log(e);
  };
  return (
    <div className="new-test-results-container">
      <Container maxWidth="lg">
        <center>
          <span className="text-darker-blue cabin test-result-head">
            Test Results
          </span>
          <div className="test-result-box">
            <PieChart width={300} height={300}>
              <Pie
                data={data}
                innerRadius={90}
                outerRadius={150}
                fill="#8884d8"
                paddingAngle={0}
                dataKey="value"
                label
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
            <div className="flex-row pie-key-row">
              <span className="pie-key flex-row">
                <span className="key-color key-color-positive"></span>
                <span className="key-text cabin">Positive test</span>
              </span>
              <span className="pie-key flex-row">
                <span className="key-color key-color-negative"></span>
                <span className="key-text cabin">Negative test</span>
              </span>
            </div>
            <div className="flex-row verdict-row cabin">
              <span className="cabin verdict-text">Verdict: </span>
              <span
                className={`cabin verdict-value ${
                  verdictValue ? "negative-verdict" : "positive-verdict"
                }`}
              >
                {verdictValue}
              </span>
            </div>

            <Select
              defaultValue="negative"
              style={{ width: 120 }}
              onChange={changeTestResult}
            >
              <Option value="negative">Negative</Option>
              <Option value="positive">Positive</Option>
            </Select>
          </div>
        </center>
      </Container>
    </div>
  );
}
