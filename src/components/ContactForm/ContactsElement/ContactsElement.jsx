import PropTypes from 'prop-types';
import { Input, Label } from 'components/Filter/Filter.styled';

export function ContactElement({
  label,
  name,
  text,
  value,
  pattern,
  title,
  onChange,
}) {
  return (
    <>
      <Label>{label}</Label>
      <Input
        type={text}
        name={name}
        value={value}
        pattern={pattern}
        title={title}
        required
        onChange={onChange}
      />
    </>
  );
}

ContactElement.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  pattern: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};
