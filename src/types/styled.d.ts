import 'styled-components'
import { screenSize } from '../themes/themes'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Record<string, string>
    screenSize: typeof screenSize
  }
}
