import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { createWriteStream } from "fs";
import { join } from "path";
import { storage } from "./storage";
import fs from "fs";
import path from "path";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const { name, email, subject, message } = req.body as ContactForm;
      
      // Validate form data
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: "All fields are required" });
      }
      
      // In a real application, you'd store this data or send an email
      // For now, we'll just log it and return a success response
      console.log("Contact form submission:", { name, email, subject, message });
      
      // Simulate a slight delay for realism
      await new Promise(resolve => setTimeout(resolve, 500));
      
      res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
      console.error("Error handling contact form:", error);
      res.status(500).json({ message: "Failed to send message" });
    }
  });

  // Endpoint to serve the resume PDF
  app.get("/api/resume/pdf", (req: Request, res: Response) => {
    try {
      // In a real implementation, you might generate a PDF on-the-fly
      // For now, we'll serve a pre-generated PDF
      
      const pdfDirectory = path.resolve(__dirname, "public");
      
      // Ensure the directory exists
      if (!fs.existsSync(pdfDirectory)) {
        fs.mkdirSync(pdfDirectory, { recursive: true });
      }
      
      const pdfPath = path.join(pdfDirectory, "John_Doe_Resume.pdf");
      
      // Check if we already have a PDF
      if (!fs.existsSync(pdfPath)) {
        // Create a very basic PDF (just a placeholder)
        const pdfContent = `
          %PDF-1.4
          1 0 obj
          << /Type /Catalog
             /Pages 2 0 R
          >>
          endobj
          2 0 obj
          << /Type /Pages
             /Kids [3 0 R]
             /Count 1
          >>
          endobj
          3 0 obj
          << /Type /Page
             /Parent 2 0 R
             /Resources << /Font << /F1 4 0 R >> >>
             /MediaBox [0 0 612 792]
             /Contents 5 0 R
          >>
          endobj
          4 0 obj
          << /Type /Font
             /Subtype /Type1
             /Name /F1
             /BaseFont /Helvetica
          >>
          endobj
          5 0 obj
          << /Length 85 >>
          stream
          BT
          /F1 24 Tf
          100 700 Td
          (John Doe - Software Architect Resume) Tj
          ET
          endstream
          endobj
          xref
          0 6
          0000000000 65535 f
          0000000009 00000 n
          0000000063 00000 n
          0000000122 00000 n
          0000000254 00000 n
          0000000345 00000 n
          trailer
          << /Size 6
             /Root 1 0 R
          >>
          startxref
          483
          %%EOF
        `;
        
        fs.writeFileSync(pdfPath, pdfContent);
      }
      
      // Set the appropriate headers and send the file
      res.setHeader("Content-Type", "application/pdf");
      res.setHeader("Content-Disposition", "attachment; filename=John_Doe_Resume.pdf");
      
      const fileStream = fs.createReadStream(pdfPath);
      fileStream.pipe(res);
    } catch (error) {
      console.error("Error serving PDF:", error);
      res.status(500).json({ message: "Failed to generate PDF" });
    }
  });
  
  // Alternative download endpoint
  app.get("/api/resume/download", (req: Request, res: Response) => {
    const filename = req.query.filename || "Resume.pdf";
    
    // Set headers to force download
    res.setHeader("Content-Disposition", `attachment; filename=${filename}`);
    res.setHeader("Content-Type", "application/pdf");
    
    // Send a basic PDF (same as above)
    const pdfContent = `
      %PDF-1.4
      1 0 obj
      << /Type /Catalog
         /Pages 2 0 R
      >>
      endobj
      2 0 obj
      << /Type /Pages
         /Kids [3 0 R]
         /Count 1
      >>
      endobj
      3 0 obj
      << /Type /Page
         /Parent 2 0 R
         /Resources << /Font << /F1 4 0 R >> >>
         /MediaBox [0 0 612 792]
         /Contents 5 0 R
      >>
      endobj
      4 0 obj
      << /Type /Font
         /Subtype /Type1
         /Name /F1
         /BaseFont /Helvetica
      >>
      endobj
      5 0 obj
      << /Length 85 >>
      stream
      BT
      /F1 24 Tf
      100 700 Td
      (John Doe - Software Architect Resume) Tj
      ET
      endstream
      endobj
      xref
      0 6
      0000000000 65535 f
      0000000009 00000 n
      0000000063 00000 n
      0000000122 00000 n
      0000000254 00000 n
      0000000345 00000 n
      trailer
      << /Size 6
         /Root 1 0 R
      >>
      startxref
      483
      %%EOF
    `;
    
    res.send(pdfContent);
  });

  const httpServer = createServer(app);
  return httpServer;
}
