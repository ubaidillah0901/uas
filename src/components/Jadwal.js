import React, { useState, useEffect } from 'react';
import {View, Text, TouchableOpacity, StatusBar, TextInput, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const Jadwal = () => {
    return (
        <View>
             <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text style={{color: '#0082f7',fontWeight: 'bold'}}>
           jadwal pemeriksaan
          </Text>
          <TouchableOpacity 
             style={{justifyContent:'center', alignItems: 'flex-end', flex: 1}}>
             <Text style={{color: '#FDB436',fontWeight: 'bold'}}>
              lihat semua
            </Text>
          </TouchableOpacity>
        </View>
        <View 
          style={{
          borderRadius: 10, 
          backgroundColor: '#ffffff',
          elevation: 10,
          marginTop: 10,
          }}>
          <LinearGradient 
        start={{x: 0, y: 0}} 
        end={{x: 1, y: 0}}
        style={{borderRadius: 10}}
        colors={['#018BF7', '#00BAF7']}>
        <TouchableOpacity style={{padding: 20, borderRadius: 10}}>
        <View style={{flexDirection: 'row'}}>
          <Image 
        source={require('../image/3.png')} 
        style={{
          width: 50, 
          height: 50, 
          borderRadius: 25, 
          borderColor: '#ffffff',
          borderWidth: 2,
          }}
          />
          <View style={{flex: 1,marginLeft: 10, justifyContent: 'center'}}>
            <Text style={{color:'#ffffff', fontWeight: 'bold'}}>
          Dr.Grace Amanda</Text>
          <Text style={{color:'#f4f4f4'}}>Doter Umum</Text>
          </View>
        </View>
          
          <View style={{marginTop: 20}}>
          <View style={{flexDirection: 'row'}}>
           <Icon name="time" size={25} color="#ffffff" />
           <View style={{justifyContent:'center',alignItems:'center'}}>
           <Text style={{color:'#ffffff',marginLeft: 10}}>
           25 April 2022</Text>
           </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Icon name="compass" size={25} color="#ffffff" />
            <View style={{justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:'#ffffff', marginLeft: 10}}>
            RSI kalianget
            </Text>
            </View>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'flex-end'}}>
            <Icon 
            name="chevron-forward-circle" 
            size={35} 
            color="#ffffff" 
            /> 
          </View>
          </View>          
          </TouchableOpacity>
        </LinearGradient>  
        </View>
        </View>
    );
};

export default Jadwal;