/// see https://material-ui.com/styles/basics/
// Example
import MuiBox from '@material-ui/core/Box';
import MuiButton from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';
import { ViewProps } from './types';

// Example with props
export const Button = styled((props: ViewProps) => <MuiButton {...props} />)({
  backgroundColor: 'red',
  fontSize: '1rem',
  fontWeight: (_props) => 'bold',
});

// Example without props
export const Box = styled(MuiBox)({
  backgroundColor: '#eee',
});
