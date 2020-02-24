import * as React from "react"
import { ParallelCoordinates } from 'react-vis';

const DATA = [
  {
    name: 'Mercedes',
    mileage: 7,
    price: 10,
    safety: 8,
    performance: 9,
    interior: 7,
    warranty: 7
  },
  {
    name: 'Honda',
    mileage: 8,
    price: 6,
    safety: 9,
    performance: 6,
    interior: 3,
    warranty: 9,
    style: {
      strokeWidth: 3,
      strokeDasharray: '2, 2'
    }
  },
  {
    name: 'Chevrolet',
    mileage: 5,
    price: 4,
    safety: 6,
    performance: 4,
    interior: 5,
    warranty: 6
  }
];

const basicFormat = format('.2r');
const wideFormat = format('.3r');

export interface Props {
  width?: number;
  height?: number;
}

export const AnimatedParallelCoordinates: React.FC<Props> = ({
}) => (
        <>
        <ParallelCoordinates
          data={DATA}
          tickFormat={t => wideFormat(t)}
          margin={50}
          colorRange={['#172d47', '#911116', '#998965']}
          domains={[
            {name: 'mileage', domain: [0, 10]},
            {
              name: 'price',
              domain: [2, 16],
              tickFormat: t => `$${basicFormat(t)}`,
              getValue: d => d.price
            },
            {name: 'safety', domain: [5, 10], getValue: d => d.safety},
            {name: 'performance', domain: [0, 10], getValue: d => d.performance},
            {name: 'interior', domain: [0, 7], getValue: d => d.interior},
            {name: 'warranty', domain: [10, 2], getValue: d => d.warranty}
          ]}
          showMarks
          width={400}
          height={300}
        />
        </>
    );
