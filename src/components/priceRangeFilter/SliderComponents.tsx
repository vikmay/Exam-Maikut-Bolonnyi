import React from "react";
import s from "./index.module.scss";

export const Handle = ({ handle: { id, value, percent }, getHandleProps }) => (
  <div
    className={s.handle}
    style={{ left: `${percent}%` }}
    {...getHandleProps(id)}
  >
    <div className={s.handleValue}>{value}</div>
  </div>
);

export const Track = ({ source, target, getTrackProps }) => (
  <div
    className={s.track}
    style={{
      left: `${source.percent}%`,
      width: `${target.percent - source.percent}%`,
    }}
    {...getTrackProps()}
  />
);

export const Tick = ({ tick, count }) => (
  <div>
    <div className={s.tickLine} style={{ left: `${tick.percent}%` }} />
    <div
      className={s.tickLabel}
      style={{
        marginLeft: `${-(100 / count) / 2}%`,
        width: `${100 / count}%`,
        left: `${tick.percent}%`,
      }}
    >
      {tick.value}
    </div>
  </div>
);
