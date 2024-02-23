import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import ApexCharts from "apexcharts";

var defaultOptions = {
  series: [
    {
      name: "Number of Projects",
      type: "column",
      data: [75, 85, 72, 100, 50, 100, 80, 75, 95, 35, 75, 100],
    },
    {
      name: "Revenue",
      type: "area",
      data: [44, 65, 55, 75, 45, 55, 40, 60, 75, 45, 50, 42],
    },
    {
      name: "Active Projects",
      type: "line",
      data: [30, 25, 45, 30, 25, 35, 20, 45, 35, 20, 35, 20],
    },
  ],
  chart: {
    height: 350,
    type: "line",
    stacked: false,
    toolbar: {
      show: false,
    },
  },
  stroke: {
    width: [0, 1, 1],
    curve: "straight",
    dashArray: [0, 0, 5],
  },
  legend: {
    fontSize: "13px",
    fontFamily: "poppins",
    labels: {
      colors: "#888888",
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "18%",
      borderRadius: 6,
    },
  },

  fill: {
    //opacity: [0.1, 0.1, 1],
    type: "gradient",
    gradient: {
      inverseColors: false,
      shade: "light",
      type: "vertical",
      /* opacityFrom: 0.85,
			opacityTo: 0.55, */
      colorStops: [
        [
          {
            offset: 0,
            color: "var(--primary)",
            opacity: 1,
          },
          {
            offset: 100,
            color: "var(--primary)",
            opacity: 1,
          },
        ],
        [
          {
            offset: 0,
            color: "#3AC977",
            opacity: 1,
          },
          {
            offset: 0.4,
            color: "#3AC977",
            opacity: 0.15,
          },
          {
            offset: 100,
            color: "#3AC977",
            opacity: 0,
          },
        ],
        [
          {
            offset: 0,
            color: "#FF5E5E",
            opacity: 1,
          },
          {
            offset: 100,
            color: "#FF5E5E",
            opacity: 1,
          },
        ],
      ],
      stops: [0, 100, 100, 100],
    },
  },
  colors: ["var(--primary)", "#3AC977", "#FF5E5E"],
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  markers: {
    size: 0,
  },
  xaxis: {
    type: "month",
    labels: {
      style: {
        fontSize: "13px",
        colors: "#888888",
      },
    },
  },
  yaxis: {
    min: 0,
    tickAmount: 4,
    labels: {
      style: {
        fontSize: "13px",
        colors: "#888888",
      },
    },
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (y) {
        if (typeof y !== "undefined") {
          return y.toFixed(0) + " points";
        }
        return y;
      },
    },
  },
};

const periods = [
  {
    id: 1,
    case: "week",
  },
  {
    id: 2,
    case: "month",
  },
  {
    id: 3,
    case: "year",
  },
  {
    id: 4,
    case: "all",
  },
];

const ApexChart = () => {
  const [options, setOptions] = useState(defaultOptions);
  const [seriesType, setSeriesType] = useState(periods[0].case);

  const handleChangeSeriesType = (seriesType) => {
		setSeriesType(seriesType)
  };

  useEffect(() => {
		var chart = new ApexCharts(document.querySelector("#overiewChart"), defaultOptions);
    chart.render();

		if (seriesType) {
			var columnData = [];
			var areaData = [];
			var lineData = [];
			switch (seriesType) {
				case "week":
				columnData = [75, 85, 72, 100, 50, 100, 80, 75, 95, 35, 75,100];
        areaData = [44, 65, 55, 75, 45, 55, 40, 60, 75, 45, 50,42];
        lineData = [30, 25, 45, 30, 25, 35, 20, 45, 35, 20, 35,20];
	
					break;
				case "month":
					columnData = [20, 50, 80, 52, 10, 80, 50, 30, 95, 10, 60, 85];
					areaData = [40, 25, 85, 45, 85, 25, 95, 65, 45, 45, 20, 12];
					lineData = [65, 45, 25, 65, 45, 25, 75, 35, 65, 75, 15, 65];
	
					break;
				case "year":
					columnData = [30, 20, 80, 52, 10, 90, 50, 30, 95, 20, 60, 85];
					areaData = [40, 25, 40, 45, 85, 25, 50, 65, 45, 60, 20, 12];
					lineData = [65, 45, 30, 65, 45, 25, 75, 40, 65, 50, 15, 65];
	
					break;
	
				case "all":
					columnData = [20, 50, 80, 60, 10, 80, 50, 40, 95, 20, 60, 85];
					areaData = [40, 25, 30, 45, 85, 25, 95, 65, 50, 45, 20, 12];
					lineData = [65, 45, 25, 65, 45, 25, 30, 35, 65, 75, 15, 65];
					
					break;
				default:
					columnData = [75, 80, 72, 100, 50, 100, 80, 30, 95, 35, 75, 100];
					areaData = [44, 65, 55, 75, 45, 55, 40, 60, 75, 45, 50, 42];
					lineData = [30, 25, 45, 30, 25, 35, 20, 45, 35, 30, 35, 20];
			}
			chart.updateSeries([
				{
					name: "Number of Projects",
					type: 'column',
					data: columnData
				},{
					name: 'Revenue',
					type: 'area',
					data: areaData
				},{
					name: 'Active Projects',
					type: 'line',
					data: lineData
				}
			]);
		}

  }, [seriesType]);
  return (
    <>
      <div className="card overflow-hidden">
        <div className="card-header border-0 pb-0 flex-wrap">
          <h4 className="heading mb-0">Rapport des commandes</h4>
          <ul
            className="nav nav-pills mix-chart-tab"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
								data-series="week"
								id="pills-month-tab"
								data-bs-toggle="pill"
								data-bs-target="#pills-month"
								type="button"
								role="tab"
								aria-selected="false"
                onClick={() => handleChangeSeriesType("week")}
              >
                Week
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
								data-series="month"
								id="pills-month-tab"
								data-bs-toggle="pill"
								data-bs-target="#pills-month"
								type="button"
								role="tab"
								aria-selected="false"
                onClick={() => handleChangeSeriesType("month")}
              >
                Month
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
								data-series="year"
								id="pills-month-tab"
								data-bs-toggle="pill"
								data-bs-target="#pills-month"
								type="button"
								role="tab"
								aria-selected="false"
                onClick={() => handleChangeSeriesType("year")}
              >
                Year
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
								data-series="month"
								id="pills-month-tab"
								data-bs-toggle="pill"
								data-bs-target="#pills-month"
								type="button"
								role="tab"
								aria-selected="false"
                onClick={() => handleChangeSeriesType("all")}
              >
                All
              </button>
            </li>
          </ul>
        </div>
        <div className="card-body custome-tooltip p-0">
          <div id="overiewChart">
            
          </div>

          <div className="ttl-project ds-chart">
            <div className="pr-data">
              <h5>1.286.898</h5>
              <span>Commandes</span>
            </div>
            <div className="pr-data">
              <h5 className="text-primary">721</h5>
              <span>Clients</span>
            </div>
            <div className="pr-data">
              <h5>$2,50,523</h5>
              <span>Revenue</span>
            </div>
            <div className="pr-data">
              <h5 className="text-success">12,275h</h5>
              <span>Working Hours</span>
            </div>
          </div>
        </div>
      </div>

  
    </>
  );
};

export default ApexChart;
