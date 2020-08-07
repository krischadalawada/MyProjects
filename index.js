import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { BooksFlatList } from './app/components/BooksFlatList';
import { NavigationContainer } from '@react-navigation/native';

AppRegistry.registerComponent('MyProjects', () => BooksFlatList);
