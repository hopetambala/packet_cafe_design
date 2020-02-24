import * as React from "react"
import Plot from 'react-plotly.js';


export type Props = {
  /** Optional string that can be used to set the button value */
  text?: string

  /** Make button grow to 100% */
  fluid?: boolean

  /** Disable button */
  disabled?: boolean

  /** Button kind */
  kind?: "default" | "primary" | "danger"
}

var trace1 = {
  x: ['10.0.0.1', '10.0.2.3', '10.2.10.2',],
  y: [20, 140,100],
  name: 'SMTP',
  type: 'bar'
};

var trace2 = {
  x: ['10.0.0.1', '10.0.2.3', '10.2.10.2',],
  y: [140, 10,40],
  name: 'FTP',
  type: 'bar'
};

var trace3 = {
  x: ['10.0.0.1', '10.0.2.3', '10.2.10.2',],
  y: [10, 20,300],
  name: 'FTP',
  type: 'bar'
};

var trace4 = {
  x: ['10.0.0.1', '10.0.2.3', '10.2.10.2',],
  y: [200, 140,100],
  name: 'SSH',
  type: 'bar'
};

var trace5 = {
  x: ['10.0.0.1', '10.0.2.3', '10.2.10.2',],
  y: [40, 280,50],
  name: 'HTTP',
  type: 'bar'
};

var trace6 = {
  x: ['10.0.0.1', '10.0.2.3', '10.2.10.2',],
  y: [300, 75,200],
  name: 'POP3',
  type: 'bar'
};

var data = [trace1, trace2, trace3, trace4,trace5,trace6];

var layout = {
  yaxis: {
    title: 'Packets',
    zeroline: false
  },
  xaxis: {
    title: 'Machine',
    zeroline: false
  },
  barmode: 'stack',
  width:933,
  height:300
};

// layout={ {width: 320, height: 240, title: 'A Fancy Plot'} }



export const PlotlyStackedBar: React.FC<Props> = ({
  text,
  fluid,
  disabled,
  children,
  kind
}) => (
      <Plot
        data={data}
        layout={layout}
      />
    );
