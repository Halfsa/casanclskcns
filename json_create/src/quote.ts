export interface Quote {
    id: number;
    quote:string;
    author:string;
}
export interface AllQuotes {
    quotes: Quote[];
}