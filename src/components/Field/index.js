import PropTypes from "prop-types";

import "./style.scss";

export const FIELD_TYPES = {
  INPUT_TEXT: 1,
  TEXTAREA: 2,
};

const Field = ({ type = FIELD_TYPES.INPUT_TEXT, label, name, placeholder, error, required, value, onChange }) => {
  let component;
  switch (type) {
    case FIELD_TYPES.INPUT_TEXT:
      component = (
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          data-testid="field-testid"
          className={error ? "error" : ""}
          required={required}
          value={value}
          onChange={onChange}
        />
      );
      break;
    case FIELD_TYPES.TEXTAREA:
      component = (
        <textarea 
          name={name} 
          data-testid="field-testid"
          className={error ? "error" : ""}
          required={required}
          value={value}
          onChange={onChange}
        />
      );
      break;
    default:
      component = (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          data-testid="field-testid"
          className={error ? "error" : ""}
          required={required}
          value={value}
          onChange={onChange}
        />
      );
  }
  return (
    <div className="inputField">
      <span>{label}</span>
      {component}
      {error && <span className="error-text" style={{ color: 'red', fontSize: '12px' }}>{error}</span>}
    </div>
  );
};

Field.propTypes = {
  type: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

Field.defaultProps = {
  type: FIELD_TYPES.INPUT_TEXT,
  name: "field-name",
  label: "",
  placeholder: "",
  error: "",
  required: false,
  value: undefined,
  onChange: undefined,
};

export default Field;