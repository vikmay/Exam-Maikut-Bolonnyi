import React, { useState, useEffect } from "react";
import { Slider, Rail, Handles, Tracks, Ticks } from "react-compound-slider";
import { Handle, Track, Tick } from "./SliderComponents";
import s from "./index.module.scss";

const sliderStyle = {
  position: "relative",
  width: "100%",
};

const PriceRangeFilter = () => {
  const [values, setValues] = useState([500, 10500]);
  const [minInput, setMinInput] = useState("");
  const [maxInput, setMaxInput] = useState("");

  const onUpdate = (update) => {
    setValues(update);
  };

  const handleMinInputChange = (e) => {
    setMinInput(e.target.value);
  };

  const handleMaxInputChange = (e) => {
    setMaxInput(e.target.value);
  };

  useEffect(() => {
    setMinInput(values[0] === 0 ? "Min" : values[0].toString());
    setMaxInput(values[1] === 50000 ? "Max" : values[1].toString());
  }, [values]);

  const handleApplyClick = () => {
    const minValue = Number(minInput);
    const maxValue = Number(maxInput);

    if (!isNaN(minValue) && !isNaN(maxValue)) {
      setValues([minValue, maxValue]);
    }
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
          />
          <div className={s.separator_container}><span className={s.separator}></span></div>
          <input
            type="text"
            className={s.price_input}
            placeholder="Max"
            value={maxInput}
            onChange={handleMaxInputChange}
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
            {({ getRailProps }) => (
              <div className={s.rail} {...getRailProps()} />
            )}
          </Rail>
          <Handles>
            {({ handles, getHandleProps }) => (
              <div className={s.handles}>
                {handles.map((handle) => (
                  <Handle
                    key={handle.id}
                    handle={handle}
                    getHandleProps={getHandleProps}
                  />
                ))}
              </div>
            )}
          </Handles>
          <Tracks right={false}>
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
