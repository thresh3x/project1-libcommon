export interface Article {
  id: number;
  uuid: string;
  title: string;
  category: Category;
  content: string;
  cover: string;
  isTop: number;
  author_id: number;
  status: number;
  views: number;
  likes: number;
  createdAt: Date;
  updateAt: Date;
  tags: Tag[];
}

export interface Category {
  id: number;
  name: string;
}

export interface Tag {
  id: number;
  name: string;
}

export interface Album {
  id: number;
  name: string;
  description: string;
  cover: string;
  createdAt: Date;
  updatedAt: Date;
  photos: Photo[];
}

export interface Background {
  id: number;
  bg_url: string;
  route_name: string;
}

export interface Comment {
  id: number;
  parent_id: number;
  for_id: number;
  type: number;
  from_id: number;
  from_name: string;
  from_avatar: string;
  to_id: number;
  to_name: string;
  to_avatar: string;
  content: string;
  likes: number;
  createdAt: Date;
  ip: string;
}

export interface Config {
  id: number;
  name: string;
  avatar: string;
  avatar_bg: string;
  whats_up: string;
  qq_link: string;
  github_link: string;
  views: number;
}

export interface Message {
  id: number;
  tag: MessageTag;
  content: string;
  color: string;
  font_size: number;
  bg_url: string;
  user_id: number;
  likes: number;
  createdAt: Date;
}

export interface MessageTag {
  id: number;
  name: string;
}

export interface Photo {
  id: number;
  url: string;
  status: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Talk {
  id: number;
  user_id: number;
  content: string;
  status: number;
  is_top: number;
  likes: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface TalkPhoto {
  id: number;
  talk_id: number;
  url: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: number;
  username: string;
  password: string;
  role: number;
  nick_name: string;
  avatar: string;
  qq: string;
  ip: string;
  createAt: Date;
  oldPassword: string;
}

export interface ArticleQuery {
  keyWord: string;
  page: number;
  pageSize: number;
}

export type Query = Partial<ArticleQuery> & {role?:number};

export type FindAllRes = {
  data: User[],
  total: number
}

export type PatchType = {
  generatedMaps: any[]
  row: any[]
  affected: number // 1 success
}

export type UploadType = {
  url: string
  filename: string
  code: number // 0 success
}