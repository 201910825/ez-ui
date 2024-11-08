import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Btn } from './Button';

const meta = {
  title: 'Example/Btn',
  component: Btn,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['default', 'small', 'medium', 'large'],
    },
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'danger'],
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Btn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'default',
    variant: 'default',
    children: 'Btn',
  },
};

export const Primary: Story = {
  args: {
    size: 'medium',
    variant: 'primary',
    children: 'Btn',
  },
};

export const Secondary: Story = {
  args: {
    size: 'medium',
    variant: 'secondary',
    children: 'Btn',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    variant: 'default',
    children: 'Btn',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    variant: 'default',
    children: 'Btn',
  },
};