import React, { useState, useLayoutEffect } from "react";
import ResizeObserver from "resize-observer-polyfill";
import { targetQuerySize } from "../const";
// 과제에서 주어진 사이즈만 적용/타겟팅 합니다.
// 디바이스 사이즈마다 분기하려면 재정의 해야합니다.
let ID = 0;

export default function useBreakpoint(
  observeTargetEl: React.RefObject<HTMLElement>
) {
  const [matches, setMatched] = useState(false);
  useLayoutEffect(() => {
    const el = observeTargetEl.current;

    const resizeObserver = new ResizeObserver((entries) => {
      const { width } = entries[0].contentRect;
      ID = window.requestAnimationFrame(() => {
        if (resizeObserver) {
          setMatched(targetQuerySize <= width);
        }
      });
    });

    if (el) {
      resizeObserver.observe(el);
    }
    return () => {
      if (el) {
        resizeObserver.unobserve(el);
      }
      window.cancelAnimationFrame(ID);
    };
  }, [observeTargetEl]);
  return matches;
}
