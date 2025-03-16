// Types and interfaces for request
type Fields =
    | 'title'
    | 'description'
    | 'content'
    | 'title,description'
    | 'title,content'
    | 'description,title'
    | 'description,content'
    | 'content,title'
    | 'content,description'
    | 'title,description,content';

type Languages = 'ar' | 'de' | 'en' | 'es' | 'fr' | 'he' | 'it' | 'nl' | 'no' | 'pt' | 'ru' | 'sv' | 'ud' | 'zh';
type Countries =
    | 'ae'
    | 'ar'
    | 'at'
    | 'au'
    | 'be'
    | 'bg'
    | 'br'
    | 'ca'
    | 'ch'
    | 'cn'
    | 'co'
    | 'cu'
    | 'cz'
    | 'de'
    | 'eg'
    | 'fr'
    | 'gb'
    | 'gr'
    | 'hk'
    | 'hu'
    | 'id'
    | 'ie'
    | 'il'
    | 'in'
    | 'it'
    | 'jp'
    | 'kr'
    | 'lt'
    | 'lv'
    | 'ma'
    | 'mx'
    | 'my'
    | 'ng'
    | 'nl'
    | 'no'
    | 'nz'
    | 'ph'
    | 'pl'
    | 'pt'
    | 'ro'
    | 'rs'
    | 'ru'
    | 'sa'
    | 'se'
    | 'sg'
    | 'si'
    | 'sk'
    | 'th'
    | 'tr'
    | 'tw'
    | 'ua'
    | 'us'
    | 've'
    | 'za';

interface BasicOptions {
    apiKey?: string;
    q?: string;
    sources?: string;
    pageSize?: number;
    page?: number;
}
interface EverythingOptions extends BasicOptions {
    searchIn?: Fields;
    domains?: string;
    excludeDomains?: string;
    from?: string;
    to?: string;
    language?: Languages;
    sortBy?: 'relevancy' | 'popularity' | 'publishedAt';
}

interface HeadlinesOptions extends BasicOptions {
    sources?: string;
    country?: Countries;
    category?: 'business' | 'entertainment' | 'general' | 'health' | 'science' | 'sports' | 'technology';
}

interface SourcesOptions
    extends Pick<EverythingOptions, 'apiKey' | 'language'>,
        Pick<HeadlinesOptions, 'country' | 'category'> {}

export type Options = EverythingOptions | HeadlinesOptions | SourcesOptions;

export type Endpoints = '/v2/everything' | '/v2/top-headlines' | '/v2/top-headlines/sources';

//Types and interfaces for response
interface ResponseBasic {
    status: string;
    code?: string;
    message?: string;
    json: () => ResponseBasic;
}

interface ResponseArticles extends ResponseBasic {
    totalResults?: number;
    articles?: Articles[];
    json: () => ResponseArticles;
}

type StringOrNull = string | null;

interface Articles {
    source: {
        id: StringOrNull;
        name: StringOrNull;
    };
    author: StringOrNull;
    title: StringOrNull;
    description: StringOrNull;
    url: StringOrNull;
    urlToImage: StringOrNull;
    publishedAt: StringOrNull;
    content: StringOrNull;
}

interface ResponseSources extends ResponseBasic {
    sources?: Sources[];
    json: () => ResponseSources;
}

interface Sources {
    id: StringOrNull;
    name: StringOrNull;
    description: StringOrNull;
    url: StringOrNull;
    category: StringOrNull;
    language: StringOrNull;
    country: StringOrNull;
}
export type Response = ResponseArticles | ResponseSources;
