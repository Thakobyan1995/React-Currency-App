// this class uses Singleton Pattern

class FetchService {

    static instance = null;

    #DOMAIN = 'https://api.udilia.com/coins/v1'; 

    constructor() {
        if(FetchService.instance) {
            return FetchService.instance
        }
        FetchService.instance = this;
    }

    async get(url) {
        const path = `${this.#DOMAIN}/${url}`;
        const response = await fetch(path)
        
        return await response.json();
    }
    
    
}

const fetchServise = new FetchService();

export default fetchServise;

