import { number, shape } from 'prop-types';

export default shape({
  x: number.isRequired,
  y: number.isRequired,
});
