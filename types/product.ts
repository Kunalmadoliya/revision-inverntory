export type Product = {
  id: string;

  name: string;
  price: GLfloat;
  description: string;
  quantity: string;

  processedImageUrls: string[];
  csvFields: Record<string, string>;
};

export type ProcessedImage = {
    jobId : string 

    status : "pending" | "processing" | "done" | "error";
    total : GLfloat
    processed : number
    error : string[]
};
