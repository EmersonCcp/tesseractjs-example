import { createWorker } from "tesseract.js";

(async () => {
  const worker = await createWorker("spa");
  const ret = await worker.recognize("./frases.jpg");
  console.log(ret.data.text);
  await worker.terminate();
})();
