class ApiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    const keyword = this.queryStr.keyword
      ? {
          title: {
            $regex: this.queryStr.keyword,
            $options: "i",
          },
        }
      : {};

    //console.log(keyword);

    this.query = this.query.find({ ...keyword });
    return this;
  }

  //for filtering based on any other field like category or price
  filter() {
    const queryCopy = { ...this.queryStr }; //getting the actual copy instead of reference usign the spread operator

    //Removing some fields so that they are not filtered
    const removeFields = ["keyword", "page", "limit", "sort"];
    removeFields.forEach((key) => delete queryCopy[key]);

    this.query = this.query.find(queryCopy);
    return this;
  }

  pagination(resultPerPage) {
    const currentPage = Number(this.queryStr.page) || 1;
    const skip = resultPerPage * (currentPage - 1);
    this.query = this.query.limit(resultPerPage).skip(skip);
    return this;
  }

  applySort() {
    if (this.queryStr.sort) {
      const sortBy = this.queryStr.sort;
      console.log(sortBy);
      if (sortBy === "title") {
        console.log(`sorting by title`);
        this.query = this.query.sort("title");
      } else if (sortBy === "publishedDate") {
        console.log(`sorting by publishedDate`);
        this.query = this.query.sort("publishedDate");
      }
      // console.log(this.query);
    } else {
      //default sorting
      console.log(`default sorting`);
      this.query = this.query.sort("-title");
    }

    return this;
  }
}

module.exports = ApiFeatures;
