type Request = {
    resource: string | null;
    id: string | null;
    verb: string | null;
}

const Utils = {
    // --------------------------------
    //  Parse a url and break it into resource, id and verb
    // --------------------------------
    parseRequestURL: (): Request => {

        let url = location.hash.slice(1).toLowerCase() || '/';
        let r = url.split("/")
        let request: Request = {
            resource: null,
            id: null,
            verb: null
        }

        request.resource = r[1];
        request.id = r[2];
        request.verb = r[3];;
   
        return request;
    }

    // --------------------------------
    //  Simple sleep implementation
    // --------------------------------
    , sleep: (ms: number): number | PromiseLike<number> => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

export { Utils };