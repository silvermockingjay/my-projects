import { Options } from '../interfaces/interfaces.js';
import { Endpoints } from '../interfaces/interfaces.js';
import { UserResponse } from '../interfaces/interfaces.js';
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
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
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
            .then((data: UserResponse) => callback(data))
            .catch((err) => {
                if (err instanceof Error) console.error(err);
            });
    }
}

export default Loader;
