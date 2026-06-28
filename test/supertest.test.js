import supertest from "supertest";
import mongoose from "mongoose";
import app from "../src/app.js";

const request = supertest(app);

describe("Adoptions API FULL TESTS", () => {

    before(async () => {
        await mongoose.connect("mongodb://127.0.0.1:27017/adoptme-test");
    });

    after(async () => {
        await mongoose.connection.close();
    });

    it("GET /api/adoptions - success", async () => {
        const res = await request.get("/api/adoptions");
        if (res.statusCode !== 200) throw new Error("Expected 200");
    });

    it("GET /api/adoptions/:aid - not found", async () => {
        const fakeId = new mongoose.Types.ObjectId();
        const res = await request.get(`/api/adoptions/${fakeId}`);
        if (res.statusCode !== 404) throw new Error("Expected 404");
    });

    it("POST adoption - user not found", async () => {
        const fakeUser = new mongoose.Types.ObjectId();
        const fakePet = new mongoose.Types.ObjectId();

        const res = await request.post(`/api/adoptions/${fakeUser}/${fakePet}`);
        if (res.statusCode !== 404) throw new Error("Expected 404 user");
    });

    it("POST adoption - pet not found", async () => {
        const fakeUser = new mongoose.Types.ObjectId();


        const res = await request.post(`/api/adoptions/${fakeUser}/123456789012`);
        if (res.statusCode !== 404 && res.statusCode !== 400) {
            throw new Error("Expected error");
        }
    });

});