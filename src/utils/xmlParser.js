import xml2js from 'xml2js';

export const parseXml = xml => {
  return new Promise((resolve, reject) => {
    xml2js.parseString(xml, (err, result) => {
      if (err) {
        reject(err);
      } else {
        // Extract form fields from parsed XML
        const fields = [];
        const fieldNodes = result.form.field;
        if (fieldNodes) {
          fieldNodes.forEach(node => {
            const type = node.$.type;
            const label = node.$.label;
            const options = node.$.options;
            fields.push({ type, label, options });
          });
        }
        resolve(fields);
      }
    });
  });
};
