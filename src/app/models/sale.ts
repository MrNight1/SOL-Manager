export class Sale {
  id: string;
  concept: string;
  amount: number;
  date: string;
  paidAmount?: number;
  quantity: number;
  status: string;
  who: string;
  type: string; // sales, owes or loans
  color: string;
}
