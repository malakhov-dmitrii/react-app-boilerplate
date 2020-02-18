import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from 'antd';

const Welcome: FC = () => {
  return (
    <Card>
      Welcome to todo app!
      <Link to="todos">
        <Button>Get started</Button>
      </Link>
    </Card>
  );
};

export default Welcome;
