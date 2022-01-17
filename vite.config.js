import nunjucks from "vite-plugin-nunjucks";
import global from "./assets/data/global.json";
import index from "./assets/data/index.json";
import contattami from "./assets/data/contattami.json";

export default {
  plugins: [
    nunjucks({
      variables: {
        "index.html": { ...index, ...global },
        "contattami.html": { ...contattami, ...global },
      },
    }),
  ],
};
