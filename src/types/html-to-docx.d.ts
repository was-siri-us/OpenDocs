declare module "html-to-docx" {
  interface DocxOptions {
    // Define specific docx options if known, for example:
    fontSize?: number;
    fontFamily?: string;
    footer?: boolean;
    pageNumber?: boolean;
    table?: { row?: { cantSplit: boolean } },
    // Add any other known docx options here
  }
  export default function HTMLtoDOCX(
    html: string,
    options: null,
    docxOptions?: DocxOptions
  ): Promise<Buffer>;
}
