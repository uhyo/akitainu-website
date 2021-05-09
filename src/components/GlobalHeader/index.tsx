import Image from "next/image";
import Link from "next/link";
import classes from "./GlobalHeader.module.css";

export const GlobalHeader: React.VFC = () => {
  return (
    <div className={classes.wrapper}>
      <Link href="/">
        {/* The parent Link component makes this 'a' valid */}
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a>
          <h1>
            <Image
              src="/images/akitainu_icon.png"
              alt="Akitainu icon"
              width={64}
              height={64}
            />
            Akitainu
          </h1>
        </a>
      </Link>
    </div>
  );
};
