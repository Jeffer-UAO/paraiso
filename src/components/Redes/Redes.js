import React from "react";
import styles from "./Redes.module.scss";
import { IoLogoWhatsapp } from "react-icons/io";
import { GiRotaryPhone } from "react-icons/gi";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";



export function Redes() {
  return <div className={styles.space}>

    <div className={styles.phone}>
      <p><IoLogoWhatsapp  size="20" color="#63f945" /> 311 288 4317</p>
      <p><GiRotaryPhone color="#ff0202" size="22"/>  885 5203</p>
    </div>

  
    <div className={styles.redes}>
    <p>paraisodelamoda.paisa@hotmail.com <BsFacebook color="blue" size="20"/></p>
      <p>paraisodelamoda_paisa <AiFillInstagram size="22" color="orange" /> </p>
      
   
    </div>
  </div>;
}
