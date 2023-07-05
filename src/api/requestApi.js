import { sleep } from "../utils";

const fakeRequests = [
  {
    key: "0",
    original: [42.844827, 74.588],
    destination: [42.8623880844005, 74.55248618718157],
    name: "Москва Санк-Петербург",
  },
  {
    key: "1",
    original: [55.753526, 37.599858],
    destination: [56.865196696367526, 35.91166734695435],
    name: "Москва Тверь",
  },
  {
    key: "2",
    original: [55.718703, 37.737055],
    destination: [55.790346, 37.39415],
    name: "по Москве",
  },
];

const requestApi = {
  async getAll() {
    await sleep(1000);
    return fakeRequests;
  },
};

export default requestApi;
