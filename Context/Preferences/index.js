import { createContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const PreferencesContext = createContext(undefined)

function PreferencesProvider({ children }) {
    const [TTS, setTTS] = useState(null);

    useEffect(() => {
        if (TTS === null) { getTTS() }
    }, [])

    const getTTS = async () => {
        try {
            const value = await AsyncStorage.getItem('TTS')
            if (value === null) {
                await AsyncStorage.setItem('TTS', JSON.stringify(true))
                setTTS(true)
            }
            setTTS(JSON.parse(value))
        } catch (e) {
            console.error(e)
        }
    }

    const switchTTS = async () => {

        try {
            await AsyncStorage.setItem('TTS', JSON.stringify(!TTS))
            setTTS(!TTS)
        } catch (e) {
            console.error(e)
        }
    }
    return (
        <PreferencesContext.Provider value={{ getTTS: getTTS, switchTTS: switchTTS, TTS: TTS }}>
            {children}
        </PreferencesContext.Provider>
    )
}


export { PreferencesContext, PreferencesProvider }