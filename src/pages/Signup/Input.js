function Input({ onChange, value, placeholder, className, type }) {
  return (
    <input
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      className={className}
      type={type}
    />
  );
}
