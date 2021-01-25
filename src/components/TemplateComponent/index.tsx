import React, { FC, memo } from 'react';
import { BusinessProps, ViewProps } from './types';
import { Box, Button } from './styles';

const View = memo<ViewProps>(() => {
  return (
    <Box>
      <Button>view</Button>
    </Box>
  );
});

const Business: FC<BusinessProps> = () => {
  return <View />;
};

export default Business;
