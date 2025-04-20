"use client"

import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

// Explicitly type the context value
interface LogoVisibilityContextValue {
  isHeroLogoVisible: boolean;
  setIsHeroLogoVisible: Dispatch<SetStateAction<boolean>>;
}

// Default context value
const defaultValue: LogoVisibilityContextValue = {
  isHeroLogoVisible: true,
  setIsHeroLogoVisible: () => {},
};

export const LogoVisibilityContext = createContext<LogoVisibilityContextValue>(defaultValue);

interface LogoVisibilityProviderProps {
  children: ReactNode;
}

export const LogoVisibilityProvider = ({ children }: LogoVisibilityProviderProps) => {
  const [isHeroLogoVisible, setIsHeroLogoVisible] = useState<boolean>(true);

  return (
    <LogoVisibilityContext.Provider value={{ isHeroLogoVisible, setIsHeroLogoVisible }}>
      {children}
    </LogoVisibilityContext.Provider>
  );
};

export const useLogoVisibility = (): LogoVisibilityContextValue => useContext(LogoVisibilityContext);