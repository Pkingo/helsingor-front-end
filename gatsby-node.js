import path from "path";

async function turnEventsIntoPages({ graphql, actions }) {
  const eventTemplate = path.resolve("./src/templates/Event.js");
  const { data } = await graphql(`
    query MyQuery {
      events: allSanityService {
        nodes {
          id
        }
      }
    }
  `);
  data.events.nodes.forEach((event) => {
    actions.createPage({
      path: `begivenhed/${event.id}`,
      component: eventTemplate,
      context: {
        id: event.id,
      },
    });
  });
}

export async function createPages(params) {
  await Promise.all([turnEventsIntoPages(params)]);
}
