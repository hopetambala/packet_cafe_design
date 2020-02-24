import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"

type Props = System.PlotlyStackedBarProps & {
  width: number
  height: number
}

export class PlotlyStackedBar extends React.Component{
  render() {
    return <System.PlotlyStackedBar {...this.props} />
  }

  static defaultProps: Props = {
    width: 933,
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
