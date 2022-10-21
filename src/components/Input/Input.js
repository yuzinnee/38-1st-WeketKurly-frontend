import './Input.scss';

const Input = props => {
  const { className, onChange, name, value, type, placeholder, ...others } =
    props;
  return (
    <input
      className={className}
      onChange={onChange}
      name={name}
      value={value}
      type={type}
      placeholder={placeholder}
      {...others}
    />
  );
};

export default Input;
