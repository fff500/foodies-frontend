import { useLayoutEffect } from "react";

export const useBodyScrollLock = () => {
  useLayoutEffect(() => {
    const originalOverflow = window.getComputedStyle(document.body).overflow;
    const originalPaddingRight = window.getComputedStyle(
      document.body
    ).paddingRight;
    const header = document.querySelector("header");
    const originalHeaderLeft = header
      ? window.getComputedStyle(header).left
      : "0px";

    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    if (scrollBarWidth > 0) {
      document.body.style.paddingRight = `${scrollBarWidth}px`;
      if (header) {
        header.style.left = `${originalHeaderLeft.replaceAll("px", "") - scrollBarWidth / 2}px`;
      }
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
      if (header) {
        header.style.left = originalHeaderLeft;
      }
    };
  }, []);
};
