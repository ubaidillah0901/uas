import React, { useState, useEffect } from 'react';
import {View, Text, TouchableOpacity, StatusBar, TextInput, Image, FlatList, ScrollView, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import MenuBar from './src/components/MenuBar';
import Header from './src/components/Header';
import Jadwal from './src/components/Jadwal';
const App = () => {
  const [pencarian, setpencarian] = useState('');
  const [kategori, setKategori] = useState([
    {namaKategori: 'Artikel'},
    {namaKategori: 'Konsultasi'},
    {namaKategori: 'Obat'},
    {namaKategori: 'Cari Dokter'},
    {namaKategori: 'Klinik Terdekat'},
    {namaKategori: 'Rumah Sakit'}
  ]);
  const [artikel, setArtikel] = useState([
    {
      judul: 'Resep Rahasia Agar Tetap Sehat',
      deskripsi: 'inilah resep rahasia agar anda tetap sehat di umur 60an',
      image: require('./src/image/3.png'),
    },
    {
      judul: 'Resep Rahasia Agar Tetap Sehat',
      deskripsi: 'inilah resep rahasia agar anda tetap sehat di umur 60an',
      image: require('./src/image/3.png'),
    },
    {
      judul: 'Resep Rahasia Agar Tetap Sehat',
      deskripsi: 'inilah resep rahasia agar anda tetap sehat di umur 60an',
      image: require('./src/image/3.png'),
    }, 
  ]);
  return (
    <View style={{flex: 1, backgroundColor: '#F4F4F4'}}>
      <ScrollView
        style={{
         flex: 1, 
         marginHorizontal: 20,
         marginTop: 10
        }}>
        <Header pencarian ={pencarian} setpencarian={setpencarian}/>
       <Jadwal/>
       <View style={{flexDirection: 'row', marginTop: 30}}>
          <Text style={{color: '#0082f7',fontWeight: 'bold'}}>
           kategori
          </Text>
          <TouchableOpacity 
             style={{justifyContent:'center', alignItems: 'flex-end', flex: 1}}>
             <Text style={{color: '#FDB436',fontWeight: 'bold'}}>
              lihat semua
            </Text>
          </TouchableOpacity>
        </View>
        <View>
        <FlatList 
        data={artikel} 
        style={{marginBottom: 20}}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) =>(
        <TouchableOpacity style={{
                  
                  marginRight: 10,
                  backgroundColor: '#FFFFFF',
                  borderRadius: 10,
                  elevation: 3,
                  marginBottom: 10,
                  marginTop: 10,
                  paddingBottom: 20,
                }}>
               <View style={{height: 200,
               marginBottom: 10,
               borderTopRightRadius: 10,
               borderTopLeftRadius: 10,


                }}>
                 <ImageBackground
                 source={item.image} 
                 style={{
                 flex: 1,
                 borderTopRightRadius: 10,
                 borderTopLeftRadius: 10,
                 }}
                 imageStyle={{ 
                  borderTopRightRadius: 10,
                  borderTopLeftRadius: 10,
                 }}
                 />
              </View>
              <View>
         <Image 
          source={item.image} 
          style={{
          width: 40, 
          height: 40, 
          borderRadius: 20, 
          borderColor: '#ffffff',
          borderWidth: 2,
          marginLeft: 10,
          marginTop: 5,
          }}
          />
        <Text 
        style={{
          fontWeight:'bold', 
          fontSize: 18,
          marginHorizontal: 10,
          marginTop: 5
          }}>
        {item.judul}
            </Text>
            <Text style={{
          
          marginHorizontal: 10}
          }>
            {item.deskripsi}
          </Text>
           </View>
         
        </TouchableOpacity>
        )}
        />
        </View>
      </ScrollView>
    <MenuBar/> 
    </View>
  );
};

export default App;