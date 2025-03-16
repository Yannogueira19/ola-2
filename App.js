import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const App = () => {
  const [selectedCar, setSelectedCar] = useState(null);
  const [selectedCreator, setSelectedCreator] = useState(null);

  const cars = [
    {
      id: 1,
      name: 'VW - Fusca',
      year: 1978,
      color: 'Amarelo',
      image: 'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202409/20240908/volkswagen-fusca-1.3-l-8v-gasolina-2p-manual-wmimagem12410505925.jpg?s=fill&w=1920&h=1440&q=75',
      value: 'R$ 36.000',
      KM: '133.000',
      exchange: 'Manual',
      fuel: 'Gasolina',
      description: 'O Volkswagen Fusca, ícone automotivo no Brasil, é famoso por sua forma arredondada semelhante a um besouro. Caracteriza-se pelo motor traseiro refrigerado a ar, design simples e durável, e espaço para quatro passageiros. Com seus faróis redondos e excelente economia de combustível, o Fusca ganhou popularidade por sua confiabilidade e facilidade de manutenção. Produzido no Brasil até 1996, tornou-se símbolo de acessibilidade, permitindo que muitas famílias adquirissem seu primeiro carro. Sua influência vai além do transporte, marcando gerações e se tornando parte da cultura brasileira.',
      creators: [
        { name: 'Ferdinand Porsche', role: 'Designer', gender: 'Masculino', birthDate: '03-09-1875', birthPlace: 'Maffersdorf, Império Austro-Húngaro', Resume: 'Ferdinand Porsche (1875–1951) foi um engenheiro automotivo austríaco conhecido por fundar a Porsche AG e projetar o Volkswagen Fusca, um dos carros mais populares da história. Também trabalhou em projetos militares, incluindo o tanque Tiger durante a Segunda Guerra Mundial.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Ferdinand_Porsche.jpg/300px-Ferdinand_Porsche.jpg' },
        { name: 'Volkswagen', role: 'Fabricante', image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAdVBMVEX///8AHlAAAD0AAEYAEksAGE0AAEEAAD8AG08AAEMAFUwAADsADEnc3eEAEEoACUgAADfLzNNbYXtpboX29vfs7O8rNl03QGQ/R2gyO2C2uMKHi5xGTWxSWHWkprKSlaR4fZKanashLVetr7oVJVPCw8sAAC7B/5l/AAAEAklEQVRIiY2W26KjIAxFQUREVFS0rfXa2/z/J05QEdCeM8NLrRhWSHYCCH0bdTl2auj7Qc1jWX/95MvIpkvBCSfLgIfiOWX/YXa/CpmTqLiouetmdRWM5FJcXv8yw5zisB8dRDYOIaY8/820uTGKcfw+vm/126j90eGxSFKeYMzv/vsPw5gSSYvHdzvFYjGjPsG09SfgFXjRiTiqvtndSELKdXlWuhNZAE6M8EtzeTnnpk3T9e0TouOtrHIc8xVNwufR8pbKfn16cYyDxs404ILs1ueK5JfD/kjem+c0xulspyZYSJiFKiI9b14BfdovCcaR9UjGOFf7vz6PnNg2EDDrXA3BIPus9lw4GaRxYf/1Cf84/DnFMTV/LhQngzOZRTZbn8AXSyasCMpTdnoaGfVBAiKXiCoQ53V9HEAPXiAhq3G+ASN8EEsJuwzK7bODAmFRzF/bDjG44yGvRgQKtpsct7H50BQ4xbtr67hvIqiZG2ADTNcwPwjvyDECeBXBIaUrMO2knLSnIdbhoTfXcAQLXqPcF9EKZKhKtVyKtEP36ICseYzJeHfVZoBkQi9S1JBQnXxAJh6ykxCEd3wolAUINoyXYM1gzROygTzARnHg9osNiJAgI5pkod+dkAoWx4edb0BIF5m1MPW7EzIrKIzATe8ixaUyFVFIyXVRjeydr5C6tG3rytsC0UwGVMl18oQ8DQtEHel3wxMy08PNhQUuhsbVBRlYZPOHMRZEPtD0Hu3qnJqa9ZFLIk0dHIDQepRJxwkJasNuublA9IanO2EmxyCUvUtotSW5Ey8NDIzeCxAASO7ufGyUctWtZs53yemK3oFgU2qRz8Ydi9SOsVLrbutwHvChRQ5lFRpDi4S2r8scdLcu6wHRbennI7F51+Wgkbrt64Dq75dC9oCNWAq5cXw1SKj8tZXdkqV1+MCJr/4PoahdZKXb9Vo+ugPG+ABEMlkbVMnsYstRlemGubUaWCn6+MCRR1seWmr7wxLYnu6tZuRQk1XithBOTd8vhW0QGplQ55yB5kPBTu5xmCXbO3QV2uf3IjV7zqyatUdtKZxOUbOYmQmNdCtTZ8YBQvsrnFq7i91v3Yu9owS04OywTZh3U5p5aM4AjXTPGR3SPdODJAp5Y+CpcR3H9ljVAw4lAxxIekOH0fP83WxI/5z5sA1YtzJtj3aaSbfY5oV/mXn/WVYseUJOPD1mETOlTbKPP7H8r5WIA/XNDmLL8jyYvs89ojQUP94860pQwrrT9TLrIkKDvvlms42yZWEaPLvP/lFTTk8hw+j5+cVsMR0KuEvzQFwGpao2CDjctIv+X2YLYxyKiHAJ13kuJVzP+8dvTvojuz9mVVVqnu4/XKj/Arn4Qg/hZzpHAAAAAElFTkSuQmCC' },
      ],
      version: [
        {name: 'Fusca 1 100 E', year: '1945', image: 'https://autoentusiastas.com.br/ae/wp-content/uploads/2018/05/AG-137-Foto-00a.jpg'},
        {name: 'Fusca 1 200 SR', year: '1958', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm2jn-qItyyThCgbYjyVerL1nuT9pMm4Cxyg&s'},
        {name: 'Fusca 1 500 STD', year: '1970', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6SH82f8vMhk3MzT-U6KTL_XzraBNDDUyH5w&s'},
      ],
      
    },
    {
      id: 2,
      name: 'VW - Gol',
      year: 2010,
      color: 'Branco',
      image: 'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202501/20250109/volkswagen-gol-1.0-mi-8v-flex-4p-manual-g.v-wmimagem16322393262.jpg?s=fill&w=552&h=414&q=60',
      value: 'R$ 20.990',
      KM: '586.067',
      exchange: 'Manual',
      fuel: 'Gasolina e álcool',
      description: 'O Volkswagen Gol, um dos carros mais vendidos na história do Brasil, é conhecido por sua versatilidade e praticidade. Lançado em 1980 como sucessor do Fusca, o Gol se destaca por seu design compacto e moderno, com linhas mais retas e aerodinâmicas. Equipado com motor dianteiro e tração dianteira, oferece boa dirigibilidade e economia de combustível. O Gol é apreciado por seu interior espaçoso para um carro compacto, conforto razoável e baixo custo de manutenção. Ao longo de suas várias gerações, evoluiu em termos de tecnologia e segurança, mantendo-se como uma opção popular para famílias e jovens motoristas. Sua robustez e adaptabilidade às condições das estradas brasileiras contribuíram para seu sucesso duradouro no mercado automobilístico nacional.',
      creators: [
        { name: 'Luiz Alberto Veiga', role: 'Designer', gender:'Masculino',  birthDate: '05-06-1953', birthPlace: 'São Paulo, Brasil', Resume: 'Luiz Alberto Veiga (nascido em 1953, São Paulo) é um designer brasileiro conhecido por seu trabalho na Volkswagen, onde projetou carros icônicos como o Volkswagen Gol e o Fox. Ele é renomado por sua inovação e impacto na indústria automotiva.', image: 'https://autoentusiastas.com.br/ae/wp-content/uploads/2018/12/LuizAlbertoVeiga-46-160x160.jpg' },
        { name: 'Volkswagen', role: 'Fabricante', image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAdVBMVEX///8AHlAAAD0AAEYAEksAGE0AAEEAAD8AG08AAEMAFUwAADsADEnc3eEAEEoACUgAADfLzNNbYXtpboX29vfs7O8rNl03QGQ/R2gyO2C2uMKHi5xGTWxSWHWkprKSlaR4fZKanashLVetr7oVJVPCw8sAAC7B/5l/AAAEAklEQVRIiY2W26KjIAxFQUREVFS0rfXa2/z/J05QEdCeM8NLrRhWSHYCCH0bdTl2auj7Qc1jWX/95MvIpkvBCSfLgIfiOWX/YXa/CpmTqLiouetmdRWM5FJcXv8yw5zisB8dRDYOIaY8/820uTGKcfw+vm/126j90eGxSFKeYMzv/vsPw5gSSYvHdzvFYjGjPsG09SfgFXjRiTiqvtndSELKdXlWuhNZAE6M8EtzeTnnpk3T9e0TouOtrHIc8xVNwufR8pbKfn16cYyDxs404ILs1ueK5JfD/kjem+c0xulspyZYSJiFKiI9b14BfdovCcaR9UjGOFf7vz6PnNg2EDDrXA3BIPus9lw4GaRxYf/1Cf84/DnFMTV/LhQngzOZRTZbn8AXSyasCMpTdnoaGfVBAiKXiCoQ53V9HEAPXiAhq3G+ASN8EEsJuwzK7bODAmFRzF/bDjG44yGvRgQKtpsct7H50BQ4xbtr67hvIqiZG2ADTNcwPwjvyDECeBXBIaUrMO2knLSnIdbhoTfXcAQLXqPcF9EKZKhKtVyKtEP36ICseYzJeHfVZoBkQi9S1JBQnXxAJh6ykxCEd3wolAUINoyXYM1gzROygTzARnHg9osNiJAgI5pkod+dkAoWx4edb0BIF5m1MPW7EzIrKIzATe8ixaUyFVFIyXVRjeydr5C6tG3rytsC0UwGVMl18oQ8DQtEHel3wxMy08PNhQUuhsbVBRlYZPOHMRZEPtD0Hu3qnJqa9ZFLIk0dHIDQepRJxwkJasNuublA9IanO2EmxyCUvUtotSW5Ey8NDIzeCxAASO7ufGyUctWtZs53yemK3oFgU2qRz8Ydi9SOsVLrbutwHvChRQ5lFRpDi4S2r8scdLcu6wHRbennI7F51+Wgkbrt64Dq75dC9oCNWAq5cXw1SKj8tZXdkqV1+MCJr/4PoahdZKXb9Vo+ugPG+ABEMlkbVMnsYstRlemGubUaWCn6+MCRR1seWmr7wxLYnu6tZuRQk1XithBOTd8vhW0QGplQ55yB5kPBTu5xmCXbO3QV2uf3IjV7zqyatUdtKZxOUbOYmQmNdCtTZ8YBQvsrnFq7i91v3Yu9owS04OywTZh3U5p5aM4AjXTPGR3SPdODJAp5Y+CpcR3H9ljVAw4lAxxIekOH0fP83WxI/5z5sA1YtzJtj3aaSbfY5oV/mXn/WVYseUJOPD1mETOlTbKPP7H8r5WIA/XNDmLL8jyYvs89ojQUP94860pQwrrT9TLrIkKDvvlms42yZWEaPLvP/lFTTk8hw+j5+cVsMR0KuEvzQFwGpao2CDjctIv+X2YLYxyKiHAJ13kuJVzP+8dvTvojuz9mVVVqnu4/XKj/Arn4Qg/hZzpHAAAAAElFTkSuQmCC' },
      ],
      version: [
        {name: 'Gol Chaleira', year: '1980', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Golmk1.jpg/450px-Golmk1.jpg'},
        {name: 'Gol GTI', year: '1991', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/14-01-18-autostadt-zeithaus-RalfR-152.jpg/380px-14-01-18-autostadt-zeithaus-RalfR-152.jpg'},
        {name: 'Gol G4', year: '2007', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Volkswagen_Gol_Trendline_Plus_IV_Gen.jpg/450px-Volkswagen_Gol_Trendline_Plus_IV_Gen.jpg'},
      ],
  
    },
    {
      id: 3,
      name: 'Fiat - Punto',
      year: 2012,
      color: 'Branco',
      image: 'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202503/20250307/fiat-punto-1.6-essence-16v-flex-4p-manual-wmimagem17583481045.jpg?s=fill&w=552&h=414&q=60',
      value: 'R$ 38.890',
      KM: '149.000',
      exchange: 'Manual',
      fuel: 'Gasolina e álcool', 
      description: 'O Fiat Punto é um hatchback compacto que se destacou no mercado automobilístico por seu design elegante e europeu. Lançado originalmente na Europa em 1993 e introduzido no Brasil em 2007, o Punto oferece uma combinação de estilo, eficiência e praticidade. Caracteriza-se por suas linhas arredondadas e modernas, faróis expressivos e grade dianteira distintiva. O interior é relativamente espaçoso para sua categoria, com acabamento de qualidade e bom nível de equipamentos. Disponível em versões hatch e aventureira (Punto Adventure), o modelo se destaca pela boa dirigibilidade, conforto de rodagem e opções de motores econômicos. Embora tenha saído de linha no Brasil em 2018, o Punto deixou sua marca como uma alternativa sofisticada no segmento de compactos, apreciado por consumidores que buscavam um veículo com toque italiano e bom custo-benefício.',
      creators: [
        {name: 'Giorgetto Giugiaro', role: 'Designer', gender: 'Masculino' ,  birthDate: '07-08-1938', birthPlace:'Garessio, Itália', Resume:'Giorgetto Giugiaro (nascido em 1938, Itália) é um designer de automóveis italiano considerado um dos mais influentes da história. Fundou a Italdesign e criou modelos icônicos como o Volkswagen Golf, DeLorean DMC-12 e Fiat Panda.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/GiorgettoGiugiaro_%28cropped%29.jpg/450px-GiorgettoGiugiaro_%28cropped%29.jpg'},
        {name: 'Fiat', role: 'Fabricante', image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAA4VBMVEUTCxkTCRgUABYAAAAACxgNCxkRGB8GYDsHdUEFTTETBBqSjo7Fxb6amJUcFCIYDx6DgIKnsa6DCh7eDCnNCyRVCRkTBhgJKSUAiksRVDIrJjDTz8ny8ueqqKQ0Lzizsa21wrsyCRm9CSP/DS4Ak08Ae0UGABB4cnXj5dxTTlUAAAhoZGhmaWxkCBrxCSijCyIQCxkCaTwAcjkIFRYYDCHT3tWMCB17CR8HIiMEXiVBNkMdHScmBBZMChwJNB8AAAt9en2zCSQgChoAeTYAi1NFP0YFMCRCChwlHCyTnp0VISKHFICJAAABb0lEQVR4AcXQhZqCMAAAYNjAoK2JbHAxnMPu7tb3f6Cb9x1wb+A6/4X0xiADAGQZQvhbSJKiKGoyl8nm8qqmG6ZlO0YByMVSuRLPoqrr1pCHiY+CD/IJv75pKZkE+bBeZQ3Oo2YLk3az06U9u/+naoNwOBr7xBjbOp8EbEq7MyVW5667YEuDmFCohdX6m5Y3saoJdYsanES7FuZ7ddOlh2Os9gfuaTQ2CR7bDp9ErEi70/Su9fOCXQziQ88nfqCW07sK1XWvr7u2YIS5YwNKvxNVHYQDzTY5Dtie4Bab0W5RSdUwzy4fxLRW4q4BE+rtv1plLc4b7MK53v+itNxP1Gw41Cyd4Ag2CG7vZpROE/WaC2taIFSvKf71pdJYldHrrijifI/unDy0W4mWlVjNCPWJHKE2W4QLtUuLqVoPa7InfsDTxM+vwDelx/R7stkq8nSzhWzHb6PjtNwTG+NZAJAkQ7iTpKYo+ooi5t4WfgDfdjB9ZNc2CQAAAABJRU5ErkJggg=='}
      ],
      version: [
        {name: 'Fiat Punto', year: '1993', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/1998_Fiat_Punto_SX_Selecta_1.2_Front.jpg/450px-1998_Fiat_Punto_SX_Selecta_1.2_Front.jpg'},
        {name: 'Punto Classic', year: '1999', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/2000_Fiat_Punto_1.2_Front.jpg/450px-2000_Fiat_Punto_1.2_Front.jpg'},
        {name: 'Grande Punto', year: '2005', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Grande_punto_5tuerer.jpg/450px-Grande_punto_5tuerer.jpg'},
      ],

    }
  ];


  // Função para lidar com o clique no botão de detalhes do carro
  const handleDetailsPress = (car) => {
    setSelectedCar(car);
  };


  // Função para voltar à lista de carros
  const handleBackPress = () => {
    setSelectedCar(null);
  };


  // Função para lidar com o clique no card do criador
  const handleCreatorPress = (creator) => {
    setSelectedCreator(creator);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {selectedCreator ? (
        // Exibe os detalhes do criador selecionado
        <View style={styles.creatorCardDetails}>
          <TouchableOpacity style={styles.backButton} onPress={() => setSelectedCreator(null)}>
            <Text style={styles.backButtonText}>Voltar</Text>
          </TouchableOpacity>
          <Image source={{ uri: selectedCreator.image }} style={styles.creatorImageDetails} />
          <Text style={styles.creatorName}>{selectedCreator.name}</Text>
          <br></br>
          <Text style={styles.creatorResume}>{selectedCreator.Resume}</Text>
          
         {/* Bloco de informações adicionais sobre o criador */}       
          <View style={styles.infoBlock}>
              
              <Text style={styles.infoText}>Sexo: {selectedCreator.gender}</Text>
              <Text style={styles.infoText}>Data de Nascimento: {selectedCreator.birthDate}</Text>
              <Text style={styles.infoText}>Local de Nascimento: {selectedCreator.birthPlace}</Text>
              
            </View>
        </View>

      ) : !selectedCar ? (
        // Exibe a lista de carros
        <ScrollView>
          {cars.map((car) => (
            <TouchableOpacity key={car.id} onPress={() => handleDetailsPress(car)}>
              <View style={styles.carCard}>
                <Image source={{ uri: car.image }} style={styles.carImage} />
                <Text style={styles.carName}>{car.name}</Text>
                <Text>Ano: {car.year}</Text>
                <Text>Cor: {car.color}</Text>
                <TouchableOpacity
                  style={styles.detailsButton}
                  onPress={() => handleDetailsPress(car)}
                >
                  <Text style={styles.detailsButtonText}>Detalhes</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      ) : (
        
        // Exibe os detalhes do carro selecionado
        <ScrollView>
          <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
            <Text style={styles.backButtonText}>Voltar</Text>
          </TouchableOpacity>

          <View style={styles.carDetailsContainer}>
            <Image source={{ uri: selectedCar.image }} style={styles.carDetailsImage} />
            <Text style={styles.carDetailsName}>{selectedCar.name}</Text>

            <View style={styles.descriptionContainer}>
              <Text style={styles.carDetailsDescription}>{selectedCar.description}</Text>
            </View>

            <View style={styles.detailsContainer}>
              <Text style={styles.carDetailsText}>Ano: {selectedCar.year}</Text>
              <Text style={styles.carDetailsText}>Cor: {selectedCar.color}</Text>
              <Text style={styles.carDetailsText}>Valor: {selectedCar.value}</Text>
              <Text style={styles.carDetailsText}>KM: {selectedCar.KM}</Text>
              <Text style={styles.carDetailsText}>Câmbio: {selectedCar.exchange}</Text>
              <Text style={styles.carDetailsText}>Combustível: {selectedCar.fuel}</Text>
            </View>
          </View>

{/* Lista de criadores do carro */}
          <View style={styles.creatorsContainer}>
            <Text style={styles.creatorsTitle}>Criadores:</Text>
            {selectedCar.creators.map((creator, index) => (
              <TouchableOpacity key={index} onPress={() => handleCreatorPress(creator)}>
                <View style={styles.creatorCard}>
                  <Image source={{ uri: creator.image }} style={styles.creatorImage} />
                  <View style={styles.creatorInfo}>
                    <Text style={styles.creatorName}>{creator.name}</Text>
                    <Text style={styles.creatorRole}>{creator.role}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>

{/* Lista de versões do carro */}
          <View style={styles.creatorsContainer}>
            <Text style={styles.creatorsTitle}>Versões:</Text>
            {selectedCar.version.map((version, index) => (
              <View key={index} style={styles.creatorCard}>
                <Image source={{ uri: version.image }} style={styles.creatorImage} />
                <View style={styles.creatorInfo}>
                  <Text style={styles.creatorName}>{version.name}</Text>
                  <Text style={styles.creatorYear}>{version.year}</Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      )}
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
  detailsButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'gray',
    borderRadius: 5,
  },
  detailsButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  backButton: {
    margin: 10,
    padding: 10,
    backgroundColor: 'gray',
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  backButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  carDetailsContainer: {
    padding: 20,
    alignItems: 'center',
  },
  carDetailsImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  carDetailsName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  descriptionContainer: {
    margin: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  carDetailsDescription: {
    fontSize: 14,
    textAlign: 'center',
  },
  detailsContainer: {
    margin: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    width: '100%',
  },
  carDetailsText: {
    fontSize: 16,
    marginTop: 5,
  },
  creatorsContainer: {
    margin: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  creatorsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  creatorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 10,
  },
  creatorImage: {
    width: 50,
    height: 50,
    borderRadius: 25, // Imagem redonda na primeira página
    marginRight: 10,
  },
  creatorInfo: {
    flex: 1,
  },
  creatorName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  creatorRole: {
    fontSize: 14,
    color: '#666',
  },
  creatorCardDetails: {
    padding: 20,
    margin: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    alignItems: 'center',
  },
  creatorImageDetails: {
    width: '70%',
    height: 300,
    marginBottom: 20,
    borderRadius: 10,
    // Imagem retangular na página de detalhes
  },
  creatorName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  creatorRole: {
    fontSize: 14,
    color: '#666',
  },
  infoBlock: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 10,
    width: '100%',
  },
  infoText: {
    fontSize: 16,
    marginBottom: 10,
    
  },
 
});

export default App; 