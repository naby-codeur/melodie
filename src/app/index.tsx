import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const [message, setMessage] = useState('');
  const [messageVisible, setMessageVisible] = useState(false);
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>Melodies</Text>
        <Text style={styles.subtitle}>
          Toute ta musique, au même endroit.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Bienvenue sur Melodies
        </Text>
        <Text style={styles.description}>
          Découvre tes morceaux préférés et profite de la musique.
        </Text>

        {messageVisible && (
          <Text style={styles.description}>
            {message}
          </Text>
        )}

        <Pressable
          style={styles.button}
          onPress={() => {
            setMessage('Merci de découvrir la musique avec nous !');
            setMessageVisible(!messageVisible);
          }}
        >
          <Text style={styles.buttonText}>
            Découvrir la musique
          </Text>
        </Pressable>
      </View>

      <Text style={styles.footer}>
        Ta musique, ton univers.
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 24,
    paddingVertical: 20,
    justifyContent: 'space-between',
  },
  header: {
    marginTop: 24,
  },
  logo: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#B3B3B3',
    fontSize: 14,
    marginTop: 8,
  },
  section: {
    gap: 16,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
  },
  description: {
    color: '#B3B3B3',
    fontSize: 16,
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#1DB954',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: '#121212',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    color: '#777777',
    fontSize: 13,
    textAlign: 'center',
    marginBottom: 12,
  },
});
