import React, { useState, useEffect } from "react";
import { Slider, Rail, Handles, Tracks, Ticks } from "react-compound-slider";
import { Handle, Track, Tick } from "./SliderComponents";
import s from "./index.module.scss";

const sliderStyle = {
  position: "relative",
  width: "100%",
};

const PriceRangeFilter = () => {
  const [values, setValues] = useState([0, 50000]);
  const [minInput, setMinInput] = useState("");
  const [maxInput, setMaxInput] = useState("");

  const handleMinInputChange = (e) => {
    const newValue = e.target.value;
    setMinInput(newValue);
  };

  const handleMaxInputChange = (e) => {
    const newValue = e.target.value;
    setMaxInput(newValue);
  };

  useEffect(() => {
    setMinInput(values[0] === 0 ? "" : values[0].toString());
    setMaxInput(values[1] === 50000 ? "" : values[1].toString());
  }, [values]);

  const handleMinInputBlur = () => {
    const newMinValue = Number(minInput);
    if (!isNaN(newMinValue) && newMinValue <= values[1]) {
      setValues([newMinValue, values[1]]);
    } else {
      setMinInput(values[0] === 0 ? "" : values[0].toString());
    }
  };

  const handleMaxInputBlur = () => {
    const newMaxValue = Number(maxInput);
    if (!isNaN(newMaxValue) && newMaxValue >= values[0]) {
      setValues([values[0], newMaxValue]);
    } else {
      setMaxInput(values[1] === 50000 ? "" : values[1].toString());
    }
  };

  const onUpdate = (update) => {
    setValues(update);
    setMinInput(update[0].toString());
    setMaxInput(update[1].toString());
  };

  return (
    <>
      <div className={s.price_slider_container}>
        <div className={s.price_wrapper}>
          <input
            type="text"
            className={s.price_input}
            placeholder="Min"
            value={minInput}
            onChange={handleMinInputChange}
            onBlur={handleMinInputBlur}
          />
          <div className={s.separator_container}>
            <span className={s.separator}></span>
          </div>
          <input
            type="text"
            className={s.price_input}
            placeholder="Max"
            value={maxInput}
            onChange={handleMaxInputChange}
            onBlur={handleMaxInputBlur}
          />
        </div>
        <Slider
          rootStyle={sliderStyle}
          domain={[0, 50000]}
          step={200}
          mode={2}
          values={values}
          onUpdate={onUpdate}
        >
          <Rail>
            {({ getRailProps }) => <div className={s.rail} {...getRailProps()} />}
          </Rail>
          <Handles>
            {({ handles, getHandleProps }) => (
              <div className={s.handles}>
                {handles.map((handle, index) => (
                  <Handle
                    key={handle.id}
                    handle={handle}
                    getHandleProps={getHandleProps}
                    index={index}
                    values={values}
                  />
                ))}
              </div>
            )}
          </Handles>
          <Tracks left={false} right={false}>
            {({ tracks, getTrackProps }) => (
              <div className={s.tracks}>
                {tracks.map(({ id, source, target }) => (
                  <Track
                    key={id}
                    source={source}
                    target={target}
                    getTrackProps={getTrackProps}
                  />
                ))}
              </div>
            )}
          </Tracks>
          <Ticks count={5}>
            {({ ticks }) => (
              <div className={s.ticks}>
                {ticks.map((tick) => (
                  <Tick key={tick.id} tick={tick} count={ticks.length} />
                ))}
              </div>
            )}
          </Ticks>
        </Slider>
      </div>
    </>
  );
};

export default PriceRangeFilter;
