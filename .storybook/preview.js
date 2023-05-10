import React from 'react';
import { ScrollView } from 'react-native';
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import { theme, ThemeProvider } from '../src';
import { SafeAreaProvider } from 'react-native-safe-area-context';

theme.fonts = {
  light: 'Rubik-Light',
  regular: 'Rubik-Regular',
  medium: 'Rubik-Medium',
  semiBold: 'Rubik-SemiBold',
  bold: 'Rubik-Bold',
};

export const decorators = [
  withBackgrounds,
  Story => (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <ScrollView style={{ backgroundColor: 'white' }}>
          <Story />
        </ScrollView>
      </SafeAreaProvider>
    </ThemeProvider>
  ),
];

export const parameters = {
  backgrounds: [
    { name: 'plain', value: 'white', default: true },
    { name: 'warm', value: '#f1f2f7' },
  ],
  options: {
    storySort: {
      order: [
        'Box',
        'Button',
        ['Button Variants', 'Button Types'],
        'Text',
        'Toast',
      ],
      // locales: 'en-US',
    },
  },
};
