import supertest from "supertest";
import mongoose from "mongoose";
import app from "../src/app.js";

const request = supertest(app);

describe("Adoptions API", () => {

    before(async () => {
        await mongoose.connect("mongodb://127.0.0.1:27017/adoptme-test");
    });

    after(async () => {
        await mongoose.connection.close();
    });

    it("GET /api/adoptions should return all adoptions", async () => {
        const res = await request.get("/api/adoptions");

        if (res.statusCode !== 200) throw new Error("Status not 200");
    });

    it("GET /api/adoptions/:aid should return 404 if not found", async () => {
        const fakeId = new mongoose.Types.ObjectId();

        const res = await request.get(`/api/adoptions/${fakeId}`);

        if (res.statusCode !== 404) throw new Error("Should return 404");
    });

    it("POST /api/adoptions/:uid/:pid should fail if user not found", async () => {
        const fakeUser = new mongoose.Types.ObjectId();
        const fakePet = new mongoose.Types.ObjectId();

        const res = await request.post(`/api/adoptions/${fakeUser}/${fakePet}`);

        if (res.statusCode !== 404) throw new Error("Should return 404");
    });

});