import { Button, Text, View } from 'react-native';
import { setLocale } from '../../store/reducers/settings';
import { useDispatch } from 'react-redux';
import { countryFlagEmoji } from '../../utils/countryFlagEmoji';
import { i18n } from '../../i18n';

export function Home() {
  const dispatch = useDispatch();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
      }}
    >
      <Text>{i18n.t('home.greetingMessage')}</Text>
      <View style={{ flexDirection: 'row', gap: 20 }}>
        <Button
          title={`en ${countryFlagEmoji('us')}`}
          onPress={() => {
            dispatch(setLocale('en'));
          }}
        />
        <Button
          title={`es ${countryFlagEmoji('es')}`}
          onPress={() => {
            dispatch(setLocale('es'));
          }}
        />
      </View>
    </View>
  );
}
