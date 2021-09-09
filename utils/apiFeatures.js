class APIFeatures {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }

    search() {
        const location = this.queryStr.location ? {
            address: {
                $regex: this.queryStr.location,
                $options: "i"
            }
        } : {}

        this.query = this.query.find({...location});
        return this;
    }

    filter() {
        const queryCopy = {...this.queryStr}

        //remove fields from query
        const removeFields = ["location", "page"]
        removeFields.forEach(param => delete queryCopy[param]);

        this.query = this.query.find(queryCopy);
        return this;
    }

    pagination(resultsPerPage) {
        const currentPage = Number(this.queryStr.page) || 1;
        const skip = resultsPerPage * (currentPage - 1);

        this.query = this.query.limit(resultsPerPage).skip(skip);
        return this;
    }

}

export default APIFeatures;