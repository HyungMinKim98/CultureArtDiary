// src>components> Types.ts

export interface Media {
  title: string;
  poster_path: string;
  id: string; 
  overview: string;
  releaseDate: string;
  genres: number[];
  originalLanguage: string;
  popularity: number;
  voteAverage: number;
  voteCount: number;
}

export interface User {
  id: string;
  nickname: string;
  profilePhoto: string;
  genre: Genre[];
  gender: Gender;
  birthYear: string;
}

export enum Gender {
  Male = "남성",
  Female = "여성",
  Other = "기타",
}


export enum Genre {
  Action = "액션",
  Comedy = "코미디",
  Drama = "드라마",
  Fantasy = "판타지",
  Horror = "호러",
  Romance = "로맨스",
  Thriller = "스릴러",
  Documentary = "다큐멘터리",
  ScienceFiction = "SF",
  Mystery = "미스터리",
  Animation = "애니메이션",
  Biography = "전기",
  History = "역사",
  Musical = "뮤지컬",
  Sports = "스포츠",
}