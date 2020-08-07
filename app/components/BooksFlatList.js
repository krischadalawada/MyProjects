import React, { Component, useState } from 'react';
import { AppRegistry, Image, FlatList, StyleSheet, Animated, TouchableOpacity, Text, View } from 'react-native';
import books from '../data/books';
import { styles } from './styles';

const BasicFlatList = (props) => {
   const {item, onPress}=props 
   
    return (
        <View style={styles.booksContainer}>
            <TouchableOpacity onPress={onPress}>
            <View style={styles.bookRow}>
                <Image 
                source={{uri: item.imageUrl}}
                style={styles.book}/>
                <Text style={styles.text}>{item.title}</Text> 
            </View>
            </TouchableOpacity>
        </View> 
    );
}

export const BooksFlatList = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.headerStyle}>HOME</Text>
            <FlatList 
            data={books}
            renderItem={({item, index})=>{
              //  console.log(`item= ${JSON.stringify(item)}, index= ${index}`);
              return (
                  <BasicFlatList item={item} index={index}>

                  </BasicFlatList>
              );
            }}
            horizontal={false}
            numColumns={3}
            keyExtractor={(item) => item.ISBN}
          />    
        </View>
    );
}

