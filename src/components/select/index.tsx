import React from "react";
import style from "./style.module.css";

type Props = {
  options: string[];
  value: string;
  name: string;
  onChange: (e: any) => void;
};

export const Select = ({ options, value, name, onChange }: Props) => (
  <div className={style.selectWrapper}>
    <input
      name={name}
      className={style.select}
      value={value}
      onChange={onChange}
      list="options"
    />
    <datalist id="options">
      {options.map((item) => (
        <option key={item}>{item}</option>
      ))}
    </datalist>
  </div>
);
