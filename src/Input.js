const Input = ({ bpm, changeBpm }) => {
  return (
    <div>
      <div>{bpm} BPM</div>
      <input onChange={changeBpm} type="range" min="40" max="200" />
    </div>
  );
};

export default Input;
