import styles from "./sidenav.module.css";
import { NavLink } from "react-router-dom";
import { navData } from "../lib/navData";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import axios from "axios";

export default function Sidenav() {
  const [open, setOpen] = useState(true);
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        const response = await axios.get(
          "https://ypapi.formz.in/api/public/videos"
        );
        const uniqueSubscriptions = response.data.reduce((acc, curr) => {
          if (!acc.some((item) => item.channelName === curr.channelName)) {
            acc.push(curr);
          }
          return acc;
        }, []);
        setSubscriptions(uniqueSubscriptions);
      } catch (error) {
        console.error("Error fetching subscriptions:", error);
      }
    };
    fetchSubscriptions();
  }, []);

  return (
    <div className={`${styles.sidenav} ${open ? "" : styles.sidenavClosed}`}>
      <button className={styles.menuBtn}>
        <img
          src={logo}
          alt=""
          className="aspect-square h-[30px] w-[30px] mx-auto ml-2"
        />
      </button>
      <div className={styles.menuItems}>
        {navData.map((item) => (
          <NavLink
            key={item.id}
            className="sideitem"
            to={item.link}
            onClick={() => setOpen(true)}
          >
            {item.icon}
            <span className={styles.linkText}>{item.text}</span>
          </NavLink>
        ))}
      </div>

      <p className="text-gray-400 pops ml-4 mt-3 text-sm">Subscriptions</p>
      <div className={styles.menuItems2}>
        {subscriptions.map((item) => (
          <NavLink
            key={item.id}
            className="sideitem2"
            to={item.link}
            onClick={() => setOpen(true)}
          >
            <img
              src={item.channelPicture}
              alt={item.channelName}
              className="h-[25px] w-[25px] rounded-full"
            />
            <span className={styles.linkText}>{item.channelName}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
