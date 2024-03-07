import React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductImage', () => {
  test('Debe usar el url proporcionado', () => {
    const wrapper = renderer.create(<ProductImage img='htpp/google.com' />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('Debe de mostrar en el componente con el url del producto', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
