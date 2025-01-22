import zl from 'zip-lib';

const zipName = 'module.zip';
const zip = new zl.Zip();
zip.addFolder('lang', 'lang');
zip.addFolder('lib', 'lib');
zip.addFolder('src', 'src');
zip.addFolder('styles', 'styles');
zip.addFile('module.json');
zip.addFile('Readme.md');
zip.addFile('LICENSE.md');
zip.archive(`./${zipName}`).then(
  function () {
    // eslint-disable-next-line no-undef
    console.log(`Created ${zipName}`);
  },
  function (err) {
    // eslint-disable-next-line no-undef
    console.log(err);
  },
);
