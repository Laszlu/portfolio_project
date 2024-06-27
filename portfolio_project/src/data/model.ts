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
  public description: string;
  public artist: string;
  public source: string;
  public commissionType: CommissionType;
  public cover: Cover;
  public musicType: MusicType;

  constructor(projectType: ProjectType, title: string, description: string, artist: string, source: string, commissionType: CommissionType, cover: Cover, musicType: MusicType) {
    this.projectType = projectType;
    this.title = title;
    this.description = description;
    this.artist = artist;
    this.source = source;
    this.commissionType = commissionType;
    this.cover = cover;
    this.musicType = musicType;
  }
}