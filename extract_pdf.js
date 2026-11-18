const fs = require('fs');
const { PDFParse } = require('pdf-parse');

async function main() {
    const buffer = fs.readFileSync('Landing_webinar_cambios_para_Instructions.pdf');
    const uint8 = new Uint8Array(buffer);
    const parser = new PDFParse(uint8);
    const result = await parser.getText();
    const text = typeof result === 'string' ? result : 
                 (result && result.text) ? result.text :
                 JSON.stringify(result, null, 2);
    fs.writeFileSync('pdf_extracted.txt', text, 'utf8');
    console.log('Done. Length:', text.length);
}

main().catch(err => console.error('Error:', err.message));
