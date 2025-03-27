import { resumeData } from "./resumeData";

export const generatePDF = async () => {
  try {
    // In a real implementation, we might:
    // 1. Call a backend API endpoint to generate the PDF
    // 2. Or use a client-side library like jsPDF to generate it
    
    // For now, we'll create a simple blob with pre-made content
    const response = await fetch("/api/resume/pdf");
    
    if (!response.ok) {
      throw new Error("Failed to generate PDF");
    }
    
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = `${resumeData.personalInfo.name.replace(/\s+/g, "_")}_Resume.pdf`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Error generating PDF:", error);
    // Fallback to client-side PDF generation
    createClientSidePDF();
  }
};

const createClientSidePDF = () => {
  // Create a simple anchor tag that points to a data URI
  const { personalInfo } = resumeData;
  const fileName = `${personalInfo.name.replace(/\s+/g, "_")}_Resume.pdf`;
  
  const a = document.createElement("a");
  a.style.display = "none";
  a.href = `/api/resume/download?filename=${fileName}`;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
