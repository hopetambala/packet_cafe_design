import { Data, animate, Override, Animatable } from "framer"

const data = Data({ scale: Animatable(1), opacity: Animatable(0) })

export const Scale: Override = () => {
    data.scale.set(2)
    animate.ease(data.scale, 1)
    animate.ease(data.opacity, 1)
    return {
        scale: data.scale,
        opacity: data.opacity,
    }
}
