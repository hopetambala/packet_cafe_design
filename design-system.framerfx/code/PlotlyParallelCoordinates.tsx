import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"

type Props = System.PlotlyProps & {
  width: number
  height: number
}

export class PlotlyParallelCoordinates extends React.Component{
  render() {
    return <System.PlotlyParallelCoordinates {...this.props} />
  }

  static defaultProps: Props = {
    width: 400,
    height: 300,
  }

  static propertyControls: PropertyControls<Props> = {
    width: { 
      type: ControlType.Number, title: "Width" 
    },
    height: { 
      type: ControlType.Number, title: "Height" 
    }
  }
}
