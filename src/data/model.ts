export enum BodyState {
  Overview,
  About,
  Contact,
  Imprint,
  ProjectPage
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

export enum ProjectRole {
  Producing,
  Mixing,
  Mastering,
  Visuals,
  Recording,
  Songwriting
}

export class ProjectVisual {
  public title: string;
  public source: string;
  public altText: string;

  constructor(title: string,
              source: string,
              altText: string) {
    this.title = title;
    this.source = source;
    this.altText = altText;
  }
}

export class Cover {
  public source: string;
  public altText: string;

  constructor(source: string,
              altText: string) {
    this.source = source;
    this.altText = altText;
  }
}

export class Project {
  public projectType: ProjectType;
  public title: string;
  public releaseYear: string;
  public artist: string;
  public genres: string[];
  public source: string;
  public cover: Cover;
  public musicType: MusicType;
  public roles: ProjectRole[];
  public visuals: ProjectVisual[];

  constructor(projectType: ProjectType,
              title: string,
              releaseYear: string,
              artist: string,
              genres: string[],
              source: string,
              cover: Cover,
              musicType: MusicType,
              roles: ProjectRole[],
              visuals: ProjectVisual[]) {
    this.projectType = projectType;
    this.title = title;
    this.releaseYear = releaseYear;
    this.artist = artist;
    this.genres = genres;
    this.source = source;
    this.cover = cover;
    this.musicType = musicType;
    this.roles = roles;
    this.visuals = visuals;
  }
}