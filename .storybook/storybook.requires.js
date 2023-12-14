/*
  do not change this file, it is auto generated by storybook.
*/
import {
  configure,
  addDecorator,
  addParameters,
  addArgsEnhancer,
} from '@storybook/react-native';
import '@storybook/addon-ondevice-controls/register';
import '@storybook/addon-ondevice-backgrounds/register';
import '@storybook/addon-ondevice-actions/register';
import '@storybook/addon-ondevice-notes/register';

import { argsEnhancers } from '@storybook/addon-actions/dist/modern/preset/addArgs';
argsEnhancers.forEach(enhancer => addArgsEnhancer(enhancer));

import { decorators, parameters } from './preview';
if (decorators) {
  decorators.forEach(decorator => addDecorator(decorator));
}
if (parameters) {
  addParameters(parameters);
}

const getStories = () => {
  return [
    require('../src/components/Alert/Alert.stories.tsx'),
    require('../src/components/Badge/Badge.stories.tsx'),
    require('../src/components/Box/Box.stories.tsx'),
    require('../src/components/Button/Button.stories.tsx'),
    require('../src/components/Checkbox/Checkbox.stories.tsx'),
    require('../src/components/Icon/Icon.stories.tsx'),
    require('../src/components/Image/Image.stories.tsx'),
    require('../src/components/Input/Input.stories.tsx'),
    require('../src/components/Switch/Switch.stories.tsx'),
    require('../src/components/Text/Text.stories.tsx'),
    require('../src/components/TextLink/TextLink.stories.tsx'),
    require('../src/components/Toast/Toast.stories.tsx'),
    require('../src/components/Spinner/Spinner.stories.tsx'),
    require('../src/components/Modal/Modal.stories.tsx'),
  ];
};
configure(getStories, module, false);
