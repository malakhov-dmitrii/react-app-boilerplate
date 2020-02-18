import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from 'antd';

export default {
  title: 'Button',
  component: Button,
};

export const Text = () => <Button type="primary">Hello Button</Button>;

export const Emoji = () => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
