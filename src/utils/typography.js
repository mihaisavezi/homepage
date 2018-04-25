import Typography from "typography";
import themeAlton from 'typography-theme-alton';

themeAlton.overrideThemeStyles = ({ rhythm }, options) => ({
    'a:hover,a:active': {
        color: '--var(blue-1)',
    },
})

const typography = new Typography(themeAlton);

export default typography;