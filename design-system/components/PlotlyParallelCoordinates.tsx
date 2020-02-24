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

var trace = {
  type: 'parcoords',
  line: {
    color: 'blue'
  },
  
  dimensions: [{
    range: [1, 5],
    constraintrange: [1, 2],
    label: 'A',
    values: [1,4]
  }, {    
    range: [1,5],
    label: 'B',
    values: [3,1.5],
    tickvals: [1.5,3,4.5]
  }, {
    range: [1, 5],
    label: 'C',
    values: [2,4],
    tickvals: [1,2,4,5],
    ticktext: ['text 1','text 2','text 4','text 5']
  }, {
    range: [1, 5],
    label: 'D',
    values: [4,2]
  }]
};

var data = [trace]

var layout = {
  width:933,
  height:300
};

// layout={ {width: 320, height: 240, title: 'A Fancy Plot'} }



export const PlotlyParallelCoordinates: React.FC<Props> = ({
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
