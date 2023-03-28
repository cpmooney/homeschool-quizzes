import { H3Event, NodeServerResponse } from "h3";
import { buildUrl } from "build-url-ts";
import * as htmlPdfNode from "html-pdf-node";
import { logger } from "~/lib/logger";

const paperFormat = "letter";

const generatePdfAsync = (url: string): Promise<Buffer> => {
  return new Promise<Buffer>((resolve) => {
    logger.info({
        method: 'generatePdfAsync',
        url
    })
    htmlPdfNode.generatePdf(
      { url: url },
      { format: paperFormat },
      (err, buffer) => {
        if (err) {
        logger.error({
            method: 'generatePdfAsync',
            err
        });
        }
        resolve(buffer);
      }
    );
  });
};

const sendPdf = (response: NodeServerResponse, pdfBuffer: Buffer) => {
  response.setHeader("Content-Type", "application/pdf");
  response.setHeader("Content-Disposition", 'attachment; filename="quiz.pdf"');
  response.end(pdfBuffer);
};

export const generatePdf = async (
  event: H3Event,
  url: string,
  params: Record<string, string>
) => {
  const pageUrl = buildUrl(url, { queryParams: params });
  logger.info({
    method: "generatePdf",
    pageUrl,
    params: {
      queryParams: params,
    },
  });
  const buffer = await generatePdfAsync(pageUrl);
  sendPdf(event.node.res, buffer);
};
