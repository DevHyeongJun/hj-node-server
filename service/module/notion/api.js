
const { Client } = require('@notionhq/client')
module.exports.NotionApi = {
    
  getProjList : async () => {
    const notionKey = process.env.NOTION_TOKEN
    const notionDatabaseKey = process.env.NOTION_DATABASE_ID

    const notion = new Client({ auth: notionKey })
    const response = await notion.databases.query({ database_id: notionDatabaseKey })
    return response;
  }
}