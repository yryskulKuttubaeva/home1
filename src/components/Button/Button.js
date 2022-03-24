import "./Button.css";

function Button(props) {
  const className = ["Button"];
  if (props.success) {
    className.push('success');
  }
  if (props.danger) {
    className.push('danger');
  }
  if (props.primary) {
    className.push('primary');
  }
  if (props.secoundary) {
    className.push('secondary');
  }
  if (props.warning) {
    className.push('warning');
  }
  if (props.info) {
    className.push('info');
  }
  if (props.light) {
    className.push('danger');
  }
  if (props.dark) {
    className.push('light');
  }

  return <div className={className.join(' ')}>{props.children}</div>;
}

export default Button;