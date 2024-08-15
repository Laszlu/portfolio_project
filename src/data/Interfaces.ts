import { BodyState, Project, ProjectRole, ProjectVisual } from "./model.ts"
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

export interface OverviewProps {
  selectedProject: Project;
  setSelectedProject: React.Dispatch<React.SetStateAction<Project>>;
  setAppBodyState: React.Dispatch<React.SetStateAction<BodyState>>;
}

export interface OverviewItemProps {
  project: Project;
  selectedProject: Project;
  setSelectedProject: React.Dispatch<React.SetStateAction<Project>>;
  setAppBodyState: React.Dispatch<React.SetStateAction<BodyState>>;
}

export interface ProjectPageProps {
  project: Project;
}

export interface RoleBadgeProps {
  role: ProjectRole;
}

export interface FooterProps {
  setAppBodyState: React.Dispatch<React.SetStateAction<BodyState>>;
}

export interface CookieBannerProps {
  cookieConsent: string | undefined;
  setCookieConsent: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export interface ProjectVisualProps {
  visual: ProjectVisual;
}