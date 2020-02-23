import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"

type Props = System.RechartsBubbleProps & {
  width: number
  height: number
}

export class RechartsBubble extends React.Component<Props> {
  render() {
    return <System.RechartsBubble {...this.props} />
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
