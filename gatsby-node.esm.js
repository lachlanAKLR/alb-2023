import path from 'path';

async function projectPages({ graphql, actions }) {
  const journalTemplate = path.resolve('./src/templates/Journal.js');

  const { data } = await graphql(`
    query {
      journals: allSanityJournal {
        nodes {
          title
          slug {
            current
          }
        }
      }
    }
  `);
  data.journals.nodes.forEach((journal) => {
    actions.createPage({
      path: `journal/${journal.slug.current}`,
      component: journalTemplate,
      context: {
        slug: journal.slug.current,
      },
    });
  });
}

export async function createPages(params) {
  await projectPages(params);
}
