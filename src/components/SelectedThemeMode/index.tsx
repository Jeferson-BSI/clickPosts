import { useContext, useState } from 'react';
import { Feather } from '@expo/vector-icons'; 
import { useUsers } from '../../hooks/UseUsers';
import { ThemeContext } from 'styled-components';
import { ContainerThemeMode, ThemeMode, Container, TextMode } from './styles';

type SelectedThemeModeProps = {
  dark: string;
  light: string;
  onCloseOptionsMode: () => void;
}
type modeType = 'light' | 'dark';

export function SelectedThemeMode({ dark, light, onCloseOptionsMode }:SelectedThemeModeProps) {
  const { handleUserPreferences, userPreferences } = useUsers();
  const [isSelected, setIsSelected] = useState<modeType>(userPreferences);
    const { colors } = useContext(ThemeContext);

  function handleModeSelected(mode: modeType) {
    setIsSelected(mode);
    handleUserPreferences(mode);
  }

  return(
    <Container
      onPress={onCloseOptionsMode}
    >
      <ContainerThemeMode>
        <ThemeMode
          onPress={() => handleModeSelected('light')}
        >
          {
            isSelected === 'light' 
            && <Feather name="check" size={20} color={colors.iconsProfile} />
          }
            
            <TextMode>{light}</TextMode>
          </ThemeMode>

          <ThemeMode
            onPress={() => handleModeSelected('dark')}
          >

          {
            isSelected === 'dark' 
            && <Feather name="check" size={20} color={colors.iconsProfile} />
          }
            <TextMode>{dark}</TextMode>
          </ThemeMode>
      </ContainerThemeMode>
    </Container>
  )
};