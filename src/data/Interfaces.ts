import { BodyState, Project } from "./model.ts"
import React from "react"

export interface NavBarProps {
  appBodyState: BodyState;
  setAppBodyState: React.Dispatch<React.SetStateAction<BodyState>>;
}

export interface NavBarTabProps {
  tabText: string;
  stateToSet: BodyState;
  appBodyState: BodyState;
  setAppBodyState: React.Dispatch<React.SetStateAction<BodyState>>;
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
  anchor: HTMLElement | null;
  setAnchor: React.Dispatch<React.SetStateAction<HTMLElement | null>>
}

export interface FooterProps {
  setAppBodyState: React.Dispatch<React.SetStateAction<BodyState>>;
}