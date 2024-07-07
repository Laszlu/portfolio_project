export enum BodyState {
  Overview,
  About,
  Contact,
  Imprint
}

export enum ProjectType {
  Music,
  Design
}

export enum MusicType {
  None,
  EP,
  Album,
  Single
}

export enum CommissionType {
  Personal,
  Commissioned
}

export enum ProjectRole {
  Producing,
  Mixing,
  Mastering,
  Visuals,
  Recording,
  Songwriting
}

export class ProjectCredit {
  public artist: string;
  public projectRole: string;

  constructor(artist: string, projectRole: string) {
    this.artist = artist;
    this.projectRole = projectRole;
  }
}

export class Cover {
  public source: string;
  public altText: string;
  public fileType: string;

  constructor(source: string, altText: string, fileType: string) {
    this.source = source;
    this.altText = altText;
    this.fileType = fileType;
  }
}

export class Project {
  public projectType: ProjectType;
  public title: string;
  public description: string; // TODO: entfernen
  public releaseYear: string;
  public credits: ProjectCredit[]; // TODO: Artist direkt einbauen, Rollen als ProjectRoles
  public source: string;
  public commissionType: CommissionType; // TODO: kann weg
  public cover: Cover;
  public musicType: MusicType;
  //TODO: Visuals als klasse anlegen

  constructor(projectType: ProjectType, title: string, description: string, releaseYear: string, credits: ProjectCredit[], source: string, commissionType: CommissionType, cover: Cover, musicType: MusicType) {
    this.projectType = projectType;
    this.title = title;
    this.description = description;
    this.releaseYear = releaseYear;
    this.credits = credits;
    this.source = source;
    this.commissionType = commissionType;
    this.cover = cover;
    this.musicType = musicType;
  }
}