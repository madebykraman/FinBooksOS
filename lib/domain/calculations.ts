export interface CalculationLine{quantity:number;unitPrice:number;taxRate:number}
export interface InvoiceTotals{subtotal:number;tax:number;total:number}
export function calculateInvoiceTotals(lines:CalculationLine[],precision=2):InvoiceTotals{
 const round=(n:number)=>Number(n.toFixed(precision));
 const subtotal=round(lines.reduce((sum,line)=>sum+(line.quantity*line.unitPrice),0));
 const tax=round(lines.reduce((sum,line)=>sum+(line.quantity*line.unitPrice*line.taxRate/100),0));
 return {subtotal,tax,total:round(subtotal+tax)};
}