import PropTypes from 'prop-types';

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
    <label>
      {label}
      <input
        type={text}
        name={name}
        value={value}
        pattern={pattern}
        title={title}
        required
        onChange={onChange}
      />
    </label>
  );
}
