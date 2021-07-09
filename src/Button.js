const Button = ({ playStop, play }) => {
  return (
    <div>
      <button onClick={playStop}>{play ? "STOP" : "PLAY"}</button>
    </div>
  );
};

export default Button;
