import jsPDF from 'jspdf';
import { DecisionRecord } from '../types';

interface GenerateFeedbackPDFParams {
  dilemmaStep: number;
  dilemmaTheme: string;
  dilemmaTitle: string;
  bookConnection: string;
  selectedOptionLabel: string;
  selectedOptionText: string;
  consequence: string;
  bookConnectionDetail: string;
  coreIVConnectionDetail: string;
  reflectionQuestion: string;
}

export function downloadFeedbackPDF(params: GenerateFeedbackPDFParams) {
  const doc = new jsPDF({
    unit: 'pt',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 45;
  const contentWidth = pageWidth - margin * 2;
  let y = 50;

  // Header banner
  doc.setFillColor(28, 25, 23);
  doc.rect(margin, y, contentWidth, 36, 'F');

  doc.setTextColor(250, 247, 242);
  doc.setFont('times', 'bold');
  doc.setFontSize(14);
  doc.text('DECIDE TU CAMINO — CORE IV (PERSONA Y SU ACTUAR)', margin + 15, y + 23);
  y += 55;

  // Subtitle & Step
  doc.setTextColor(180, 83, 9);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.text(`PELDAÑO ${params.dilemmaStep} DE 10 · EJE: ${params.dilemmaTheme.toUpperCase()}`, margin, y);
  y += 18;

  doc.setTextColor(28, 25, 23);
  doc.setFont('times', 'bold');
  doc.setFontSize(18);
  doc.text(params.dilemmaTitle, margin, y);
  y += 16;

  doc.setTextColor(100, 100, 100);
  doc.setFont('times', 'italic');
  doc.setFontSize(10);
  doc.text(params.bookConnection, margin, y);
  y += 24;

  // Divider
  doc.setDrawColor(220, 220, 220);
  doc.line(margin, y, margin + contentWidth, y);
  y += 20;

  const renderBlock = (title: string, bodyText: string, isItalic = false, isAccent = false) => {
    // Title
    doc.setTextColor(isAccent ? 180 : 70, isAccent ? 83 : 70, isAccent ? 9 : 70);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.text(title.toUpperCase(), margin, y);
    y += 13;

    // Box background
    doc.setFont(isItalic ? 'times' : 'helvetica', isItalic ? 'italic' : 'normal');
    doc.setFontSize(10);
    doc.setTextColor(30, 30, 30);
    const splitText = doc.splitTextToSize(bodyText, contentWidth - 20);
    const boxHeight = splitText.length * 14 + 14;

    doc.setFillColor(isAccent ? 254 : 248, isAccent ? 243 : 246, isAccent ? 199 : 244);
    doc.roundedRect(margin, y, contentWidth, boxHeight, 4, 4, 'F');
    doc.text(splitText, margin + 10, y + 16);
    y += boxHeight + 16;
  };

  // 1. Tu decisión
  renderBlock('1. Tu Decisión', `«${params.selectedOptionLabel}»\n${params.selectedOptionText}`);

  // 2. Consecuencia narrativa
  renderBlock('2. Consecuencia Narrativa', `«${params.consequence}»`, true, true);

  // 3. Conexión con el libro
  renderBlock('3. Conexión con la Obra Literaria', params.bookConnectionDetail, true);

  // 4. Conexión con Core IV
  renderBlock('4. Conexión con los Temas de Core IV', params.coreIVConnectionDetail);

  // 5. Pregunta de reflexión
  renderBlock('5. Pregunta de Discernimiento Personal', `«${params.reflectionQuestion}»`, true, true);

  // Footer
  doc.setTextColor(130, 130, 130);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.text(
    'Experiencia individual formativa · Core Curriculum Universitario · Persona y su actuar',
    margin,
    doc.internal.pageSize.getHeight() - 30
  );

  doc.save(`CoreIV_Feedback_Peldano_${params.dilemmaStep}.pdf`);
}
