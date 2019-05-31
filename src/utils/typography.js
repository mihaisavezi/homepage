import Typography from "typography"
import themeKirkham from "typography-theme-kirkham"

themeKirkham.overrideThemeStyles = ({ rhythm }, options) => ({})

const typography = new Typography(themeKirkham)

export default typography
