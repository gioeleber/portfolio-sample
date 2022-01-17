import nunjucks from "vite-plugin-nunjucks";
import index from "./index.json";

export default {
  plugins: [nunjucks({ variables: { "index.html": index } })],
};
