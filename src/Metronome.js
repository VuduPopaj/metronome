import { useState, useEffect, useRef } from "react";
import Button from "./Button";
import Input from "./Input";
import click1 from "./sound/click1.wav";

const Metronome = () => {
  const [play, setPlay] = useState(false);
  const [bpm, setBpm] = useState(120);

  const song = new Audio(click1);

  const playSound = () => {
    song.play();
  };

  useEffect(() => {
    if (play) {
      clearInterval(timer.current);
      timer.current = setInterval(playSound, 60000 / bpm);
    } else {
      clearInterval(timer.current);
    }
  });
  const timer = useRef();

  const playStop = () => {
    if (play) {
      setPlay(false);
    } else {
      setPlay(true);
    }
  };

  const changeBpm = (e) => {
    const bpm = e.target.value;
    setBpm(bpm);
  };

  return (
    <div className='metronome'>
      <h1>Metronome</h1>
      <Input changeBpm={changeBpm} bpm={bpm} />
      <Button playStop={playStop} play={play} />
    </div>
  );
};

export default Metronome;
