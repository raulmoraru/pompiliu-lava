import { fn } from '@storybook/test';
import CustomButton from '../components/Button/Button';

export default {
  title: 'Example/Button',
  component: CustomButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
};

export const Primary = {
  args: {
    variant: 'primary',
    title: 'Button',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    title: 'Button',
  },
};

export const Tertiary = {
  args: {
    variant: 'tertiary',
    title: 'Button',
  },
};

export const Danger = {
  args: {
    variant: 'danger',
    title: 'Button',
  },
};