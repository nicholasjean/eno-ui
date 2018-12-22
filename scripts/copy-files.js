const fse = require("fs-extra");
const path = require("path");

async function createPackageFile() {
  const packageData = await fse.readFile(path.resolve(__dirname, '../package.json'), 'utf8');
  const { scripts, devDependencies, ...packageDataRest } = JSON.parse(packageData);
  const newPackageData = {
    ...packageDataRest
  };
  const buildPath = path.resolve(__dirname, '../build/package.json');
  await fse.writeFile(buildPath, JSON.stringify(newPackageData, null, 2), 'utf8');
}

createPackageFile();