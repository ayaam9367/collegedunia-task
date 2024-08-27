import chai from 'chai'; 
import { expect } from "chai";
import chaiHttp from "chai-http";
import sinon from "sinon";
import app from "../backend/app.js"; 
import Books from "../backend/models/booksModel.js";

chai.use(chaiHttp);
should();

describe("Books Controller", () => {
  
  describe("POST /api/books", () => {
    it('should create a new book entry', async () => {
      const bookData = {
        title: 'Test Book',
        author: 'Test Author',
        isbn: '1234567890',
        publishedDate: '2024-01-01',
      };

      const res = await chai.request(app).post('/api/v1/books').send(bookData);

      expect(res).to.have.status(201);
      expect(res.body).to.have.property('success').eql(true);
      expect(res.body).to.have.property('message').eql('new book entry is created');
      expect(res.body).to.have.property('book').that.includes(bookData);
    });
  });
});

describe("GET /api/books", () => {
  it("should get all books", async () => {
    const books = [
      {
        title: "Test Book 1",
        author: "Author 1",
        isbn: "1234567890",
        publishedDate: "2024-01-01",
      },
      {
        title: "Test Book 2",
        author: "Author 2",
        isbn: "0987654321",
        publishedDate: "2024-01-02",
      },
    ];

    const findStub = sinon.stub(Books, "find").returns({
      search: () => ({ filter: () => ({ applySort: () => ({ pagination: () => ({ exec: () => books }) }) }) })
    });

    const res = await chai.request(app).get("/api/v1/books");
    
    res.should.have.status(200);
    res.body.should.have.property("success").eql(true);
    res.body.should.have.property("message").eql("all books found");
    res.body.should.have.property("books").eql(books);

    findStub.restore();
  });
});


describe("GET /api/books/:id", () => {
  it("should get a book by id", async () => {
    const book = {
      _id: "123456",
      title: "Test Book",
      author: "Test Author",
      isbn: "1234567890",
      publishedDate: "2024-01-01",
    };

    const findByIdStub = sinon.stub(Books, "findById").resolves(book);

    const res = await chai.request(app).get("/api/v1/books/123456");
    
    res.should.have.status(200);
    res.body.should.have.property("succes").eql(true);
    res.body.should.have.property("message").eql("book found");
    res.body.should.have.property("book").eql(book);

    findByIdStub.restore();
  });
});


describe("PUT /api/books/:id", () => {
  it("should update book details", async () => {
    const updatedBook = {
      title: "Updated Test Book",
      author: "Updated Test Author",
      isbn: "1234567890",
      publishedDate: "2024-01-01",
    };

    const findByIdStub = sinon.stub(Books, "findById").resolves(updatedBook);
    const findByIdAndUpdateStub = sinon.stub(Books, "findByIdAndUpdate").resolves(updatedBook);

    const res = await chai.request(app).put("/api/v1/books/123456").send(updatedBook);

    res.should.have.status(200);
    res.body.should.have.property("success").eql(true);
    res.body.should.have.property("message").eql("book details updated");
    res.body.should.have.property("book").eql(updatedBook);

    findByIdStub.restore();
    findByIdAndUpdateStub.restore();
  });
});


describe("DELETE /api/books/:id", () => {
  it("should delete a book by id", async () => {
    const book = {
      _id: "123456",
      title: "Test Book",
      author: "Test Author",
    };

    const findByIdStub = sinon.stub(Books, "findById").resolves(book);
    const findByIdAndDeleteStub = sinon.stub(Books, "findByIdAndDelete").resolves(book);

    const res = await chai.request(app).delete("/api/v1/books/123456");

    res.should.have.status(200);
    res.body.should.have.property("success").eql(true);
    res.body.should.have.property("message").eql("book deleted successfully");

    findByIdStub.restore();
    findByIdAndDeleteStub.restore();
  });
});

