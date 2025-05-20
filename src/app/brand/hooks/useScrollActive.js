"use client";

import { useRef, useState, useEffect } from "react";

export default function useScrollActive(count = 1) {
  const refs = useRef(Array(count).fill(null));

  const [actives, setActives] = useState(Array(count).fill(false));

  useEffect(() => {
    const observers = [];

    refs.current = refs.current.slice(0, count);

    refs.current.forEach((ref, i) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActives((prev) => {
              const newState = [...prev];
              newState[i] = true;
              return newState;
            });
            observer.disconnect();
          }
        },
        { threshold: 0.2 }
      );

      if (ref) observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [count]);

  return [
    // 각 요소에 ref를 할당할 콜백 함수들
    Array(count)
      .fill(null)
      .map((_, i) => (el) => (refs.current[i] = el)),
    actives,
  ];
}
