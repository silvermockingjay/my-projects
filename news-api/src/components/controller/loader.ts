import { Options } from '../interfaces/interfaces.js';
import { Endpoints } from '../interfaces/interfaces.js';
import { Response } from '../interfaces/interfaces.js';
import { CallBackFunction } from '../interfaces/interfaces.js';

class Loader {
    constructor(
        public baseLink: string,
        public options: Options
    ) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        { endpoint, options = {} }: { endpoint: Endpoints; options?: Options },
        callback: CallBackFunction = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response) {
        if (res.status !== 'ok') {
            if (res.code === '401 - Unauthorized' || res.code === '404 - Not Found')
                console.log(`Sorry, but there is ${res.code} error: ${res.message}`);
            throw Error(res.message);
        }

        return res;
    }

    makeUrl(options: Options, endpoint: Endpoints) {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        if (Object.keys(urlOptions).length) {
            Object.keys(urlOptions).forEach((key) => {
                url += `${key as keyof Options}=${urlOptions[key as keyof Options]}&`;
            });
        }

        return url.slice(0, -1);
    }

    load(method: 'GET' | 'POST', endpoint: Endpoints, callback: CallBackFunction, options: Options = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data: Response) => callback(data))
            .catch((err) => {
                if (err instanceof Error) console.error(err);
            });
    }
}

export default Loader;
