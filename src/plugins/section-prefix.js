import { visit } from 'unist-util-visit';
import { toString } from 'mdast-util-to-string';

const plugin = (options) => {
  const transformer = async (ast) => {
    let number = 1;
    visit(ast, 'heading', (node) => {
      const data = node.data || (node.data = {});
      const properties = (data.hProperties || (data.hProperties = {}));

      let {id} = properties;

      const headingTextNodes = node.children.filter(
        ({type}) => !['html', 'jsx'].includes(type),
      );
      const heading = toString(
        headingTextNodes.length > 0
          ? ({children: headingTextNodes})
          : headingNode,
      );

      id = encodeURI(heading);

      data.id = id;
      properties.id = id;
    });
  };
  return transformer;
};

module.exports = plugin;
