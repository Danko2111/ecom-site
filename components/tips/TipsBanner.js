import React from "react";
import style from "./TipsBanner.module.scss";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { BsCreditCard } from "react-icons/bs";
import { HiOutlineArrowPath } from "react-icons/hi2";
import { FaShippingFast } from "react-icons/fa";
import Tip from "../tip/Tip";

function TipsBanner() {
  return (
    <section className={style.tipsContainer}>
      <Tip
        image={<MdOutlineHeadsetMic />}
        title={"Customer Support"}
        subtitle={"Need Assistance?"}
        copy={
          "Lorem ipsum dolor sit amet. Nam ut odio orci. Donec rutrum vitae augue sit amet vulputate. Nullam bibendum hendrerit lobortis."
        }
      />
      <Tip
        image={<BsCreditCard />}
        title={"Secured Payment"}
        subtitle={"Safe and Fast!"}
        copy={
          "Lorem ipsum dolor sit amet. Nam ut odio orci. Donec rutrum vitae augue sit amet vulputate. Nullam bibendum hendrerit lobortis."
        }
      />
      <Tip
        image={<HiOutlineArrowPath />}
        title={"Free Returns"}
        subtitle={"Easy and Free!"}
        copy={
          "Lorem ipsum dolor sit amet. Nam ut odio orci. Donec rutrum vitae augue sit amet vulputate. Nullam bibendum hendrerit lobortis."
        }
      />
      <Tip
        image={<FaShippingFast />}
        title={"Free Shipping"}
        subtitle={"Orders Over $50"}
        copy={
          "Lorem ipsum dolor sit amet. Nam ut odio orci. Donec rutrum vitae augue sit amet vulputate. Nullam bibendum hendrerit lobortis."
        }
      />
    </section>
  );
}

export default TipsBanner;
