import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { render, screen, fireEvent } from '@testing-library/react-native';
import { renderNavigator } from '../test-utils';

import DrawerNavigator from '../drawerNavigator/DrawerNavigator';

describe('Testing react navigation', () => {
  
test('Changing screens', () => {
  renderNavigator(<DrawerNavigator />);

  // Assert initial screen
  expect(screen.getByRole('header', { name: 'Home screen' }));

  // Open drawer by pressing button
  const toggleButton = screen.getByText('Toggle drawer');
  fireEvent.press(toggleButton);

  // Assert drawer state
  expect(screen.getByRole('button', { name: 'Home' }))
  expect(
    screen.getByRole('button', { name: 'Settings' })
  );

  // Press drawer item
  fireEvent.press(screen.getByRole('button', { name: 'Settings' }));

  // Assert drawer state after action
  expect(screen.getByRole('button', { name: 'Home' }));
  expect(
    screen.getByRole('button', { name: 'Settings' })
  );

  // Assert visible screen
  expect(
    screen.getByRole('header', { name: 'Settings screen' })
  );
  expect(
    screen.queryByRole('header', { name: 'Home screen' })
  );
});
});