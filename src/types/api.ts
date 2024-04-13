import { get, patch, post, del, put } from 'api';

export type Get = typeof get;
export type Post = typeof post;
export type Patch = typeof patch;
export type Delete = typeof del;
export type Put = typeof put;

export type Controller = Get | Post | Patch | Delete | Put;
