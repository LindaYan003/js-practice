function FormField({ label, id, type = "text", value, onChange, error }) {
  return (
    <div>
      <label htmlFor={id} style={{ display: "block" }}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      {error && <span style={{ color: "red", display: "block" }}>{error}</span>}
    </div>
  );
}

export default FormField;
