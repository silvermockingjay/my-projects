import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        const url = process.env.API_URL || 'https://newsapi.org';
        const key = process.env.API_KEY || '';
        super(url, {
            apiKey: key,
        });
    }
}

export default AppLoader;
