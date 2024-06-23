import { Request } from "express";

export type IApiResponse<T = any | null> = {
    data?: T,
    statusCode: number,
    status: string,
    message?: string,
};

export interface IApiRequest<Body = any, Param = string | string[] | any, Query = any, ResponseBody = any> extends Request<Param, ResponseBody, Body, Query> {
    [key: string]: any,
};


export interface IReview {
    review: string,
    thesisId: string,
    from: string
    createdTime: Date,
    updatedTime: Date
}

export interface IThesis {
    name: string,
    file: string,
    author: string,
    _id: string
}

export interface IUser {
    name: string
}

