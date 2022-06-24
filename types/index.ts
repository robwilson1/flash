import React from "react";
import type { IconType } from "react-icons";

export type ComponentWithChildren = {
  children: React.ReactNode;
};

export type Card = {
  title: string;
  body: string;
  icon: IconType;
};
