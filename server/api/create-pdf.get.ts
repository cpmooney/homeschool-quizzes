import { defineEventHandler, H3Event } from 'h3'
import { generatePdf } from '~/lib/generate-pdf'
import { logger } from '~/lib/logger'

export default defineEventHandler(async (event: H3Event) => {
  const query = getQuery(event) as Record<string, string>;
  const host = event.node.req.headers.referer!;
  logger.info({
    method: 'create-pdf.get',
    host: host,
    query: JSON.stringify(query),
  });
  await generatePdf(event, `${host}quiz-page`, query);
});
