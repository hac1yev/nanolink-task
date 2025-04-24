declare type ScoreRank = {
    score: number;
    rank: number;
    wait?: boolean;
    go?: boolean;
};
  
declare type DepType = {
    d: number;
    e: number;
    p: number;
    wait?: boolean;
    go?: boolean;
};
  
declare type LiveItem = {
    rank: string;
    country: string;
    flag: string;
    bib: number;
    name: string;
    dep: DepType;
    app: ScoreRank;
    aa: ScoreRank;
    team: ScoreRank;
    inquiry: boolean;
};
  
declare type LiveDataTypes = LiveItem[];

declare type ResultItem = {
    rank: number;
    team: string;
    flag: string;
    bib: number;
    name: string;
    d: number;
    e: number;
    pen: number;
    total: number;
    score: boolean;
    first_total: boolean;
  };
  
declare type ResultDataTypes = ResultItem[];  