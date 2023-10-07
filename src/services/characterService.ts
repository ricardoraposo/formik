import app from "./api";

class CharacterService {
  async getAllByQuery(name: string) {
    return app.get(`/character/?name=${name}`);
  };
};

const char = new CharacterService();

export default char;
