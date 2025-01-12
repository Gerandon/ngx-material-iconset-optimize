import readline from 'node:readline';
import fs from 'fs';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export async function runNgxMaterialIconSetOptimize() {
  console.log('Thanks for using ngx-material-iconset-optimize!')
  console.log('Please fill out the following, so we can optimize your Icon package size!');
  console.log('=============================>');
  let indexHtmlLocation = await readInputRecursively('Location of your index.html (./): ', 'index.html');
  console.log('=============================');
  const woffLocation = await readInputRecursively('WOFF location (./): ');

  console.log([indexHtmlLocation, woffLocation]);
  rl.close();
}

async function readInputRecursively(question: string, searchedFile?: string): Promise<string> {
  let indexHtmlLocation = '';
  const promise: Promise<string> = new Promise<string>((resolve, reject) => {
    rl.question(question, (location: string) => {
      resolve(location);
    });
  });
  try {
    do {
      indexHtmlLocation = await promise;
    } while (searchedFile ? !fs.readdirSync(indexHtmlLocation).includes(searchedFile) : !fs.readdirSync(indexHtmlLocation))
  } catch (e) {
    return readInputRecursively(question, searchedFile);
  }
  return indexHtmlLocation;
}
