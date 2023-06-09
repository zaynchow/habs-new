import React from "react";
import Display1 from "../Typography/Display1";
import Button from "../Utils/Button";
import { Subtitle } from "../Typography";



const Hero = ({ data }) => {
  return (
    <div className=" py-[200px] mb-[50px] ml-6 mr-[11vw] md:m-0 mx-auto border-box">
      <div className=" md:absolute w-[45vw] md:h-full xl:top-[1vh] md:top-[6vh]  right-0 translate-x-[44%] hidden md:inline-block opacity-50 animate-fadeInHero">
        <svg
          id="bull"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 720 576"
          className="scale-x-[-1]"
        >
          <g>
            <path
              d="M458.4,358.3c-2.2,0-5.2-0.8-9.2-1.8c-5-1.3-10.7-2.8-15.6-2.8v-4c5.4,0,11.6,1.6,16.6,2.9c3.1,0.8,7.4,1.9,8.6,1.7
		c2.8-3.6,31.8-36.4,32.8-37.6l-3.9,7c-0.2,0.3-23.8,30.6-25.8,33.2C461.2,357.9,460,358.3,458.4,358.3L458.4,358.3z"
            />
          </g>
          <g>
            <path
              d="M467.1,399.7L467,395c0-1.3-0.5-32.2,14.7-37.3l0.3-0.1l12.6,0.5c0.3-3-0.2-8.2,4.5-9.8c4.9-1.6,14.7-8.1,17.5-11.2
		c-3.4,0.1-7.3-0.2-30.4-7l6.4,0.3c25,7.4,22.8,3,25.1,2.6c1.6-0.3,2.3,0.4,2.8,1.2l0.2,0.2c0.3,0.5,0.8,1.4,0.4,2.8
		c-1.5,4.9-15.8,13.3-20.7,14.9c-4.4,1.5-4,6.4-4,6.6l0.2,2.1l-13.8,0.8c-8.5,3.1-11.1,18.7-11.6,28.5c3.4-3.3,8.1-7.8,9.5-8.8
		c1.1-0.7,2.8-0.8,6.2-0.8c3.9,0,13.3,0.9,13.8-1.6c1.5-6.6,20.5-31.3,29.3-30.6c4.1,0.4,6.6-3,9.8-7.7c0.9-1.3,1.7-2.5,2.5-3.5
		c1.7-2.1,0.5-8.8-0.9-13.1l-3-3.7c-0.6-0.6-0.3-2.4-7.8-10.5c-7.5-8.1-6.7-8.8-13.6-12.9l-8-4.9c0.7,0.2,10.8,2.6,19,11.6
		c7.9,8.5,13.2,13.9,13.3,13.9l0.1,0.1l3.6,4.3l0.1,0.3c0.7,2.1,4.2,12.6,0.3,17.3c-0.7,0.8-1.4,2-2.2,3.2
		c-2.8,4.3-6.7,10.1-13.5,9.5c-0.1,0-0.2,0-0.2,0c-6.3,0-25.8,21.1-27,26.5c-1.3,5.6-9.5,5.7-15.5,5.8c-1.5,0-3.5,0-4.1,0.2
		c-1.5,1.1-8.3,7.7-12.3,11.7L467.1,399.7L467.1,399.7z"
            />
          </g>
          <g>
            <path
              d="M495,308l2.2-7.7c1.9-4.8,3.1-8.9,3.3-9.4c0.5-2,3.7-17,2.6-28.3c-1.1-10.4,2.7-27.7,8.5-32.4c1.9-1.6,3.7-1.4,4.8-1.1
		c4.1,1.4,11.2-2.7,13.5-4.4l0.8-0.6l0.9,0.3c20.7,6.3,23.8,4.1,26.7,2c1.5-1.1,3.2-2.3,6.4-2.8c7.7-1.1,11.4,1.2,17,4.6
		c1.8,1.1,3.8,2.3,6.3,3.6c9,4.8,22-1.9,22.1-2l0.7-0.4l0.7,0.2c1.7,0.4,3,0.3,4-0.4c1.6-1.1,2.1-3.7,2.2-4.5l0.1-1l0.9-0.5
		c4.4-2.7,6-10.3,5.7-12.5c-15.4-10.2-19.1-20.2-19.8-24.5c-0.1-0.4-0.1-0.7-0.2-0.9c-0.5-2.5-3.4-7.6-4.4-9.4l-0.3-0.5V175
		c0-0.1,0-3.7,1.4-8c0.5-1.6-3.1-6.5-6.8-9.9l-2.8-3.2c13.4,3.8,23.5,4.1,23.5,4h4c12.2,0,19.7-4.6,26.6-11.8
		c6.2-6.5,9.2-14.7,10.6-21.6c-12.5,23.7-31.6,27.8-46.6,23c-15.8-5.1-19.9-5.2-20.1-5.2l-1.3,0l-0.5-1.2
		c-6.8-16-34.7-20.7-37.9-21.4l3.9-1.4c14.8-3.2,24.9-9.2,30.3-17.8c2.4-4,3.5-7.9,3.9-11.3c-10.5,20-28.7,19.5-42.4,19.1
		c-2.8-0.1-5.5-0.1-7.9,0c-13.9,0.6-15.4,7.4-15.4,7.7l-0.4,2l-2-0.4c-0.9-0.2-85.6-19.1-120.3,7.6c-35.1,27-78,41.3-107.7,48.5
		c-33.5,8.1-59.1,9.5-61.7,9.2c-6.7-0.8-28.5-3.7-31.6-2.2c-0.4,0.2-0.9,0.5-1.4,0.8c-3.8,2.1,0.2,5.2-10.3,5.9l-2.3-0.7
		c9.6,0.5,8.6-4.8,12.1-6.7c0.6-0.4,1.2-0.7,1.6-0.9c4.9-2.5,29.2,1.1,33,1.6c6.5,0.8,101.2-8.8,166-58.7
		c33.8-26,110.4-9.1,123.2-6.4c1.4-3,4.5-10.8,17.3-11.3c2.6-0.1,5.3,0,8.2,0c15.7,0.4,33.4,0.9,42-24.7l2.1-6.4l1.7,6.5
		c0.1,0.5,2.9,11.6-4,22.8c-4.8,7.8-13.9,13-28.1,16.7c11,1.8,26.1,7.9,31.5,19.1c2.3,0.3,7.8,1.4,19.9,5.3
		c7.6,2.4,33.9,8.9,47.5-31l1.1-1.5c0,0.9,2.9,23.2-11,37.7c-7.7,8-18.3,12.1-31.5,12.1c-0.8,0.1-6,0.3-15.4-1.7
		c2.2,2.9,4.1,6.3,3.2,9c-0.9,2.7-1.2,5.2-1.2,6.2c1,1.7,4,7,4.6,10.1c0.1,0.3,0.1,0.6,0.2,1c0.7,4.3,2.4,14.3,16.9,23.7l0.7,0.5
		l0.2,0.8c0.1,0.4,2,10.6-4.8,15.6c-0.3,1.6-1.2,4.6-3.7,6.4c-1.8,1.3-4,1.7-6.6,1.2c-3,1.5-15.6,6.8-25.2,1.7
		c-2.6-1.4-4.6-2.6-6.5-3.8c-5.3-3.3-8-4.9-14.3-4c-2.2,0.3-3.4,1.1-4.7,2.1c-4.5,3.2-9.2,2.2-29.5-3.9c-2.6,1.7-10.2,9-16.1,7.1
		c-0.1,0-0.4-0.1-1.1,0.4c-3.9,3.1-8.1,18.2-7,28.8c1.3,11.9-2.3,21.3-2.9,24.2c0,0-1.5,5.4-3.5,10.7L495,308z"
            />
          </g>
          <g>
            <path
              d="M68.7,303.2c-0.1,0-0.2,0-0.3,0c-3.5-0.5-5.1-9.9-5.1-10.3c-0.8-5.1,2.3-17.8,14-23.9c15.5-8,20.2-12.2,1.9-55.8
		c-0.4-0.9-4-9,0.8-17.3c5.4-9.4,19.1-14.8,40.7-16.2c2.1-0.4,17.9-4.3,37.6,3c4.4,1.6,7.9,2.9,11.9,3.1l7.7,1.9
		c-4.5-0.2-13-0.9-17.7-2.8c-19.9-8-36.1-3.5-36.3-3.5l-0.3,0c-20,1.2-35.5,8.4-40.2,16.4c-3.9,6.7-0.7,13.5-0.7,13.6l0,0.1
		c18.8,44.9,10.3,51.9-7.6,61.2c-4.6,2.4-7.4,6.3-8.2,11.7c-0.9,5.5,0.6,10.8,1.7,13.5c0.5-0.6,1-1.2,1.6-1.9
		c3.2-3.7,8-9.2,9.3-14.8c2.1-8.9,8.6-13.9,9.4-14.5c12.5-10.2,3.8-34.8-1.4-49.4c-1.9-5.3-3.2-9.1-3.4-11.5
		c-0.1-1.8,0.4-4.6,3.5-7.5c6.5-5.9,23.3-10.5,44.8-6.6c20.4,3.7,26.6,5.5,30.6,7.1l-9.1-1c-11-1.8-7.2-1.6-23.6-3.7
		c-19.4-2.4-34,1.8-40,7.2c-1.1,1-2.4,2.5-2.2,4.2c0.1,1.8,1.6,5.8,3.2,10.5c5.5,15.7,14.1,40.2-4.2,55.3c0,0-5.3,5.1-4.7,11
		c0.6,6.7-5.8,12.4-9.2,16.4c-1.2,1.3-2.3,2.7-2.6,3.2C70.4,302.7,69.6,303.2,68.7,303.2L68.7,303.2z"
            />
          </g>
          <g>
            <path
              d="M465.2,463.1c-5.2,0-11.5-1.9-18.2-8c-0.5-0.5-3.7-3.4-4.6-9.2c-1.9-1.7-7.5-7.2-8.8-14c-0.4-2.1-0.7-4.8-1.1-7.7
		c-0.8-6.6-1.8-14.9-4-18.3c-1.5-2.4-2.6-3-3.8-3.6c-1.3-0.7-2.7-1.4-4.2-3.7c-0.7-1-2-2.6-3.5-4.4c-4.3-5.2-10.2-12.3-12.7-19.4
		c-3.2-8.9-7.2-17.7-7.2-17.8l-9.3-13.7c-2.6-1.7-24.5-12.2-38-9.9c-2.2,0.4-5,0.9-8.2,1.5c-18.4,3.6-40.1,10.2-73.2,4.5
		c0,4.9-1.2,18.1-2.2,26.5c0.8,2.6,3.7,17.3,5,24.2c5.3,8.6,16.5,21.7,20.4,23.5c6.5,2.9,18.9,14,21.1,19.8l0.5,1.3l-1.1,0.9
		c-0.3,0.3-8.2,6.5-26.8,4.4l-1-0.1l-0.5-0.8c-0.2-0.4-5.4-8.9-8.8-16.2c-3.1-6.7-12.1-20.3-13.2-21.6c-2.7-2.5-27.6-23.4-28.3-33.8
		c-0.2-3.5,0.1-7.6,0.4-11.6c0.5-7.1,1.1-15.2-1.7-17.7c-5.1-4.4-19.7-21.6-21.9-28.9c0,0.1-1.5-1.5-3.9-1.5c-0.1,0-3.3,0.2-3.4,0.3
		c-14.2,1.8-29.9,9.7-35.2,16.5c-1.7,2.2-3.1,5.1-4.6,8.4c-4.7,10.1-11.2,23.9-36.1,36.6c-1.3,2.5-6.4,11.8-13.5,14.4
		c-6.5,2.4-21.2,25.1-21.2,29c0,3.6,5,22.2,6.4,28.4l0.3,1.3l-1,0.8c-0.1,0.1-14.5,10.9-27.9-1.1l-1.1-0.9l0.5-1.3
		c0.1-0.2,8-19.5,14-36.6c4.5-12.9,4.8-19.7,5-23.7c0.1-1.4,0.1-2.4,0.3-3.4c0.1-0.4,0.2-1.2,0.4-2.2c3.2-19.6,6.2-27.6,10.4-28.7
		c3.5-0.9,6.7-1,7.4-1.6c1.1-7.1,3.2-28.7,8.9-31.6c2.8-1.4,3.4-9.4,2.9-14.7l0-0.3l0.1-0.3c0.1-0.3,6.8-31,13.4-48.3
		c2.5-6.5,3-11.5,3.5-16c0.8-7.1,1.4-12.7,10-17.7c10.9-6.3,20-11.7,22.2-13l3.3-3.2c1.3,0.5-1,2.8-1,2.8l-4.6,4.1l-3.2,1.9
		c-8.3,3.7-3.9,3.6-17.6,12.4c-6.7,4.3-6.2,12.8-7,19.7c-0.5,4.5,0.8,3.4-1.9,10.3c-6.2,16.1-12.5,44.2-13.2,47.4
		c0.3,3.2,0.9,15.3-5.1,18.3c-2.7,1.4-6.4,15.5-8.2,27.8l-0.1,0.5l-0.3,0.4c-0.2,0.3-2.6,3.3-8.4,4.7c-0.8,0.2-3.7,2.7-7.5,25.4
		c-0.2,1.1-0.3,1.9-0.4,2.3c-0.1,0.6-0.2,1.6-0.2,2.8c-0.2,4.3-0.5,11.4-5.2,24.8c-5,14.6-11.6,30.7-13.5,35.4
		c8.8,6.9,17.7,2.6,20.7,0.7c-1.2-5.2-5.1-21.9-5.1-26.1c0-5.5,14.5-31.6,22.6-34.5c5.4-2,10.2-10,11.5-13l0.3-0.6l0.6-0.3
		c24.2-12.1,30.4-25.3,34.9-35c1.6-3.5,3.1-6.6,5.1-9.1c6.9-8.8,36-18.9,45.3-17.1c2.8,0.5,3.8,2,4.2,3.1c1.8,6,15.4,22.4,20.7,27.1
		c4.3,3.8,3.7,12.1,3,21c-0.3,3.9-0.6,7.9-0.4,11c0.5,7.5,16.5,23.7,22.7,29.3l0.2,0.2c0.6,0.7,14.9,17,18.3,24.5
		c2.6,5.8,6.6,12.6,8,14.9c12,1.2,18.8-1.5,21.5-2.9c-3.1-5.1-13.2-13.9-18.2-16.1c-6.4-2.8-19.4-23.7-20.9-26.1l-0.2-0.3l-0.1-0.4
		c-1.3-7.1-6.6-23.6-6.6-23.7l-0.1-0.4l0.1-0.4c1.3-10.4,1.3-26.9,1.3-27.1v-2.3l2.3,0.4c25.2,3.9,56.4-2.1,75.1-5.8
		c3.2-0.6,6-1.2,8.2-1.6c15.9-2.8,38.5,12.3,39.5,13l0.3,0.2l9.5,12.9c0.2,0.3,6.2,8.3,9.6,17.8c2.3,6.4,8.2,13.5,12,18.1
		c1.6,2,2.9,3.6,3.7,4.7c0.9,1.4,1.7,1.8,2.7,2.3c1.4,0.8,3.2,1.7,5.3,5c2.6,4.2,3.7,12.6,4.6,19.9c0.3,2.8,0.7,5.4,1,7.4
		c1.2,6.5,7.9,12.1,8,12.1l0.6,0.5l0.1,0.8c0.6,5,3.2,7.2,3.3,7.3l0.1,0.1c12.6,11.6,23.2,5.8,26,3.8c-0.5-4.7-7.4-9.6-12.1-13
		c-4.1-3-6.2-4.5-6.5-6.3c-0.5-2.4-2.4-5.8-5.6-9.8c-2.7-3.4-14.2-24.6-15.5-27l-0.2-0.4V399c0-18.8-5.9-39.2-5.9-39.4l-0.2-0.5
		l2.1-7.9c0.1-0.2,7-28.5,7-38.1l2.3-7.4c0,10.1-5.1,45.3-5.4,46.5l-1.9,6.8c1,3.4,5.8,21.8,5.9,39.5c3.7,6.8,12.8,23.4,14.9,25.9
		c3.6,4.5,5.7,8.3,6.4,11.4c0.5,0.8,3,2.6,5,4c6,4.3,14.3,10.2,13.8,17.4l-0.1,0.8l-0.6,0.5C478.9,458.6,473.4,463.1,465.2,463.1
		L465.2,463.1z"
            />
          </g>
          <path d="M164,325c0,0,8-30.5,19-37.5c0,0-13,21-15,34L164,325z" />
          <path d="M212.3,309c0,0,25.8,6.3,33.3,10.3c0,0-21.8-14.2-36.6-14.2L212.3,309z" />
          <path d="M267.2,337.7c-2.2-0.7-7-2.6-9.2-5.5c0,0,2.6,4.3,7.6,6.8C269,340.7,267.2,337.7,267.2,337.7z" />
        </svg>
      </div>
      <div className="absolute md:w-[35vw] md:h-full  w-[190vw]  h-[180vh] overflow-hidden  top-0 translate-x-[50%] opacity-50  xl:top-[2vw] md:top-[5vw]  md:left-0 md:-translate-x-[40%] right-0 animate-fadeInHero ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Layer_1"
          data-name="Layer 1"
          viewBox="0 0 1972.29 1627.31"
        >
          <defs>
            <style>
              {
                ".cls-2{stroke-width:5.66px}.cls-2,.cls-3,.cls-8{stroke:#5f5657}.cls-2,.cls-3{fill:#fff}.cls-3,.cls-8{stroke-miterlimit:10}.cls-2{stroke-linecap:round;stroke-linejoin:round}.cls-3,.cls-8{stroke-width:11.32px}.cls-8{fill:none}.cls-13,.cls-14{opacity:.3;fill:#5f5657}.cls-14{opacity:.4}"
              }
            </style>
          </defs>
          <path
            d="M1971.2 1575.41H1.09s690.67-135.87 837.86-668.03c110.39-433.76 138.47-620.36 145.38-693.61l1.81-11.87 1.81 11.87c6.91 73.26 34.99 259.85 145.38 693.61 147.19 532.16 837.86 668.03 837.86 668.03Z"
            className="cls-3"
          />
          <path
            d="m936.44 494.06-97.66 1081.35M1100.04 1575.41l-64.18-1081.35M1235.92 1575.41l-95.93-645.48M1221.5 1104.77l155.61 470.64M1299.25 1207.21l202.4 368.2M1392.05 1297.42l229.49 277.99"
            className="cls-8"
          />
          <path
            d="m854.1 1575.41 112.65-68.95 112.64 68.95H854.1z"
            className="cls-3"
          />
          <path
            d="M906.76 1013.93h145.79v23.43H906.76zM906.76 1037.36l9.59 10.04h124.25l11.95-10.04H906.76z"
            className="cls-2"
          />
          <path
            d="m281.12 1575.41 361.43-335.7M414.32 1575.41l269.28-380.27M691.39 1575.41l123.88-596.97M554.96 1575.41l184.39-453.16"
            className="cls-8"
          />
          <path
            d="m917.5 703.76-127.7 871.65h48.98l78.72-871.65zM1048.66 709.77l100.8 865.64h-48.99l-51.81-865.64zM809.1 1008.19l-156.5 567.22h38.79l117.71-567.22zM730.85 1143.14l-216.78 432.27h40.89l175.89-432.27zM636.09 1262.23l-264.85 313.18h43.08l221.77-313.18zM509.48 1359.27 233 1575.41h48.12l228.36-216.14zM1147.19 978.44l131.48 596.97h-42.75l-88.73-596.97zM1227.28 1122.25l190.92 453.16h-41.09l-149.83-453.16zM1299.25 1207.21l241.83 368.2h-39.43l-202.4-368.2zM1400.45 1307.59l277.17 267.82h-56.08l-221.09-267.82z"
            className="cls-14"
          />
          <path
            d="M1800.83 1621.65H172.43"
            style={{
              fill: "none",
              strokeWidth: "11.32px",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "#5f5657",
            }}
          />
          <path d="M1585.77 1098.67h28.78v522.53h-28.78z" className="cls-3" />
          <path
            d="M1593.25 579.52h13.81v519.15h-13.81z"
            style={{
              strokeMiterlimit: 10,
              fill: "#fff",
              stroke: "#5f5657",
              strokeWidth: "5.66px",
            }}
          />
          <path
            d="M1598.19 39.11h4.89v540.41h-4.89z"
            style={{
              strokeWidth: "2.83px",
              strokeMiterlimit: 10,
              fill: "#fff",
              stroke: "#5f5657",
            }}
          />
          <path
            d="m1598.19 39.11-9.21-5.47V20.41h11.65v18.7h-2.44z"
            style={{
              stroke: "#ccc",
              fill: "none",
              strokeWidth: "2.83px",
              strokeMiterlimit: 10,
            }}
          />
          <path
            d="m1603.08 39.11 9.21-5.47V20.41h-11.66v18.7h2.45z"
            style={{
              stroke: "#a3a3a3",
              fill: "none",
              strokeWidth: "2.83px",
              strokeMiterlimit: 10,
            }}
          />
          <path
            d="M1588.98 20.41h-5.33v-7.77l11.16-11.22h5.82v18.99h-11.65z"
            style={{
              stroke: "#dbdbdb",
              fill: "none",
              strokeWidth: "2.83px",
              strokeMiterlimit: 10,
            }}
          />
          <path
            d="M1612.29 20.41h5.32v-7.77l-11.15-11.22h-5.83v18.99h11.66z"
            style={{
              stroke: "#8c8c8c",
              fill: "none",
              strokeWidth: "2.83px",
              strokeMiterlimit: 10,
            }}
          />
          <path
            d="M1598.2 39.13v238.43l-.1.1c-.39.59-5.87 6.95-32.97 4.5 0 0 8.61 14.19-10.96 27.2-4.3 2.84-8.41 6.75-12.13 11.15h-.1c-13.6 15.65-23.48 37.47-23.48 37.47s-48.33 6.26-52.34 12.03c-4.01 5.77-25.93 54.1-40.31 63.3-5.19 3.23-14.28 8.61-23.87 14.09-17.42 9.88-36.59 20.45-36.59 20.45s-32.78-1.17-32.19-8.61c.59-7.53 14.38-51.27 16.14-59.88 1.66-8.61-29.94-6.85-30.53-16.63s24.75-68 23.58-73.38c-1.17-5.48-18.98-27.98-17.22-34.24 1.66-6.36 22.4-17.9 32.19-23.09 9.78-5.19 17.32-27 24.17-40.8 2.05-4.11 7.14-9.88 13.7-16.05.1-.1.1-.2.1-.2 15.46-14.58 38.94-31.7 50.68-36.2 6.07-2.25 26.32-19.18 49.7-39.72 33.46-29.55 73.48-66.82 87.86-80.32l5.48-5.09 9.2 5.48Z"
            style={{
              fill: "#ccc",
              strokeWidth: "2.83px",
              strokeMiterlimit: 10,
              stroke: "#5f5657",
            }}
          />
          <path
            d="M1487.4 337.8s-50.07 21.29-62.16-23.6c-12.09-44.89-10.93-82.87 21.29-117.98 32.23-35.11 47.77-43.16 80-34.53s33.38 24.17 26.47 48.92c-6.91 24.75-18.42 106.47-65.61 127.19Z"
            style={{
              strokeWidth: "2.83px",
              fill: "#f5f5f5",
              strokeMiterlimit: 10,
              stroke: "#5f5657",
            }}
          />
          <path
            d="m1061.25 1506.5-94.54-70.08-86.17 70.08 36.91-426.85h112.32l31.48 426.85zM917.5 996.68h118.36l-49.71-482.19-68.65 482.19z"
            className="cls-13"
          />
        </svg>
      </div>

      <Display1 className="text-left lg:text-center md:max-w-[600px] md:mx-auto">
        Achieving Financial
        <span className="text-yellow"> Success</span>
      </Display1>
      <Subtitle className=" md:text-[20px] font-light md:mt-6 md:mb-9 my-6 tracking-[1.2px]  md:!text-center !text-left mx-0 md:mx-auto">
        Your trusted investment partner since 1956
      </Subtitle>
      <div className="md:text-center flex flex-col md:block ">
        <Button
          link={data.join_us}
          bgColor="bg-black"
          className="mr-4 text-white"
        >
          Join Us
        </Button>
        <Button
          link="/services"
          bgColor="bg-white"
          outline={true}
          className={"px-9 mt-2 md:mt-0"}
        >
          See Services
        </Button>
      </div>
    </div>
  );
};

export default Hero;

