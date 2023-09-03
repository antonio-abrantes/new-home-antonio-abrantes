import React, { useState, useEffect } from "react";

export const useScrollPosition = (scrollThreshold) => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= scrollThreshold) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    const handleInitialScroll = () => {
      handleScroll();
    };

    // Adicionar ouvinte para o evento de scroll
    window.addEventListener("scroll", handleScroll);
    // Verificar posição inicial ao montar o componente
    handleInitialScroll();

    // Remover o ouvinte quando o componente for desmontado
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollThreshold]);

  return scrolled;
};
