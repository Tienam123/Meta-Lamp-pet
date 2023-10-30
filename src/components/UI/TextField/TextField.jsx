/*Default imports*/
import React from 'react';
import style from "./TextField.module.scss"



//Code ...
const TextField = () => {
  return (
      <>
        <h3 className={style.inputtext}>Text</h3>
        <input className={style.input} type="text" placeholder=""/>
      </>
  );
};

export default TextField;