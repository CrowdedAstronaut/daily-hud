import React from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import styled from "styled-components";

const Wrapper = styled.div``;

const HalfDonutChart = ({ id = "gauge" }) => {
  var data = {
    datasets: [
      {
        label: "Fear & Greed",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "#336699",
          "#99CCFF",
          "#999933",
          "#666699",
          "#CC9933",
          "#006666",
          "#3399FF",
          "#993300",
          "#CCCC99",
          "#666666",
          "#FFFFFF",
          "#FFFFFF",
          "#FFFFFF",
        ],
        display: true,
        borderColor: "#D1D6DC",
      },
    ],
  };

  const options = {
    rotation: 1 * Math.PI,
    circumference: 1 * Math.PI,
  };

  const plugins = [
    {
      beforeDraw: function (chart) {
        var width = chart.width,
          height = chart.height,
          ctx = chart.ctx;
        ctx.restore();
        var fontSize = (height / 160).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.textBaseline = "top";
        var text = "Fear & Greed",
          textX = Math.round(
            (width - ctx.measureText(text).width) / 2
          ),
          textY = height / 2;
        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    },
  ];

  return (
    <>
      <Wrapper>
        <Doughnut
          width={"140px"}
          height={"140px"}
          id={id}
          data={data}
          plugins={plugins}
          options={options}
        />
      </Wrapper>
    </>
  );
};

export default HalfDonutChart;
