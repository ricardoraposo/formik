import app from "./api";

class CharacterService {
  async getAllByQuery({ name, status }: { name: string; status: string }) {
    return app.get(`/character/?name=${name}&status=${status}`);
  };
};

const char = new CharacterService();

export default char;
