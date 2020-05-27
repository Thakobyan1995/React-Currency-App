// this class uses Singleton Pattern

class FetchService {

    static instance = null;

    constructor() {
        if(FetchService.instance) {
            console.log('if exist')
            return FetchService.instance
        }

        console.log('does not exist')
        FetchService.instance = this;
    }

    get() {

    }
    
    
}

const fetchServise = new FetchService;

export default fetchServise;

