import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const App = () => {
  const [selectedCar, setSelectedCar] = useState(null);

  const cars = [
    {
      name: 'VW - Fusca',
      year: 1978,
      color: 'Amarelo',
      image: 'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202409/20240908/volkswagen-fusca-1.3-l-8v-gasolina-2p-manual-wmimagem12410505925.jpg?s=fill&w=1920&h=1440&q=75',
      value: 'R$ 36.000',
      KM: '133.000',
      exchange: 'Manual',
      fuel: 'Gasolina',
      description: 'O Volkswagen Fusca é famoso por sua forma arredondada semelhante a um besouro. Produzido no Brasil até 1996, tornou-se símbolo de acessibilidade.',
      creator: [
        { name: 'Ferdinand Porsche', manufacturer: 'Volkswagen', image: '' }
      ]
    },
    {
      name: 'VW - Gol',
      year: 2010,
      color: 'Branco',
      image: 'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202501/20250109/volkswagen-gol-1.0-mi-8v-flex-4p-manual-g.v-wmimagem16322393262.jpg?s=fill&w=552&h=414&q=60',
      value: 'R$ 20.990',
      KM: '586.067',
      exchange: 'Manual',
      fuel: 'Gasolina e álcool',
      description: 'O Volkswagen Gol é conhecido por sua versatilidade e praticidade, sendo um dos carros mais vendidos no Brasil.',
      creator: [
        { name: 'Luiz Alberto Veiga', manufacturer: 'Volkswagen', image: '' }
      ]
    },
    {
      name: 'Fiat - Punto',
      year: 2012,
      color: 'Branco',
      image: 'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202503/20250307/fiat-punto-1.6-essence-16v-flex-4p-manual-wmimagem17583481045.jpg?s=fill&w=552&h=414&q=60',
      value: 'R$ 38.890',
      KM: '149.000',
      exchange: 'Manual',
      fuel: 'Gasolina e álcool',
      description: 'O Fiat Punto é conhecido por seu design elegante e europeu, sendo uma alternativa sofisticada no segmento de compactos.',
      creator: [
        { name: 'Giorgetto Giugiaro', manufacturer: 'Fiat', image: '' }
      ]
    }
  ];

  const handleCarPress = (car) => {
    setSelectedCar(car);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        {cars.map((car, index) => (
          <TouchableOpacity key={index} onPress={() => handleCarPress(car)}>
            <View style={styles.carCard}>
              <Image source={{ uri: car.image }} style={styles.carImage} />
              <Text style={styles.carName}>{car.name}</Text>
            </View>
          </TouchableOpacity>
        ))}

        {selectedCar && (
          <View style={styles.carDetails}>
            <Text style={styles.carName}>{selectedCar.name}</Text>
            <Text>Ano: {selectedCar.year}</Text>
            <Text>Cor: {selectedCar.color}</Text>
            <Text>Valor: {selectedCar.value}</Text>
            <Text>KM: {selectedCar.KM}</Text>
            <Text>Câmbio: {selectedCar.exchange}</Text>
            <Text>Combustível: {selectedCar.fuel}</Text>
            <Text>Descrição: {selectedCar.description}</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  carCard: {
    padding: 10,
    margin: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    alignItems: 'center',
  },
  carImage: {
    width: 200,
    height: 150,
    borderRadius: 10,
  },
  carName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
  carDetails: {
    padding: 20,
    backgroundColor: '#e0e0e0',
    margin: 10,
    borderRadius: 10,
  }
});

export default App;
