import { useContext } from "react";
import { TodoContext } from "../Methods/Context/TodoContext";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

//font-size for eeverthing but the manual font-size not included
ChartJS.defaults.font.size = 14;

const ChartCircle = function () {
  const {
    todo: { todos },
  } = useContext(TodoContext);

  // specific todos length
  const activeTodos = todos.filter((todos) => !todos.isCompleted).length;
  const completedTodos = todos.filter((todos) => todos.isCompleted).length;

  const data = {
    labels: ["Active todo", "Completed todo"],
    datasets: [
      {
        data: [activeTodos, completedTodos],
        backgroundColor: [
          "rgba(118, 118, 181, 0.2)",
          "rgba(72, 140, 117, 0.2)",
        ],
        borderColor: ["rgba(118, 118, 181, 1)", "rgba(72, 140, 117, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Doughnut
      data={data}
      options={{
        plugins: {
          datalabels: {
            color: "black",
            font: {
              size: 20,
              weight: "bold",
            },
          },

          legend: {
            labels: {
              font: {
                size: 14.5,
                weight: "bold",
              },
            },
          },
        },
      }}
    />
  );
};

export default ChartCircle;
