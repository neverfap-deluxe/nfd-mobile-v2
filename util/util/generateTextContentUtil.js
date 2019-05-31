const fse = require('fs-extra');
const { generateProperTitle } = require('./generateUtil');

const generateTitle = title => `<Text style={content__title}>${title}</Text>`;

const generateDate = date => `<Text style={content__date}>${date}</Text>`;

const generateDefaultExport = allContentNamesExport =>
  `export default { ${allContentNamesExport} } `;

const generateClassReplacement = content =>
  content
    .replace(/<hr class=\"/g, '<View style={')
    .replace(/\"\/\u003e/g, '}/>');

const generateContentReplacement = content =>
  generateClassReplacement(content)
    .replace(/\u003cp\u003e/g, '<Text style={p}>') // <p>
    .replace(/\u003c\/p\u003e/g, '</Text>') // </p>
    .replace(/(?=<!--)([\s\S]*?)-->/g, '') // <!-- -->
    .replace(/<u>/g, '<Text style={{textDecorationLine: "underline"}}>') // </u>
    .replace(/<strong>/g, '<Text style={{fontWeight: "bold"}}>') // </ a tag references>
    .replace(/<\/u>/g, '</Text>') // </ u tag references>
    .replace(/<\/strong>/g, '</Text>') // </ a tag references>
    .replace(/<\/?a[^>]*>/g, '') // </ a tag references>
    .replace(/<\/h[123456]>/g, '</Text>') //
    .replace(/<h1>/g, '<Text style={h1}>') //
    .replace(/<h2>/g, '<Text style={h2}>') //
    .replace(/<h3>/g, '<Text style={h3}>') //
    .replace(/<h4>/g, '<Text style={h4}>') //
    .replace(/<h5>/g, '<Text style={h5}>') //
    .replace(/<ul>/g, '<View style={ul}>') //
    .replace(/<\/ul>/g, '</View>') //
    .replace(/<li>/g, '<Text style={li}>') //
    .replace(/<\/li>/g, '</Text>') //
    .replace(
      /<div style="margin-top: 3rem;" class="five__principles__list__page">/g,
      ''
    ) //
    .replace(/<\/div><\/span>/g, '</Text>') //
    .replace(
      /<span><div class="five__principles__item__page">/g,
      '<Text style={h2}>'
    ) //
    .replace(/<\/div>/g, ''); //

const generateContentHeader = () =>
  `
import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { ContentContainer } from '../../emotion/componentStyles';
import { hr, hr2, hr2__bottom, hr3, hr3__bottom, hr4, hr4__bottom, hrul, hrul__bottom } from '../../emotion/hrStyles';
import { h1, h2, h3, h4, h5, p, ul, li, content__date, content__title } from '../../emotion/textStyles';
`;

const generateContent = (item, properTitle, type) =>
  `
export const ${properTitle} = ({ componentId }: any) => {
  return (
    <ScrollView>
      <ContentContainer>
        ${generateTitle(item.title)}
        ${generateDate(item.date)}
        ${generateContentReplacement(item.content)}
      </ContentContainer>
    </ScrollView>
  );
}
`;

const generateTextFilesAll = (items, type) => {
  let allContent = '';
  let allContentNamesExport = '';

  for (const item of items) {
    const properTitle = generateProperTitle(item.title);
    allContentNamesExport += `${properTitle},`;
    allContent += generateContent(item, properTitle);
  }

  const template = `${generateContentHeader()}\n${allContent}\n${generateDefaultExport(
    allContentNamesExport
  )}`;
  fse.outputFileSync(`src/content/${type}/index.tsx`, template, [{}]);
};

module.exports = {
  generateTextFilesAll,
  // generateFiles,
};

// const generateFiles = (items, type) => {
//   for (const item of items) {
//     const properTitle = generateProperTitle(item.title);
//     const template = `${generateContentHeader()}\n ${generateContent(
//       item,
//       properTitle
//     )}`;
//     fse.outputFileSync(`src/content/${type}/${properTitle}.tsx`, template, [
//       {},
//     ]);
//   }
// };
