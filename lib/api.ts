const POST_GRAPHQL_FIELDS = `
  slug
  title
  tag
  postCardImage {
    url
  }
  coverImage {
    url
  }
  titleContent{
    json
  }
  numbersBar
  clientImage{
    url
  }
  clientContent{
    json
  }
  challengeContent{
    json
  }
  solutionContent{
    json
  }
  resultsContent{
    json
  }
  additionalPostsCollection{
    items{
      slug
      title
      tag
      coverImage {
        url
      }
    }
  }
`;

const HOMEPAGE_GRAPHQL_FIELDS = `
  introHeader{
      json
    }
    introContent{
      json
    }
    introImage{
      url
    }
    partnersContent{
      json
    }
    partnerLogosCollection{
      items{
        url
      }
    }
    servicesHeader{
      json
    }
    servicesContentCollection{
      items{
        title
        image{
          url
        }
        url
      }
    }
    chooseUsHeader{
      json
    }
    chooseUsImage{
      url
    }
    chooseUsNumbers
    whoHeader{
      json
    }
    whoContent{
      json
    }
    whoImage{
      url
    }
    testimonialsHeader{
      json
    }
    testimonialsCollection{
      items{
        name
        title
        quote
        image{
          url
        }
      }
    }
    formContent{
      json
    }
`;

const CONTACTPAGE_GRAPHQL_FIELDS = `
formTitle {
  json
}
formTitleImage {
  url
}
formContentSubTitle
formContentTitle {
  json
}
contactList
formContentImage {
  url
}
`;

const WHATWEDOPAGE_GRAPHQL_FIELDS = `
headerTitle {
  json
}
headerContent {
  json
}
headerImage {
  url
}
bodySubTitle
bodyTitle {
  json
}
bodyBlocksCollection{
  items{
    title
    content {
      json
    }
    image{
      url
    }
  }
}
formTitle {
  json
}
formContent {
  json
}
`;

const WHOWEHELPPAGE_GRAPHQL_FIELDS = `
header {
  json
}
headerContent {
  json
}
headerImagesCollection {
  items {
    url
  }
}
bodyTitle {
  json
}
contentBlocksCollection {
  items {
    title
    checklist {
      json
    }
    url
    blockImage {
      url
    }
  }
}
formTitle {
  json
}
formContent {
  json
}
`;

const WHOWEAREPAGE_GRAPHQL_FIELDS = `
header {
  json
}
headerContent {
  json
}
headerImage {
  url
}
visionSubTitle
visionTitle {
  json
}
visionContent {
  json
}
visionImage {
  url
}
storySubTitle 
storyTitle {
  json
}
stortContent {
  json
}
storyImage {
  url
}
valuesTitle {
  json
}
valuesBlocksCollection {
  items {
    title
    checklist {
      json
    }
    url
    blockImage {
      url
    }
  }
}
teamSubTitle
teamTitle {
  json
}
teamBlocksCollection {
  items {
    name {
      json
    }
    title
    image {
      url
    }
    bio {
      json
    }
  }
}
formTitle {
  json
}
formContent {
  json
}

`;




async function fetchGraphQL(query: string, preview = false): Promise<any> {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
      next: { tags: ["posts"] },
    },
  ).then((response) => response.json());
}

function extractPost(fetchResponse: any): any {
  return fetchResponse?.data?.postCollection?.items?.[0];
}

function extractPostEntries(fetchResponse: any): any[] {
  console.log(fetchResponse)
  return fetchResponse?.data?.postCollection?.items;
}

function extractHomePageContent(fetchResponse: any): any[] {
  return fetchResponse?.data?.homePage;
}

function extractContactPageContent(fetchResponse: any): any[] {
  return fetchResponse?.data?.contactPage;
}

function extractWhatWeDoPageContent(fetchResponse: any): any[] {
  return fetchResponse?.data?.whatWeDoPage;
}

function extractWhoWeHelpPageContent(fetchResponse: any): any[] {
  return fetchResponse?.data?.whoWeHelpPage;
}

function extractWhoWeArePageContent(fetchResponse: any): any[] {
  return fetchResponse?.data?.whoWeAre;
}

export async function getPostBySlug(slug: string | null): Promise<any> {
  console.log(slug)
  const entry = await fetchGraphQL(
    `query {
      postCollection(where: { slug: "${slug}" }, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    true,
  );
  return extractPost(entry);
}

export async function getAllPosts(): Promise<any[]> {
  const entries = await fetchGraphQL(
    `query {
      postCollection(where: { slug_exists: true } ) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`
  );
  return extractPostEntries(entries);
}

export async function getAllPostSlugs() {
  const query = `
    query AllPostSlugs {
      postCollection(limit: 100) { # Adjust limit as needed
        items {
          slug
        }
      }
    }
  `;

  const response = await fetchGraphQL(query);
  // Map the response to the format generateStaticParams expects
  return response.data.postCollection.items.map((item: any) => ({
    slug: item.slug,
  }));
}


export async function getPostAndMorePosts(
  slug: string,
  preview: boolean,
): Promise<any> {
  const entry = await fetchGraphQL(
    `query {
      postCollection(where: { slug: "${slug}" }, preview: ${
        preview ? "true" : "false"
      }, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview,
  );
  const entries = await fetchGraphQL(
    `query {
      postCollection(where: { slug_not_in: "${slug}" }, order: date_DESC, preview: ${
        preview ? "true" : "false"
      }, limit: 2) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview,
  );
  return {
    post: extractPost(entry),
    morePosts: extractPostEntries(entries),
  };
}

export async function getHomePage(id: string): Promise<any[]> {
  const entries = await fetchGraphQL(
    `query {
      homePage(id: "59NM2CrNxplR34nUN5OKv7") {
        ${HOMEPAGE_GRAPHQL_FIELDS}
      }
    }`,
    false
  );
  return extractHomePageContent(entries);
}

export async function getContactPage(id: string): Promise<any[]> {
  const entries = await fetchGraphQL(
    `query {
      contactPage(id: "5QgKyAHqu5c9ZFVG7rhUzO") {
        ${CONTACTPAGE_GRAPHQL_FIELDS}
      }
    }`,
    false
  );
  return extractContactPageContent(entries);
}

export async function getWhatWeDoPage(id: string): Promise<any[]> {
  const entries = await fetchGraphQL(
    `query {
      whatWeDoPage(id: "26Ta0450DZkGKjd2lAJ24W") {
        ${WHATWEDOPAGE_GRAPHQL_FIELDS}
      }
    }`,
    false
  );
  return extractWhatWeDoPageContent(entries);
}

export async function getWhoWeHelpPage(id: string): Promise<any[]> {
  const entries = await fetchGraphQL(
    `query {
      whoWeHelpPage(id: "3QwyIBrT0ksiWq8StyaTGK") {
        ${WHOWEHELPPAGE_GRAPHQL_FIELDS}
      }
    }`,
    false
  );
  return extractWhoWeHelpPageContent(entries);
}

export async function getWhoWeArePage(id: string): Promise<any[]> {
  const entries = await fetchGraphQL(
    `query {
      whoWeAre(id: "7qnsJAkQ160NUVN7jh1Hlb") {
        ${WHOWEAREPAGE_GRAPHQL_FIELDS}
      }
    }`,
    false
  );
  return extractWhoWeArePageContent(entries);
}