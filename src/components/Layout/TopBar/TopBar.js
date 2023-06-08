import styles from "./TopBar.module.scss";
import { CardImg } from "reactstrap";
import Link from "next/link";

export function TopBar() {
  return (
    <div className={styles.topBarComponent}>
    
        <Link href="/">
          <CardImg src="/image/logo-paraiso.png" alt="" />{" "}
        </Link>

       

     
    </div>
  );
}
