import * as React from "react"
import {
  ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend, Label
} from 'recharts'

const data01 = [
  { x: 1, y: 20, z: 200 }, { x: 120, y: 10, z: 260 },
  { x: 2, y: 30, z: 400 }, { x: 140, y: 25, z: 280 },
  { x: 2, y: 40, z: 500 }, { x: 110, y: 28, z: 200 },
];
const data02 = [
  { x: 200, y: 26, z: 240 }, { x: 240, y: 290, z: 220 },
  { x: 190, y: 29, z: 250 }, { x: 198, y: 250, z: 210 },
  { x: 180, y: 28, z: 260 }, { x: 210, y: 220, z: 230 },
];

export interface Props {
  width?: number;
  height?: number;
}

export const RechartsBubble: React.FC<Props> = ({
  width,
  height
}) => (
  <ScatterChart
    width={400}
    height={300}
    margin={{
      top: 20, right: 20, bottom: 20, left: 20,
    }}

  >
    <CartesianGrid />
    <XAxis type="number" dataKey="x" name="Session ID" unit="" >
      <Label value="Session Id" offset={0} position="insideBottom" />
    </XAxis>
    <YAxis type="number" dataKey="y" name="duration" unit=" mins" >
      <Label offset={0} angle={90} position="left" />
    </YAxis>
    <ZAxis type="number" dataKey="z" range={[60, 400]} unit="bytes" >
      <Label value="Packet Size" offset={0} position="top" />
    </ZAxis>
    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
    <Legend />
    <Scatter name="Packet Size" data={data01} fill="#8884d8" shape="bubble" />
    {/* <Scatter name="B school" data={data02} fill="#82ca9d" shape="bubble" /> */}
  </ScatterChart>
)
