import { Project } from "./model.ts"
import React from "react"

export interface NavBarTabProps {
  tabText: string;
}

export interface OverviewItemProps {
  project: Project;
  anchor: HTMLElement | null;
  setAnchor: React.Dispatch<React.SetStateAction<HTMLElement | null>>
  projectForPopup: Project;
  setProjectForPopup: React.Dispatch<React.SetStateAction<Project>>;
}

export interface OverviewPopupProps {
  project: Project;
}