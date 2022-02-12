import Link from "next/link";
import styles from './navbar.module.scss';
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  const MenuItems = [
    {
      label: 'Join',
      url: "/join",
      active: true,
      index: 0,
    },
    {
      label: 'Home',
      url: "/",
      active: false,
      index: 1,
    },
    {
      label: 'Create',
      url: "/create",
      active: false,
      index: 2,
    },
  ];

  return (
    <div className={styles.wrapper}>
      {MenuItems.map((item, index) => {
        console.log(item.url);
        return (
          <>
            <Link className={styles.link} href={item.url} key={index}>
              <div
                className={`${
                  router.asPath === item.url
                    ? "active"
                    : "inactive"
                }`}
              >
                <p>{item.label}</p>
              </div>
            </Link>
          </>
        );
      })}
    </div>
  );
}