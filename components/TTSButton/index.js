import { StyledFAB } from "./styledTTSButton"
import { useContext } from "react"
import { PreferencesContext } from "../../Context/Preferences"
import { color } from "../../global"
function TTSButton() {

  const preferences = useContext(PreferencesContext)
  const icon = preferences.TTS ? 'volume-up' : 'volume-off'

  return (
    <StyledFAB icon={{ name: icon, color: color.onPrimaryContainer }} color={color.primaryContainer} onPress={preferences.switchTTS} />
  )
}

export { TTSButton }