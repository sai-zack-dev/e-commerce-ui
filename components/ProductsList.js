import * as React from 'react';
import { FlatList, Text, View } from 'react-native';
import { products } from '../products';
import ProductCard from './ProductCard';

export default function ProductsList() {
  return (
    <FlatList className="w-full"
        data={products} keyExtractor={(product) => product.id}
        renderItem={({ item }) => <ProductCard {...item} /> }
    />
  );
}